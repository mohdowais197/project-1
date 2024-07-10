import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-200 p-4">
            <div className="max-w-lg w-full bg-violet-200 p-6 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Contact Us</h1>
                
                <div className="text-lg text-gray-700 mb-4 flex items-center">
                    <FaPhone className="mr-3 text-blue-600" size={20} />
                    <span className="font-semibold">Mobile Number:</span>
                    <a href="tel:+91123456789" className="text-blue-600 hover:underline ml-2">
                        +91123456789
                    </a>
                </div>
                
                <div className="text-lg text-gray-700 mb-4 flex items-center">
                    <FaEnvelope className="mr-3 text-blue-600" size={20} />
                    <span className="font-semibold">Email:</span>
                    <a href="mailto:jkl@gmail.com" className="text-blue-600 hover:underline ml-2">
                        jkl@gmail.com
                    </a>
                </div>
                
                <div className="text-lg text-gray-700 mb-4 flex items-center">
                    <FaMapMarkerAlt className="mr-3 text-blue-600" size={20} />
                    <span className="font-semibold">Address:</span>
                    <p className="ml-2">ABC</p>
                </div>
                
                <div className="text-lg text-gray-700 flex items-center">
                    <FaInstagram className="mr-3 text-blue-600" size={20} />
                    <span className="font-semibold">Instagram:</span>
                    <a href="https://instagram.com/" className="text-blue-600 hover:underline ml-2">
                        @Imperialwalldecor
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
