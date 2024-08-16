import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material';
const Adminlogin = () => {

    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const navigate = useNavigate()
  
    const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('http://localhost:3008/adlogin', {email, password})
      .then(result => {console.log(result)
        if(result.data === "Success") {
            navigate('/admindonor')
        }
       
      })
      .catch(err=> console.log(err))

    }  
  return (

    
    <div>

<div style={{paddingTop:"90px"}}>
    <div>
        <Typography variant="h5"><b>Admin Login Page</b></Typography>  <br/><br/>      
        <form onSubmit={handleSubmit}>
  <TextField id="outlined-basic" label="Email" variant="outlined"
  onChange={(e) => setEmail(e.target.value)}/><br/><br/>
<TextField id="outlined-basic" label="Pasword" variant="outlined"
  onChange={(e) => setPassword(e.target.value)}/><br/><br/>
  <Button type='submit' variant="contained" color="success">
            Login
        </Button>
        </form>
        <br></br> <p>Does not have an account?</p>
        <Link to="/Signup">Signup</Link>
</div>
</div>
   
  





    </div>
  )
}

export default Adminlogin