import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box 
    // sx={{ flexGrow: 1 }}
    >
      <AppBar position="dynamic" color='error'>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align='left'>
       
         <b>BLOOD BANK</b>
         
        
        
        
          </Typography>
          <Button><Link to={'/'} style={{textDecoration:'none' , color:"white"}}><b>Home</b></Link></Button>&nbsp;
          {/* <Button><Link to={'/dash'} style={{textDecoration:'none', color:"white"}}><b>Donor Dashboard</b></Link></Button>&nbsp; */}
          
          <Button><Link to={'/loginsignup'} style={{textDecoration:'none', color:"white"}}><b>Login/Signup</b></Link></Button>&nbsp;
        </Toolbar>
      </AppBar>
    </Box>
  );
}