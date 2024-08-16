import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import img from '../images/image 4.jpg'

const Loginsignup = () => {
  return (
    <div>
<br></br><br></br>

<Button variant='contained' color='error'><Link to={'/login'} style={{textDecoration:'none', color:"white"}}><b>Login</b></Link></Button><br/><br/>
<Button variant='contained' color='error'><Link to={'/signup'} style={{textDecoration:'none' , color:"white"}}><b>Sign Up</b></Link></Button><br/><br/>
<Button variant='contained' color='error'><Link to={'/adlogin'} style={{textDecoration:'none' , color:"white"}}><b>Admin Login</b></Link></Button>
<div class="grid text-center">
  <img src ={img}  style={{ height: '40%' }}></img>
</div>


    </div>
  )
}

export default Loginsignup