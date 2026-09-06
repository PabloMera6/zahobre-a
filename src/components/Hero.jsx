import { FaAirbnb, FaInstagram } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-media" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content">
        <p className="eyebrow eyebrow--light">ZAHORA · COSTA DE CÁDIZ</p>
        <h1>Tu refugio<br /><em>cerca del mar.</em></h1>
        <p className="hero-copy">Seis apartamentos con alma andaluza, jardín, piscina y la calma de Zahora a unos minutos de la playa.</p>
        <div className="hero-actions">
          <a className="button button--light" href="#reservas">Ver disponibilidad <span>↗</span></a>
          <a className="text-link text-link--light" href="#estancia">Descubrir Zahobreña <span>↓</span></a>
        </div>
        <div className="hero-meta">
          <span>6 apartamentos</span><i /> <span>Hasta 4 personas</span><i /> <span>Piscina &amp; jardín</span>
        </div>
      </div>
      <div className="hero-socials" aria-label="Redes sociales">
        <a href="https://www.instagram.com/zahobrena/" aria-label="Instagram"><FaInstagram /></a>
        <a href="https://www.booking.com/hotel/es/zahobrena.es.html" aria-label="Booking"><TbBrandBooking /></a>
        <a href="https://www.airbnb.es/rooms/52491620" aria-label="Airbnb"><FaAirbnb /></a>
      </div>
      <div className="hero-scroll">SCROLL <span>↓</span></div>
    </section>
  );
}
