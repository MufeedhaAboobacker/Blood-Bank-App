import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Button, TextField, Typography } from '@mui/material'

function Signup  ()  {
    const [name, setName] = useState("")
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3008/reg', {name, email, password})
        .then(result => {console.log(result)
        navigate('/login')
         })
        .catch(err=> console.log(err))
       
    }


  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-5 rounded w-25">
                <h2>Welcome to Signup page</h2>
                <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="Name" variant="outlined"
                onChange={(e) => setName(e.target.value)}/><br/><br/>
                    
                <TextField id="outlined-basic" label="Email" variant="outlined"
  onChange={(e) => setEmail(e.target.value)}/><br/><br/>

<TextField id="outlined-basic" label="Pasword" type="password"
  onChange={(e) => setPassword(e.target.value)}/>         <br/><br/>
  <Button variant="contained" type='submit' color="success">
            SUBMIT
        </Button>
        </form><b>
        <p>Already Have an Account?</p></b>
        <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
            Login
        </Link>
        
        </div>
        
      </div>
  )
}

export default Signup