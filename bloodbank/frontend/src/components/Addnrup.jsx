import { Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';

const Addnrup = () => {

    var [inputs, setInputs] = useState({ dname: "", dblood: "", demail: "", dmob: "" });
    var location = useLocation();
    var Navigate = useNavigate()
    console.log("loc", location.state);
  
  
  const addHandler = () => {
    console.log("clicked");
    if (location.state !== null) {
      axios.put("http://localhost:3008/adeditdnr/"+location.state.val._id,inputs)
        .then((res) => {
            // alert(res.data.message)
           Navigate('/adviewdnr')
            
        })
        .catch((err) => console.log(err));
    }else{
        axios.post("http://localhost:3008/adddnr", inputs)
        .then((res) => {
          console.log(res);
          // alert(res.data.message);
          Navigate('/adviewdnr')
        })
        .catch((err) => {
          // console.log(err);
        });
    }
  };

  useEffect(() => {
    if (location.state !== null) {
      setInputs({
        ...inputs,
        dname: location.state.val.dname,
        dblood: location.state.val.dblood,
        demail: location.state.val.demail,
        dmob: location.state.val.dmob,
      });
    }
  }, []);

  const inputHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log(inputs);
  };



  return (
    



    <div  style={{paddingTop:"50px",marginLeft:"10px"}}>
    <h2 >  Blood Donate Update Form</h2>
    <TextField onChange={inputHandler} value={inputs.dname} placeholder='enter your name' id="outlined-basic" name='dname' label="Full Name" variant="outlined" /><br/><br/>
    <TextField onChange={inputHandler} value={inputs.demail} placeholder='enter your mail' id="outlined-basic" name='demail' label="Email" variant="outlined" /><br/><br/>
    

<TextField onChange={inputHandler} value={inputs.dmob} name='dmob' placeholder='enter your Phone number' id="outlined-basic" label="Phone number" variant="outlined" /> <br></br>


<br></br>

<TextField onChange={inputHandler} value={inputs.dblood} name='dblood' placeholder='Blood Group' id="outlined-basic" label="Blood Group" variant="outlined" /> <br></br>

<br></br><br></br>
<Button variant="contained" onClick={addHandler} color="success">submit</Button><br/><br></br>









</div>




  )
}

export default Addnrup