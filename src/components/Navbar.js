import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const navItems = ["about", "contact", "location", "blog", "Carbonfootprint"];

    return (
        <div>
            <div className="fixed top-0 left-0 w-full  h-28 bg-gray-500 border-b border-yellow-500 text-white z-10">
                <div className="flex flex-col md:flex-row justify-between items-center py-2 px-4 md:py-4 md:px-6">
                    
                    <div className="flex items-center  mb-4 md:mb-0">
                        <Link to="/home">
                            <img
                                className="w-16 h-16 md:h-20 md:w-20 border-4 border-blue-600 rounded-full"
                                src="/Assets/logo.jpg"
                                alt="Logo"
                            />
                        </Link>
                        <span
                            className="ml-4 text-lg font-bold md:text-xl lg:text-2xl"
                            style={{ textShadow: "2px 2px 2px red" }}
                        >
                            A.R Website Of Sustainable Community
                        </span>
                    </div>
                    


                    <nav className="flex flex-wrap gap-3 md:gap-6">
                        {navItems.map((item, index) => (
                            <Link
                                to={`/${item}`}
                                key={index}
                                className="capitalize text-sm md:text-base lg:text-lg active:text-green-300 hover:text-yellow-400 transition-transform transform hover:scale-105"
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
