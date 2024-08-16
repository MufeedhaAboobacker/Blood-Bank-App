import {Button, Card,CardContent,Grid,Link,Typography,} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";

const View = () => {
  var [usr, setUsr] = useState([]);
  var Navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3008/viewdnr")
      .then((res) => {
        console.log(res);
        setUsr(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const delValue = (id) => {
    console.log(id);
    axios
      .delete("http://localhost:3005/remove/" + id)
      .then((res) => {
        alert(res.data.message);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const updateValue = (val) => {
    console.log("up clicked");
    Navigate("/donor", { state: { val } });
  };




  return (
    <div style={{ margin: "2%" }}>
      <br/>
      <center><Typography variant="h3"> Donor Dashboard</Typography><br/><br/>


   

        
         <Button variant="contained" color="error"> <Link to={'/request'} style={{ textDecoration: 'none', color: 'white' }} > Request form  </Link>   </Button> <br/><br/>
        <Button  variant="contained" color="success" > <Link to={'/donor'} style={{ textDecoration: 'none', color: 'White' }} > Donor form  </Link>   </Button>  </center> 
           
           
          
       
     
       
     <br/><br/><br/>
    
          
      <Grid container spacing={2}>
        {usr.map((val, i) => {
          return (
            <Grid item xs={12} md={4}>
              <Card sx={{ minWidth: 275 }} key={i}>
                <CardContent>
                  <Typography
                    sx={{mb:1.5}}
                    color="text.secondary"
                    gutterBottom
                  >
                    Name:{val.rname}{val.dname}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Bloodgroup:{val.rblood}{val.dblood}
                  </Typography>
 
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Email:{val.remail}{val.demail}
                  </Typography>
                  <Typography variant="body2">
                    Mobile:{val.rmob}{val.dmob}
                    <br />
                  </Typography>
                </CardContent>
              
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};




export default View;