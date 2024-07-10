import React from "react";
import Products from "../../components/Products/Products.jsx"
import Services from "../../components/Services/Services.jsx"
import Work_gallery from "../../components/work_gallery/work_gallery.jsx";
const HomePage = () => {
    return (
        <>
        <div className="bg-fuchsia-100 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-4">
            <div className="md:w-1/2">
                <Products />
            </div>
            <div className="md:w-1/2">
                <Services />
            </div>
        </div>
            <div>
            <Work_gallery/>
            </div>
            </>
    );
}

export default HomePage;
