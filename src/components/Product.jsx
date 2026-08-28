import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Importa el bundle CSS de Swiper
import { FaHome } from "react-icons/fa";
import { MdOutlinePool } from "react-icons/md";
import { LuParkingCircle } from "react-icons/lu";
import { BiDrink } from "react-icons/bi";

const Product = () => {
  return (
    <div id="product" className="bg-bg">
      <div className="grid xl:p-20 xl:max-w-[1200px] lg:max-w-[800px] md:max-w-[600px] mx-[2vh] md:mx-auto text-primary-200">
        <h1 className="text-[40px] font-bold">¿Qué ofrecemos?</h1>
        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-2 col-span-1 md:col-span-1">
            <FaHome className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
            <h3 className="text-[20px] font-bold">Apartamentos turísticos</h3>
            <p className="text-gray-500">
              Zahobreña es un complejo de ensueño, con 6 apartamentos turísticos en Zahora, Cádiz. Cada uno de estos apartamentos tiene capacidad para 4 personas y están equipados con todo lo necesario para disfrutar de unas vacaciones inolvidables. Cada unidad cuenta con patio, aire acondicionado, cocina totalmente equipada con microondas y fogones, salón, Smart TV, lavadora y baño con ducha.
            </p>
          </div>
          <div className="flex flex-col gap-2 col-span-1 md:col-span-1">
            <MdOutlinePool className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
            <h3 className="text-[20px] font-bold">Piscina al aire libre</h3>
            <p className="text-gray-500">
              Se dispone de una piscina al aire libre, rodeada de un jardín con árboles y hamacas. Un lugar perfecto para relajarse y disfrutar del buen tiempo.
            </p>
          </div>
          <div className="flex flex-col gap-2 col-span-1 md:col-span-1">
            <LuParkingCircle className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
            <h3 className="text-[20px] font-bold">Parking gratuito</h3>
            <p className="text-gray-500">
              Podrá aparcar su coche de manera gratuita durante todo el día en nuestro parking privado. Además, disponemos de una <strong>zona de carga para vehículos eléctricos</strong>.
            </p>
          </div>
          <div className="flex flex-col gap-2 col-span-1 md:col-span-1">
            <BiDrink className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
            <h3 className="text-[20px] font-bold">Zona Chill Out</h3>
            <p className="text-gray-500">
              Disponemos de una zona Chill Out, con sofás y mesas, donde podrá relajarse y disfrutar de un buen cóctel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
