import React from 'react';
import logo from "../../assets/logo.jpeg";

const Header = () => {
  return (
    <header className="bg-black text-yellow-400 shadow-lg">
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-2 md:space-y-0">
          <img src={logo} alt="Logo" className="w-12 h-12 md:w-16 md:h-16" />
          <div className="flex flex-col md:flex-row items-center">
            <h1 className="font-serif font-e text-lime-500 antialiased text-3xl md:text-5xl font-bold relative md:ml-4">
              IMPERIAL WALL DECOR
            </h1>
            <span className="text-purple-300 text-sm md:text-xl italic md:ml-4 mt-2 md:mt-0">
              Artistry for Every Wall
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
