const mongoose = require('mongoose')



const RegSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const RegModel = mongoose.model("usereg", RegSchema)
module.exports = RegModel

