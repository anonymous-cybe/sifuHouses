const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    Email: { type: string },
    FirstName: { type: string },
    LastName: { type: string },
    Location: { type: string },
    Password: { type: string },
})
const User = mongoose.model("User", UserSchema);

module.exports = User;