import { useEffect, useMemo, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaPlus, FaTrash } from "react-icons/fa";

const APARTMENTS = ["Casa 1", "Casa 2", "Casa 3", "Casa 4", "Casa 5", "Casa 6"];
const blankReservation = (apartment) => ({ apartment, guest: "", price: "", start: "", end: "", notes: "" });
const pad = (value) => String(value).padStart(2, "0");
const dateKey = (date) => `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
const monthName = (date) => date.toLocaleDateString("es-ES", { month: "long", year: "numeric" });

function Calendar({ month, reservations, onPrevious, onNext, canGoPrevious, canGoNext }) {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const firstDay = new Date(month.getFullYear(), month.getMonth(), 1);
  const lastDay = new Date(month.getFullYear(), month.getMonth() + 1, 0);
  const offset = (firstDay.getDay() + 6) % 7;
  const cells = Array.from({ length: offset + lastDay.getDate() }, (_, index) => index < offset ? null : new Date(month.getFullYear(), month.getMonth(), index - offset + 1));
  while (cells.length % 7) cells.push(null);
  const occupied = (day) => reservations.some((reservation) => { const value = dateKey(day); return value >= reservation.start && value <= reservation.end; });
  return <div className="booking-calendar"><div className="calendar-controls"><button onClick={onPrevious} disabled={!canGoPrevious} aria-label="Mes anterior"><FaChevronLeft /></button><h3>{monthName(month)}</h3><button onClick={onNext} disabled={!canGoNext} aria-label="Mes siguiente"><FaChevronRight /></button></div><div className="calendar-weekdays">{["L", "M", "X", "J", "V", "S", "D"].map((day) => <span key={day}>{day}</span>)}</div><div className="calendar-grid">{cells.map((day, index) => { if (!day) return <span className="calendar-day empty" key={`empty-${index}`} />; const past = day < today; const isOccupied = occupied(day); const state = past ? "past" : isOccupied ? "occupied" : "available"; return <span className={`calendar-day ${state}`} key={dateKey(day)}><b>{day.getDate()}</b><small>{past ? "" : isOccupied ? "Ocupado" : "Disponible"}</small></span>; })}</div></div>;
}

export default function Reservations({ adminMode = false }) {
  const today = useMemo(() => { const value = new Date(); value.setHours(0, 0, 0, 0); return value; }, []);
  const lastDate = useMemo(() => { const value = new Date(today); value.setFullYear(value.getFullYear() + 2); return value; }, [today]);
  const [month, setMonth] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [apartment, setApartment] = useState(APARTMENTS[0]);
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState("");
  const [form, setForm] = useState(blankReservation(APARTMENTS[0]));
  const [editing, setEditing] = useState(null);
  const [saving, setSaving] = useState(false);
  const request = async (url, options = {}) => { const headers = { "Content-Type": "application/json", ...options.headers }; if (password) headers.Authorization = `Bearer ${password}`; const response = await fetch(url, { ...options, headers }); const data = await response.json().catch(() => ({})); if (!response.ok) throw new Error(data.error || "No se ha podido completar la operación."); return data; };
  const loadReservations = async () => { setLoading(true); setError(""); try { const data = await request(`/api/reservas?apartment=${encodeURIComponent(apartment)}`); setReservations(data.reservations || []); } catch (err) { setError(err.message); } finally { setLoading(false); } };
  useEffect(() => { loadReservations(); }, [apartment, authorized]);
  useEffect(() => { setForm((current) => ({ ...current, apartment })); }, [apartment]);
  const enterAdmin = async (event) => { event.preventDefault(); try { await request("/api/reservas?admin=1"); setAuthorized(true); setError(""); } catch { setError("Contraseña incorrecta."); } };
  const saveReservation = async (event) => { event.preventDefault(); if (form.end < form.start) return setError("La fecha de salida debe ser posterior a la de entrada."); setSaving(true); setError(""); try { await request("/api/reservas", { method: editing ? "PUT" : "POST", body: JSON.stringify(editing ? { ...form, id: editing } : form) }); setForm(blankReservation(apartment)); setEditing(null); await loadReservations(); } catch (err) { setError(err.message); } finally { setSaving(false); } };
  const removeReservation = async (id) => { if (!window.confirm("¿Quieres cancelar esta reserva?")) return; try { await request(`/api/reservas?id=${encodeURIComponent(id)}`, { method: "DELETE" }); await loadReservations(); } catch (err) { setError(err.message); } };
  const canGoPrevious = month > new Date(today.getFullYear(), today.getMonth(), 1);
  const canGoNext = new Date(month.getFullYear(), month.getMonth() + 1, 1) <= new Date(lastDate.getFullYear(), lastDate.getMonth(), 1);

  if (adminMode) return <main className="admin-page"><div className="admin-shell"><a className="back-to-site" href="/">← Volver a la web</a><p className="admin-kicker">ZAHOBREÑA · ÁREA PRIVADA</p><h1>Gestión de reservas</h1>{!authorized ? <form className="admin-access" onSubmit={enterAdmin}><p>Introduce la contraseña de administración para continuar.</p><label>Contraseña<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} autoFocus required /></label><button type="submit">Acceder</button></form> : <><div className="admin-panel__heading"><div><span>RESERVAS</span><h2>{editing ? "Editar reserva" : "Nueva reserva"}</h2></div><button className="logout" onClick={() => { setAuthorized(false); setPassword(""); }}>Cerrar sesión</button></div><form className="reservation-form" onSubmit={saveReservation}><label>Apartamento<select value={form.apartment} onChange={(event) => setForm({ ...form, apartment: event.target.value })}>{APARTMENTS.map((item) => <option key={item}>{item}</option>)}</select></label><label>Huésped<input required value={form.guest} onChange={(event) => setForm({ ...form, guest: event.target.value })} /></label><label>Entrada<input required type="date" value={form.start} onChange={(event) => setForm({ ...form, start: event.target.value })} /></label><label>Salida<input required type="date" value={form.end} onChange={(event) => setForm({ ...form, end: event.target.value })} /></label><label>Precio (€)<input min="0" step="0.01" type="number" value={form.price} onChange={(event) => setForm({ ...form, price: event.target.value })} /></label><label className="notes">Notas<textarea value={form.notes} onChange={(event) => setForm({ ...form, notes: event.target.value })} /></label><div className="form-buttons"><button type="submit" disabled={saving}><FaPlus /> {saving ? "Guardando…" : editing ? "Guardar cambios" : "Añadir reserva"}</button>{editing && <button type="button" className="secondary" onClick={() => { setEditing(null); setForm(blankReservation(apartment)); }}>Cancelar</button>}</div></form><div className="admin-reservations"><h2>Reservas de {apartment}</h2>{loading ? <p>Cargando…</p> : reservations.map((reservation) => <article className="reservation-row" key={reservation.id}><div><strong>{reservation.guest}</strong><span>{reservation.start} — {reservation.end}</span></div><div className="reservation-admin-actions"><button onClick={() => { setEditing(reservation.id); setForm({ ...reservation, price: reservation.price ?? "", notes: reservation.notes ?? "" }); }}>Editar</button><button className="danger" aria-label="Eliminar reserva" onClick={() => removeReservation(reservation.id)}><FaTrash /></button></div></article>)}</div></>}{error && <p className="reservation-error" role="alert">{error}</p>}</div></main>;

  return <section id="reservas" className="reservation-section"><div className="reservation-shell"><div className="reservation-heading"><span>ESTANCIAS EN ZAHORA</span><h2>Consulta la disponibilidad</h2><p>Selecciona un apartamento. El verde indica las fechas disponibles y el rojo, las ya ocupadas.</p></div><p className="reservation-notice">La disponibilidad mostrada puede no estar actualizada. Para confirmar fechas o resolver cualquier duda, contacta directamente en <a href="mailto:casascadizcosta@gmail.com">casascadizcosta@gmail.com</a>.</p><div className="reservation-tabs" role="tablist" aria-label="Apartamentos">{APARTMENTS.map((item) => <button key={item} role="tab" aria-selected={apartment === item} className={apartment === item ? "active" : ""} onClick={() => setApartment(item)}>{item}</button>)}</div>{loading ? <p className="reservation-empty">Cargando calendario…</p> : <Calendar month={month} reservations={reservations} onPrevious={() => setMonth((current) => new Date(current.getFullYear(), current.getMonth() - 1, 1))} onNext={() => setMonth((current) => new Date(current.getFullYear(), current.getMonth() + 1, 1))} canGoPrevious={canGoPrevious} canGoNext={canGoNext} />}{error && <p className="reservation-error" role="alert">{error}</p>}<div className="calendar-legend"><span><i className="available" /> Disponible</span><span><i className="occupied" /> Ocupado</span></div></div></section>;
}
