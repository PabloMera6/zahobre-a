import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const categories = [
  {
    title: "La llegada",
    cls: "gallery-tall",
    images: ["/zahobrena-alta-2.jpg", "/zahobrena-alta-4.jpg"],
  },
  {
    title: "Espacios para compartir",
    cls: "",
    images: [
      "/zahobrena-alta-33.jpg",
      "/zahobrena-alta-14.jpg",
      "/zahobrena-alta-15.jpg",
      "/zahobrena-alta-27.jpg",
      "/zahobrena-alta-28.jpg",
      "/zahobrena-alta-30.jpg",
    ],
  },
  {
    title: "El jardín y la piscina",
    cls: "gallery-wide",
    images: [
      "/zahobrena-alta-9.jpg",
      "/zahobrena-alta-5.jpg",
      "/zahobrena-alta-7.jpg",
      "/zahobrena-alta-32.jpg",
      "/zahobrena-alta-16.jpg",
    ],
  },
  {
    title: "Tu apartamento",
    cls: "",
    images: [
      "/zahobrena-alta-11.jpg",
      "/zahobrena-alta-21.jpg",
      "/zahobrena-alta-13.jpg",
      "/zahobrena-alta-23.jpg",
      "/zahobrena-alta-24.jpg",
      "/zahobrena-alta-25.jpg",
      "/zahobrena-alta-26.jpg",
      "/zahobrena-alta-29.jpg",
      "/zahobrena-alta-31.jpg",
    ],
  },
  {
    title: "Baños",
    cls: "gallery-tall",
    images: ["/zahobrena-alta-22.jpg", "/zahobrena-alta-10.jpg", "/zahobrena-alta-38.jpg"],
  },
  {
    title: "Detalles",
    cls: "",
    images: ["/zahobrena-alta-17.jpg", "/zahobrena-alta-18.jpg", "/zahobrena-alta-35.jpg"],
  },
  {
    title: "Terraza y exteriores",
    cls: "gallery-wide",
    images: ["/zahobrena-alta-34.jpg", "/zahobrena-alta-37.jpg"],
  },
];

function GalleryCard({ title, cls, images }) {
  const [index, setIndex] = useState(0);
  const hasMultiple = images.length > 1;

  const go = (event, delta) => {
    event.preventDefault();
    event.stopPropagation();
    setIndex((current) => (current + delta + images.length) % images.length);
  };

  return (
    <figure className={`gallery-item ${cls}`}>
      <img src={images[index]} alt={title} loading="lazy" />
      {hasMultiple && (
        <>
          <button className="gallery-nav gallery-nav--prev" aria-label="Foto anterior" onClick={(event) => go(event, -1)}>
            <FaChevronLeft />
          </button>
          <button className="gallery-nav gallery-nav--next" aria-label="Foto siguiente" onClick={(event) => go(event, 1)}>
            <FaChevronRight />
          </button>
          <div className="gallery-dots">
            {images.map((_, dotIndex) => (
              <span
                key={dotIndex}
                className={dotIndex === index ? "active" : ""}
                onClick={(event) => { event.preventDefault(); event.stopPropagation(); setIndex(dotIndex); }}
              />
            ))}
          </div>
        </>
      )}
      <figcaption>{title}<span>↗</span></figcaption>
    </figure>
  );
}

export default function ImageGallery() {
  return (
    <section id="galeria" className="gallery-section">
      <div className="gallery-heading">
        <div><p className="eyebrow">UNA MIRADA AL INTERIOR</p><h2>Así se siente<br /><em>Zahobreña.</em></h2></div>
        <p>Espacios luminosos, rincones exteriores y detalles pensados para que te sientas como en casa.</p>
      </div>
      <div className="gallery-grid">
        {categories.map((category) => (
          <GalleryCard key={category.title} {...category} />
        ))}
      </div>
    </section>
  );
}
