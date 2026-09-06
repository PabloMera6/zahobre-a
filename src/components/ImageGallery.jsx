const images = [
  ["/zahobrena-alta-4.jpg", "La llegada", "gallery-tall"],
  ["/zahobrena-alta-33.jpg", "Espacios para compartir", ""],
  ["/zahobrena-alta-9.jpg", "El jardín", "gallery-wide"],
  ["/zahobrena-alta-27.jpg", "Tu apartamento", ""],
  ["/zahobrena-alta-32.jpg", "Días de piscina", "gallery-tall"],
  ["/zahobrena-alta-17.jpg", "Detalles", ""],
  ["/zahobrena-alta-34.jpg", "Terraza y exteriores", "gallery-wide"],
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
