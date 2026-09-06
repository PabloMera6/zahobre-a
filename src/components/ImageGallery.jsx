const images = [
  ["/Zahorabreña Alta-2.jpg", "La llegada", "gallery-tall"],
  ["/Zahorabreña Alta-4.jpg", "Espacios para compartir", ""],
  ["/Zahorabreña Alta-10.jpg", "El jardín", "gallery-wide"],
  ["/Zahorabreña Alta-17.jpg", "Tu apartamento", ""],
  ["/Zahorabreña Alta-25.jpg", "Días de piscina", "gallery-tall"],
  ["/Zahorabreña Alta-31.jpg", "Detalles", ""],
  ["/Zahorabreña Alta-37.jpg", "Atardeceres", "gallery-wide"],
];

export default function ImageGallery() {
  return (
    <section id="galeria" className="gallery-section">
      <div className="gallery-heading">
        <div><p className="eyebrow">UNA MIRADA AL INTERIOR</p><h2>Así se siente<br /><em>Zahobreña.</em></h2></div>
        <p>Espacios luminosos, rincones exteriores y detalles pensados para que te sientas como en casa.</p>
      </div>
      <div className="gallery-grid">
        {images.map(([src, alt, cls]) => (
          <figure className={`gallery-item ${cls}`} key={src}>
            <img src={src} alt={alt} loading="lazy" />
            <figcaption>{alt}<span>↗</span></figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
