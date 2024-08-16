const express = require('express')
const RegModel = require('./model/Log.js')
const cors = require('cors')
const mongoose = require('mongoose')
const UsrModel =require('./model/UsrModel.js')
const AdModel =require('./model/Admin.js')
  


const app = new express()



app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://mufeedha1601:feeyfeey@database.opctjj6.mongodb.net/?retryWrites=true&w=majority&appName=database")
.then(()=>{
    console.log('connected')
})


app.post("/login", (req, res) => {
    const {email, password} = req.body;
    RegModel.findOne({email: email})
    .then(userreg => {
        if(userreg) {
            if(userreg.password === password) {
                res.json("Success")
            } else {
                res.json("the password is incorrect")

            }
        } else {
            res.json("No record existed")
        }
    })
})




app.post('/reg', (req, res) => {
    RegModel.create(req.body)
    .then(userreg => res.json(userreg))
   
    .catch(err => res.json(err))
   

})




app.post('/adreg', (req, res) => {
    AdModel.create(req.body)
    .then(admin => res.json(admin))
   
    .catch(err => res.json(err))
   

})






app.post("/adlogin", (req, res) => {
    const {email, password} = req.body;
    AdModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json("Success")
            } else {
                res.json("the password is incorrect")

            }
        } else {
            res.json("No record existed")
        }
    })
})






app.get("/adviewdnr", async (req, res) => {
    try {
      var data = await UsrModel.find();
      res.send(data);
    } catch (error) {
      console.log(error);
    }
  });




  
app.get("/adviewreq", async (req, res) => {
    try {
      var data = await UsrModel.find();
      res.send(data);
    } catch (error) {
      console.log(error);
    }
  });


 

  
app.delete("/removednr/:id", async (req, res) => {
    try {
       await UsrModel.findByIdAndDelete(req.params.id)
       res.send({message:"Deleted successfully!!!"})
    } catch (error) {
        console.log(error)
    }
});



app.delete("/removereq/:id", async (req, res) => {
    try {
       await UsrModel.findByIdAndDelete(req.params.id)
       res.send({message:"Deleted successfully!!!"})
    } catch (error) {
        console.log(error)
    }
});





app.put("/adeditdnr/:id", async (req, res) => {
    try {
      var data = await UsrModel.findByIdAndUpdate(req.params.id, req.body);
      res.send({message:'updated successfully',data})
    } catch (error) {
      console.log(error)
    }
  });




  app.put("/adupreq/:id", async (req, res) => {
    try {
      var data = await UsrModel.findByIdAndUpdate(req.params.id, req.body);
      res.send({message:'updated successfully',data})
    } catch (error) {
      console.log(error)
    }
  });







app.post("/addreq",async(req,res)=>{
    
    const result= await UsrModel(req.body);
    result.save();
    res.json('data added')
})






app.post("/adddnr",async(req,res)=>{
    
    const result= await UsrModel(req.body);
    result.save();
    res.json('data added')
})



app.put("/editdr/:id", async (req, res) => {
    try {
      var data = await UsrModel.findByIdAndUpdate(req.params.id, req.body);
    //   res.send({message:'updated successfully',data})
    } catch (error) {
      console.log(error)
    }
  });





app.post("/adminaddr",async(req,res)=>{
    
    const result= await UsrModel(req.body);
    result.save();
    res.json('data added')
})


app.get('/viewdnr',async(_req,res)=>{
    let result = await UsrModel.find();
    res.json(result)
})





app.get('/adminview',async(_req,res)=>{
    let result = await UsrModel.find();
    res.json(result)
})

// to delete user
app.delete("/remove/:id", async (req, res) => {
    try {UsrModel.dDelete(req.params.id)
       res.send({message:"Deleted successfully!!!"})
    } catch (error) {
        console.log(error)
    }
});




// add request list


app.put("/edit/:id", async (req, res) => {
    try {
      var data = await Donorlist.findByIdAndUpdate(req.params.id, req.body);
    //   res.send({message:'updated successfully',data})
    } catch (error) {
      console.log(error)
    }
  });





  

app.listen(3008, () => {
    console.log("port is up")
})


  