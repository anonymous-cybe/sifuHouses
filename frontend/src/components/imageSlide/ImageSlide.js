
import React from 'react'
import './imageSlide.css'


const ImageSlide = () => {

    return (
        <div className="slide-container cards">
            <div class="card">
                <img className="card-img-top imgs" src="home1.png" alt="Card cap" />
                <div className="card-body">
                    <p className="card-text title">Rent a home</p>
                    <p class="card-text">We're creating a seamless online experience from shopping on the largest rental network to paying for rent</p>
                </div>
                <div className="card-btn">
                    <a href='/' type='button' className='btn'>RENT</a>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top imgs" src="ahome3.png" alt="Card cap" />
                <div className="card-body">
                    <p className="card-text title">Buy a home</p>
                    <p className="card-text">SifuHouses makes it easy to browse homes. When you're ready,you can also connect with a local agent,explore financing solutions,schedule home tours and more.</p>
                </div>
                <div className="card-btn">
                    <a href='/' type='button' className='btn'>BUY</a>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top imgs" src="home3.png" alt="Card cap" />
                <div className="card-body">
                    <p className="card-text title">Sell a home</p>
                    <p className="card-text">SifuHouses makes it eazy to find the right buyer and right price for our house.</p>
                </div>
                <div className="card-btn">
                    <a href='/' type='button' className='btn'>SELL</a>
                </div>
            </div>

        </div>



    )
}
export default ImageSlide