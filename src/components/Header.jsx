import { useEffect, useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

const links = [
  ["La estancia", "#estancia"],
  ["Apartamentos", "#product"],
  ["Galería", "#galeria"],
  ["Disponibilidad", "#reservas"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <a className="brand" href="#home" aria-label="Zahobreña, inicio">
        <img src="/logo.JPG" alt="Zahobreña" />
        <span>Zahobreña</span>
      </a>

      <nav className={`site-nav ${open ? "site-nav--open" : ""}`}>
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Contactar</a>
      </nav>

      <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-label={open ? "Cerrar menú" : "Abrir menú"}>
        {open ? <RiCloseLine /> : <RiMenu3Line />}
      </button>
    </header>
  );
}
