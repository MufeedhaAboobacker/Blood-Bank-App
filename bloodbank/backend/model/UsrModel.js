const mongoose = require('mongoose')



const UsrSchema = new mongoose.Schema({
    
    
    //dnr
    
    
    dname: String,
    demail: String,
   dblood:String,
  dmob:String,

//req

   rname: String,
   remail: String,
  rblood:String,
 rmob:String
 
})

const UsrModel = mongoose.model("usr", UsrSchema)
module.exports = UsrModel

