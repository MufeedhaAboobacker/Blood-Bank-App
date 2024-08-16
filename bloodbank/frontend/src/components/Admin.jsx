import { Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
  return (
    <div>
<center><Typography  ><b><h1>Admin Dashboard</h1></b></Typography></center>

<center>
<Button variant='contained' color='success'> <Link to={'/admindonorform'} style={{ textDecoration: 'none', color: 'white' }} > Donor form  </Link>   </Button><br/><br/>
         <Button variant='contained' color='success' > <Link to={'/adminrequest'} style={{ textDecoration: 'none', color: 'white' }} > Request form  </Link>   </Button> </center>
        </div>




   
  )
}

export default Admin