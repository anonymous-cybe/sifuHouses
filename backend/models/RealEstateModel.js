const mongoose = require("mongoose")
const realestateschema = new mongoose.Schema({
    title: { type: String },
    image: { type: String },
    price: { type: Number },
    location: { type: String }
})
const RealEstate = mongoose.model("RealEstate", realestateschema)
module.exports = RealEstate;