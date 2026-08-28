const key = "zahobrena:reservas";

async function kv(command, ...args) {
  const baseUrl = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;
  if (!baseUrl || !token) throw new Error("La base de datos no está configurada.");
  const response = await fetch(`${baseUrl}/${command}/${args.map(encodeURIComponent).join("/")}`, { headers: { Authorization: `Bearer ${token}` } });
  if (!response.ok) throw new Error("No se ha podido acceder a la base de datos.");
  return response.json();
}

const isAdmin = (req) => {
  const token = req.headers.authorization?.replace(/^Bearer\s+/i, "");
  return Boolean(process.env.ADMIN_PASSWORD && token === process.env.ADMIN_PASSWORD);
};

async function getReservations() { return (await kv("get", key)).result || []; }
async function putReservations(reservations) { await kv("set", key, JSON.stringify(reservations)); }
const publicReservation = ({ id, apartment, start, end }) => ({ id, apartment, start, end });

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const reservations = await getReservations();
      const apartment = typeof req.query.apartment === "string" ? req.query.apartment : null;
      const filtered = apartment ? reservations.filter((item) => item.apartment === apartment) : reservations;
      return res.status(200).json({ reservations: isAdmin(req) ? filtered : filtered.map(publicReservation) });
    }
    if (!isAdmin(req)) return res.status(401).json({ error: "No autorizado." });
    const reservations = await getReservations();
    if (req.method === "POST") {
      const { apartment, guest, price, start, end, notes = "" } = req.body || {};
      if (![apartment, guest, start, end].every((item) => typeof item === "string" && item.trim()) || end < start) return res.status(400).json({ error: "Revisa los datos de la reserva." });
      const reservation = { id: crypto.randomUUID(), apartment, guest: guest.trim(), price: price === "" ? null : Number(price), start, end, notes: notes.trim(), createdAt: new Date().toISOString() };
      reservations.push(reservation);
      await putReservations(reservations);
      return res.status(201).json({ reservation });
    }
    if (req.method === "PUT") {
      const { id, apartment, guest, price, start, end, notes = "" } = req.body || {};
      const index = reservations.findIndex((item) => item.id === id);
      if (index === -1 || ![apartment, guest, start, end].every((item) => typeof item === "string" && item.trim()) || end < start) return res.status(400).json({ error: "Revisa los datos de la reserva." });
      reservations[index] = { ...reservations[index], apartment, guest: guest.trim(), price: price === "" ? null : Number(price), start, end, notes: notes.trim() };
      await putReservations(reservations);
      return res.status(200).json({ reservation: reservations[index] });
    }
    if (req.method === "DELETE") {
      const id = req.query.id;
      const updated = reservations.filter((item) => item.id !== id);
      if (updated.length === reservations.length) return res.status(404).json({ error: "Reserva no encontrada." });
      await putReservations(updated);
      return res.status(204).end();
    }
    return res.status(405).json({ error: "Método no permitido." });
  } catch (error) {
    return res.status(500).json({ error: error.message || "Error interno." });
  }
}
