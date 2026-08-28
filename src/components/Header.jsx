import React, { useState } from "react";
// Icons
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <header className="relative z-50 sticky top-0 flex items-center justify-between xl:justify-start w-full p-4 h-[10vh] bg-primary-100">
            <div className="xl:w-2/6 flex items-center justify-center h-full ml-[2vh]">
                <img src="logo.JPG" className="max-h-full max-w-full object-cover rounded-full"/>
            </div>
            <nav
                className={`fixed bg-primary-100 w-[70%] md:w-[40%] xl:w-full h-full ${showMenu ? "left-0" : "-left-full"
                    } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-14 text-white transition-all duration-500 z-50`}
            >
                <a href="#home" className="relative hover:text-gray-300 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-300 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-300 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">Inicio</a>
                <a href="#product" className="relative hover:text-gray-300 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-300 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-300 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">¿Qué ofrecemos?</a>
                <a href="#imageGallery" className="relative hover:text-gray-300 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-300 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-300 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">Galería</a>            
                <a href="#contact" className="relative hover:text-gray-300 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-300 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-300 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">Contacto</a>
                <a href="#reservas" className="relative hover:text-gray-300 cursor-pointer transition-all ease-in-out">Reservas</a>
            </nav>
            <button
                onClick={() => setShowMenu(!showMenu)}
                className="xl:hidden text-2xl p-2 text-white"
            >
                {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
            </button>
        </header>
    );
};

export default Header;
