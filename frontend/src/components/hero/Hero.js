import React from "react";
import './hero.css'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-image">
                <img src="image1.png" alt="" />
            </div>
            <div className="hero-text">
                <p>Discover Your New Home.</p>
                <p className="extra-text">Helping millions of dealers find their perfect fit...</p>
            </div>
            <div className=" hero-input">
                <input type="text" className="hero-input1 form-control" id="exampleFormControlInput1" placeholder="Search by location" />
                <button className=" btn btn-success">Search</button>
            </div>
        </div>
    )

}
export default Hero