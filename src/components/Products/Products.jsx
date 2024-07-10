import React from "react";
import './products.css';

const Products = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="bg-cyan-900 shadow-xl rounded-lg p-6">
                <ul className="space-y-6">
                    <li className="text-3xl font-a font-extrabold text-black mb-4 border-b-2 border-yellow-500 pb-2">Our Products</li>
                    <li className="text-xl font-d font-extrabold text-zinc-200 hover:text-gray-900 transition duration-300">Wallpapers</li>
                    <li className="text-xl font-d font-extrabold text-zinc-200 hover:text-gray-900 transition duration-300">Window Blinds & Curtains</li>
                    <li className="text-xl font-d font-extrabold text-zinc-200 hover:text-gray-900 transition duration-300">Premium Bedsheet</li>
                    <li className="text-xl font-d font-extrabold text-zinc-200 hover:text-gray-900 transition duration-300">UV Marble Sheets</li>
                    <li className="text-xl font-d font-extrabold text-zinc-200 hover:text-gray-900 transition duration-300">Wall Panels</li>
                    <li className="text-xl font-d font-extrabold text-zinc-200 hover:text-gray-900 transition duration-300">3D Wall Panels</li>
                    <li className="text-xl font-d font-extrabold text-zinc-200 hover:text-gray-900 transition duration-300">Customize Wallpaper & Blinds</li>
                </ul>
            </div>
        </div>
    );
}

export default Products;

