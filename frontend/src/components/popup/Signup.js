import React, { useState } from 'react'
import './signup.css'

function Signup(props) {
    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [Location, setLocation] = useState("")
    const [Password, setPassword] = useState("")


    const submitHandler = async () => {

        const url = "http://localhost:5000/signup"
        const { data } = await (url, FirstName, LastName, Location, Password)


    }
    return (

        <div className="blogepage signup" >

            <form onSubmit={submitHandler} className="form signup-inner w-50 form-control">
                <button className='close-btn'>close</button>
                <div className="brand">
                    <span className="brand-name1">Sifu</span> <span className="brand-name2">Houses.</span>
                </div>
                <h2>Sign up</h2>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" className="form-label" >Title</label>
                    <input type="text" required className="form-control" id="exampleFormControlInput1" placeholder="Title" value={FirstName} onChange={e => setFirstName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label" >Location</label>
                    <input type="text" required className="form-control " id="exampleFormControlInput1" placeholder="Location" value={LastName} onChange={e => setLastName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label" >Image of the house</label>
                    <input type="text" required className="form-control " id="exampleFormControlInput1" placeholder="Location" value={Password} onChange={e => setPassword(e.target.value)} />
                </div>
                <div>
                    <label for="exampleFormControlTextarea1" className="form-label" >Price</label>
                    <input type="text" required className="form-control " id="exampleFormControlInput1" placeholder="Price" value={Location} onChange={e => setLocation(e.target.value)} />

                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Choose:</label>
                    <select name="cars" className="select w-50" id="exampleFormControlInput1" value="select">
                        <option value="" selected>Select</option>
                        <option value="rent">House Owner</option>
                        <option value="sell">Getting a home</option>
                    </select>
                    <button type="submit" className="submitbtn" >Submit</button>
                </div>

            </form>
        </div>


    )
}

export default Signup
