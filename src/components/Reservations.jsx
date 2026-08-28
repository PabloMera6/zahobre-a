import { useEffect, useMemo, useState } from "react";
import { FaLock, FaPlus, FaRegCalendarCheck, FaTrash } from "react-icons/fa";

const APARTMENTS = ["Casa 1", "Casa 2", "Casa 3", "Casa 4", "Casa 5", "Casa 6"];
const blankReservation = (apartment) => ({
  apartment,
  guest: "",
  price: "",
  start: "",
  end: "",
  notes: "",
});

const toLocalDate = (value) => new Date(`${value}T12:00:00`);
const formatDate = (value) => toLocalDate(value).toLocaleDateString("es-ES", { day: "2-digit", month: "short" });

export default function Reservations() {
  const [apartment, setApartment] = useState(APARTMENTS[0]);
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [admin, setAdmin] = useState(false);
  const [password, setPassword] = useState("");
  const [form, setForm] = useState(blankReservation(APARTMENTS[0]));
  const [editing, setEditing] = useState(null);
  const [saving, setSaving] = useState(false);

  const request = async (url, options = {}) => {
    const headers = { "Content-Type": "application/json", ...options.headers };
    if (password) headers.Authorization = `Bearer ${password}`;
    const response = await fetch(url, { ...options, headers });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || "No se ha podido completar la operación.");
    return data;
  };

  const loadReservations = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await request(`/api/reservas?apartment=${encodeURIComponent(apartment)}`);
      setReservations(data.reservations || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadReservations(); }, [apartment]);
  useEffect(() => { setForm((current) => ({ ...current, apartment })); }, [apartment]);

  const occupancy = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return reservations.filter((reservation) => toLocalDate(reservation.end) >= today).length;
  }, [reservations]);

  const enterAdmin = async (event) => {
    event.preventDefault();
    try {
      await request("/api/reservas?admin=1");
      setAdmin(true);
      setError("");
      await loadReservations();
    } catch (err) {
      setError("Contraseña incorrecta.");
    }
  };

  const saveReservation = async (event) => {
    event.preventDefault();
    if (form.end < form.start) return setError("La fecha de salida debe ser posterior a la de entrada.");
    setSaving(true);
    setError("");
    try {
      const method = editing ? "PUT" : "POST";
      await request("/api/reservas", { method, body: JSON.stringify(editing ? { ...form, id: editing } : form) });
      setForm(blankReservation(apartment));
      setEditing(null);
      await loadReservations();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const startEdit = (reservation) => {
    setEditing(reservation.id);
    setForm({ ...reservation, price: reservation.price ?? "", notes: reservation.notes ?? "" });
    document.getElementById("admin-form")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const removeReservation = async (id) => {
    if (!window.confirm("¿Quieres cancelar esta reserva?")) return;
    try {
      await request(`/api/reservas?id=${encodeURIComponent(id)}`, { method: "DELETE" });
      await loadReservations();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section id="reservas" className="reservation-section">
      <div className="reservation-shell">
        <div className="reservation-heading">
          <span>ESTANCIAS EN ZAHORA</span>
          <h2>Consulta la disponibilidad</h2>
          <p>Elige un apartamento y consulta las fechas ya ocupadas. Para reservar, ponte en contacto con nosotros.</p>
        </div>

        <div className="reservation-tabs" role="tablist" aria-label="Apartamentos">
          {APARTMENTS.map((item) => <button key={item} role="tab" aria-selected={apartment === item} className={apartment === item ? "active" : ""} onClick={() => setApartment(item)}>{item}</button>)}
        </div>

        <div className="availability-card">
          <div className="availability-card__title"><FaRegCalendarCheck /><div><strong>{apartment}</strong><span>{occupancy} reserva{occupancy === 1 ? "" : "s"} registrada{occupancy === 1 ? "" : "s"}</span></div></div>
          {loading ? <p className="reservation-empty">Cargando disponibilidad…</p> : reservations.length === 0 ? <p className="reservation-empty">No hay fechas ocupadas registradas para este alojamiento.</p> : <div className="reservation-list">
            {reservations.map((reservation) => <article className="reservation-row" key={reservation.id}>
              <div><span>Ocupado</span><strong>{formatDate(reservation.start)} — {formatDate(reservation.end)}</strong></div>
              {admin && <div className="reservation-admin-actions"><button onClick={() => startEdit(reservation)}>Editar</button><button className="danger" aria-label="Eliminar reserva" onClick={() => removeReservation(reservation.id)}><FaTrash /></button></div>}
            </article>)}
          </div>}
        </div>

        {error && <p className="reservation-error" role="alert">{error}</p>}

        {!admin ? <form className="admin-login" onSubmit={enterAdmin}>
          <FaLock /><label htmlFor="admin-password">Acceso administración</label><input id="admin-password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Contraseña" required /><button type="submit">Entrar</button>
        </form> : <div id="admin-form" className="admin-panel">
          <div className="admin-panel__heading"><div><span>ADMINISTRACIÓN</span><h3>{editing ? "Editar reserva" : "Nueva reserva"}</h3></div><button className="logout" onClick={() => { setAdmin(false); setPassword(""); setEditing(null); setForm(blankReservation(apartment)); loadReservations(); }}>Cerrar sesión</button></div>
          <form className="reservation-form" onSubmit={saveReservation}>
            <label>Apartamento<select value={form.apartment} onChange={(event) => setForm({ ...form, apartment: event.target.value })}>{APARTMENTS.map((item) => <option key={item}>{item}</option>)}</select></label>
            <label>Huésped<input required value={form.guest} onChange={(event) => setForm({ ...form, guest: event.target.value })} /></label>
            <label>Entrada<input required type="date" value={form.start} onChange={(event) => setForm({ ...form, start: event.target.value })} /></label>
            <label>Salida<input required type="date" value={form.end} onChange={(event) => setForm({ ...form, end: event.target.value })} /></label>
            <label>Precio (€)<input min="0" step="0.01" type="number" value={form.price} onChange={(event) => setForm({ ...form, price: event.target.value })} /></label>
            <label className="notes">Notas<textarea value={form.notes} onChange={(event) => setForm({ ...form, notes: event.target.value })} /></label>
            <div className="form-buttons"><button type="submit" disabled={saving}><FaPlus /> {saving ? "Guardando…" : editing ? "Guardar cambios" : "Añadir reserva"}</button>{editing && <button type="button" className="secondary" onClick={() => { setEditing(null); setForm(blankReservation(apartment)); }}>Cancelar</button>}</div>
          </form>
        </div>}
      </div>
    </section>
  );
}
