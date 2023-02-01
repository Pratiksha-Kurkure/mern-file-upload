const mongoose = require("mongoose")

module.exports = mongoose.model("multiDoc",
    mongoose.Schema({
        userDob: String,
        userAdhar: String,
        userTc: String,
    }, { timestamps: true }))