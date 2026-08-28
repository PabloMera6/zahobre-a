import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Product from "./components/Product"
import ImageGallery from "./components/ImageGallery"
import Reservations from "./components/Reservations"


function App() {
  const adminMode = window.location.pathname.replace(/\/+$/, "") === "/gestion-reservas";

  if (adminMode) return <Reservations adminMode />;

  return (
    <div>
      <Header />
      <Hero />
      <Product />
      <ImageGallery />
      <Contact />
      <Reservations />
      <Footer />
    </div>
  )
}

export default App
