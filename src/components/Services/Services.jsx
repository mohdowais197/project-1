import React from "react";
import './services.css';

const Services = () => {
    return (
        <div className="">
            <div className="max-w-sm bg-fuchsia-900 shadow-xl rounded-lg p-6">
                <ul className="space-y-6 text-white">
                    <li className="text-3xl font-a font-extrabold text-black mb-4 border-b-2 border-yellow-500 pb-2">Our Services</li>
                    <li className="text-xl font-d font-extrabold text-zinc-200 hover:text-gray-900 transition duration-300">Wallpapers Pastings</li>
                    <li className="text-xl font-d font-extrabold text-zinc-200 hover:text-gray-900 transition duration-300">Blinds Fittings</li>
                    <li className="text-xl font-d font-extrabold text-zinc-200 hover:text-gray-900 transition duration-300">Wall Panel Fittings</li>
                    {/* Remove empty list items to avoid unnecessary space */}
                </ul>
            </div>
        </div>
    );
}

export default Services;
