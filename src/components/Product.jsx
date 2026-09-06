import { FaHome } from "react-icons/fa";
import { MdOutlinePool } from "react-icons/md";
import { LuParkingCircle } from "react-icons/lu";
import { BiDrink } from "react-icons/bi";

const features = [
  { icon: FaHome, number: "01", title: "Apartamentos con alma", text: "Seis apartamentos independientes para cuatro personas, pensados para vivir Zahora sin prisas: cocina equipada, salón, Smart TV, aire acondicionado, patio privado y todo lo que necesitas." },
  { icon: MdOutlinePool, number: "02", title: "Piscina entre jardines", text: "Un rincón para bajar el ritmo. Piscina al aire libre, árboles, hamacas y espacio para pasar las tardes al sol o al fresco." },
  { icon: LuParkingCircle, number: "03", title: "Todo fácil", text: "Parking privado gratuito y zona de carga para vehículos eléctricos para que llegues, aparques y te olvides del coche." },
  { icon: BiDrink, number: "04", title: "Momentos al aire libre", text: "Nuestra zona chill out está hecha para el aperitivo, una copa al atardecer y esas conversaciones que se alargan sin mirar el reloj." },
];

export default function Product() {
  return (
    <section id="product" className="features-section">
      <div className="section-intro">
        <div>
          <p className="eyebrow">LA ESTANCIA</p>
          <h2>Un lugar para<br /><em>vivir despacio.</em></h2>
        </div>
        <p className="section-lead">Hemos creado Zahobreña para que el alojamiento sea parte de las vacaciones. Arquitectura sencilla, espacios exteriores y una atmósfera tranquila a pocos minutos de las playas de la Costa de la Luz.</p>
      </div>

      <div className="features-grid">
        {features.map(({ icon: Icon, number, title, text }) => (
          <article className="feature-card" key={number}>
            <div className="feature-top"><span>{number}</span><Icon /></div>
            <h3>{title}</h3>
            <p>{text}</p>
            <span className="feature-line" />
          </article>
        ))}
      </div>
    </section>
  );
}
