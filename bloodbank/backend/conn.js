mongoose.connect("mongodb://localhost:27017/j")
.then(()=>{
    console.log("connected")
})
.catch(err=>console.log(err))