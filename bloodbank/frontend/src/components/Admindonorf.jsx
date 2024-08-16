
import { Button, FormControl, InputLabel, MenuItem, NativeSelect, Select, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
const Add = (props) => {
  var [inputs, setInputs] = useState({ name: "", blood: "", email: "", mob: "" });
  var location = useLocation();
  var Navigate = useNavigate();
  console.log("loc", location.state);

  const inputHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log(inputs);
  };

  const addHandler = () => {
    console.log("clicked");
    if (location.state !== null) {
      axios
        .put("http://localhost:3008/edit/"+location.state.val._id,inputs)
        .then((res) => {
            // alert(res.data.message)
            Navigate('/admindonor')
            
        })
        // .catch((err) => console.log(err));
    }else{
        axios
        .post("http://localhost:3008/addr", inputs)
        .then((res) => {
          console.log(res);
          // alert(res.data.message);
          Navigate('/admindonor')
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    if (location.state !== null) {
      setInputs({
        ...inputs,
        name: location.state.val.name,
        blood: location.state.val.blood,
        email: location.state.val.email,
        mob: location.state.val.mob,
      });
    }
  }, []);





  return (
    
    <div style={{ marginTop: "3%", textAlign: "center" }} >

<div >
     



<Typography variant="h5"><b>Donor form</b></Typography>  <br/><br/>      
        <form >
  <TextField onChange={inputHandler} id="outlined-basic" label="name" variant="outlined" name="name" value={inputs.name}
  /><br/><br/>
   <TextField onChange={inputHandler} id="outlined-basic" label="bloodgroup" variant="outlined" name="blood" value={inputs.blood}
  />
<br/><br/>
<TextField onChange={inputHandler} id="outlined-basic" label="email" variant="outlined" name="email" value={inputs.email}
  /><br/><br/>
   <TextField onChange={inputHandler} id="outlined-basic" label="phone number" variant="outlined" name="mob" value={inputs.mob}
  /><br/><br/>
  <Button  type='submit' variant="contained" color="success" onClick={addHandler}>
            Submit
        </Button>




      
      </form>
      </div>
    </div>
  );
};

export default Add;