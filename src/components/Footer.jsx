import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand"><img src="/logo-white.png" alt="Zahobreña" /><span>Zahobreña</span></div>
        <div className="footer-links"><a href="#home">Inicio</a><a href="#product">Apartamentos</a><a href="#galeria">Galería</a><a href="#reservas">Reservas</a><a href="#contact">Contacto</a></div>
        <a className="footer-social" href="https://www.instagram.com/zahobrena/" aria-label="Instagram"><FaInstagram /></a>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Zahobreña</span><span>Zahora · Cádiz</span></div>
    </footer>
  );
}
