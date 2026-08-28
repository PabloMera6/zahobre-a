// import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { TbBrandBooking } from "react-icons/tb";
import { FaAirbnb } from "react-icons/fa";

const Hero = () => {
  return (
    <section className='bg-bg'>
        <div id="home" className="h-[90vh] grid grid-cols-1 md:grid-cols-10 xl:max-w-[2400px] l:max-w-[1200px] mx-auto">
            <div className="md:col-span-5 flex items-center justify-center text-primary-100">
                <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-5xl xl:text-7xl font-bold">Alojamiento en Zahora</h1>
                    <p className="text-2xl xl:text-4xl">¿Quieres disfrutar del sur?</p>
                    <p className="text-2xl xl:text-4xl">Bienvenidos a nuestro paraíso</p>
                    <div className="flex items-center justify-center gap-10 text-2xl xl:text-5xl m-5">
                        <a href="https://www.instagram.com/zahobrena/">
                            <FaInstagram className="transition-transform hover:scale-125" />
                        </a>
                        <a href="https://www.booking.com/hotel/es/zahobrena.es.html">
                            <TbBrandBooking className="transition-transform hover:scale-125" />
                        </a>
                        <a href="https://www.airbnb.es/rooms/52491620?source_impression_id=p3_1719248454_P3FuYRPyOT4zI9Zt">
                            <FaAirbnb className="transition-transform hover:scale-125" />
                        </a>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <a href="#product" className="relative flex h-[50px] w-40 rounded-xl items-center justify-center overflow-hidden bg-primary-200 font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-primary-200 hover:shadow-primary-200 hover:before:border-[25px]">
                            <span className="relative z-10">Descubre más</span>
                        </a>
                        <a href="#contact" className="relative flex h-[50px] w-40 rounded-xl items-center justify-center overflow-hidden bg-primary-200 font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-primary-200 hover:shadow-primary-200 hover:before:border-[25px]">
                            <span className="relative z-10">Contáctanos</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="md:col-span-5 flex items-center justify-center p-12">
                <img src="zahobrena-1.jpg" className="h-30 object-cover rounded-md shadow-lg"/>
            </div>
        </div>
    </section>
  )
}

export default Hero