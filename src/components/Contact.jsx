import React from 'react';
import 'swiper/swiper-bundle.css'; // Importa el bundle CSS de Swiper
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div id="contact" className="bg-bg">
      <div className="grid xl:p-20 xl:max-w-[1200px] lg:max-w-[800px] md:max-w-[600px] mx-[2vh] md:mx-auto text-primary-200 pb-8 md:pb-20">
        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-2 col-span-1 md:col-span-1 items-center">
            <FaPhoneAlt className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
            <h3 className="text-[20px] font-bold">Teléfono</h3>
            <p className="text-gray-500">+34 654 55 76 20</p>
          </div>
          <div className="flex flex-col gap-2 col-span-1 md:col-span-1 items-center">
            <MdEmail className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
            <h3 className="text-[20px] font-bold">Correo Electrónico</h3>
            <p className="text-gray-500">casascadizcosta@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
