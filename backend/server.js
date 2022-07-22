const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { use } = require("express/lib/application");
const app = express();
app.use(express.json());
app.use(cors());
const RealEstate = require("./models/RealEstateModel")

//posting the frontend to the backend
app.post("/api/realestate", async function (req, res) {
    const newRealEstate = new RealEstate({
        title: req.body.title,
        price: req.body.price,
        image: req.body.image,
        location: req.body.location
    })
    await newRealEstate.save()
    console.log("i am good");
})










const mongoDBurl = "mongodb://127.0.0.1:27017/blog"
// const mongoDBurl = "mongodb+srv://SIFU:Paperbag20@sifu.cllqv8v.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoDBurl)
    .then(result => console.log("MongoDB connected"))
    .catch(err => console.log(err))

app.listen(process.env.PORT || 5000, () => {
    console.log("App is running on port 5000")
});