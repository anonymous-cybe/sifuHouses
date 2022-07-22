import React, { useState } from "react";
import "./createproperty.css"
import axios from "axios"




const Createproperty = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const [location, setLocation] = useState("")
    async function submitHandler(e) {

        e.preventDefault()
        const url = "http://localhost:5000/api/realestate";
        const { data } = await axios.post(url, { title, price, location, image })
    }
    return (
        <div className="blogpage">
            <div className="brand">
                <span className="brand-name1">Sifu</span> <span className="brand-name2">Houses.</span>
            </div>
            <form onSubmit={submitHandler} className="form w-50 form-control">

                <div class="mb-3">
                    <label for="exampleFormControlInput1" className="form-label" >Title</label>
                    <input type="text" required className="form-control" id="exampleFormControlInput1" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label" >Location</label>
                    <input type="text" required className="form-control " id="exampleFormControlInput1" placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label" >Image of the house</label>
                    <input type="text" required className="form-control " id="exampleFormControlInput1" placeholder="Location" value={image} onChange={e => setImage(e.target.value)} />
                </div>
                <div>
                    <label for="exampleFormControlTextarea1" className="form-label" >Price</label>
                    <input type="text" required className="form-control " id="exampleFormControlInput1" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />

                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Choose:</label>
                    <select name="cars" className="select w-50" id="exampleFormControlInput1" value="select">
                        <option value="" selected>Select</option>
                        <option value="rent">Rent</option>
                        <option value="sell">Sell</option>
                        <option value="buy">Buy</option>
                    </select>
                    <button type="submit" className="submitbtn" >Submit</button>
                </div>

            </form>
        </div>

    )
}
export default Createproperty;