const mongoose = require('mongoose')



const AdSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const AdModel = mongoose.model("admin", AdSchema)
module.exports = AdModel
