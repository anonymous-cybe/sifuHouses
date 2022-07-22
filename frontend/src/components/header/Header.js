import React, { useState } from "react";
import './header.css'
import Signup from "../popup/Signup";
const Header = (props) => {
    const [showForm, setShowForm] = useState(false);


    return (
        <>
            {showForm && <Signup />}
            <div>
                <div className="nav">
                    <a href="/" className="lang">English</a>
                    <div><span className="brand-name1">Sifu<span className="brand-name2">Houses.</span></span></div>
                    <div className="services">
                        <span className="service">Rent</span>
                        <span className="service">Buy</span>
                        <span className="service">Sell</span>
                        <span className="service" onClick={() => setShowForm(!showForm)} >Sign Up</span>
                        <a href={`/property`} type="button" className="btn property-btn">Add Property</a>
                    </div>

                </div>

            </div >
        </>

    )

}
export default Header