import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-image" aria-hidden="true" />
      <div className="contact-content">
        <p className="eyebrow eyebrow--light">HABLEMOS DE TU ESCAPADA</p>
        <h2>¿Nos vemos<br /><em>en Zahora?</em></h2>
        <p>Si tienes alguna pregunta sobre los apartamentos, la disponibilidad o tu estancia, escríbenos. Estaremos encantados de ayudarte.</p>
        <div className="contact-actions">
          <a href="tel:+34654557620"><FaPhoneAlt /> +34 654 55 76 20</a>
          <a href="mailto:casascadizcosta@gmail.com"><MdEmail /> casascadizcosta@gmail.com</a>
        </div>
        <a className="button button--outline-light" href="#reservas">Consultar disponibilidad <FaArrowRight /></a>
      </div>
    </section>
  );
}
