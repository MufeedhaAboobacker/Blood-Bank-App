import {
    Button,
    Card,
    CardActions,
    CardContent,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Typography,
  } from "@mui/material";
  import { alignProperty } from "@mui/material/styles/cssUtils";
  import axios from "axios";
  import React, { useEffect, useState } from "react";
  import { Link, Navigate, useNavigate } from "react-router-dom";
  
  const View = () => {
    var [usr, setUsr] = useState([]);
    var Navigate = useNavigate();
    useEffect(() => {
      axios
        .get("http://localhost:3008/view")
        .then((res) => {
          console.log(res);
          setUsr(res.data);
        })
        .catch((err) => console.log(err));
    }, []);
  
    const delValue = (id) => {
      console.log(id);
      axios
      .delete("http://localhost:3008/remove/" + id)
      .then((res) => {
        alert(res.data.message);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const updateValue = (val) => {
    console.log("up clicked");
    Navigate("/admindonorform", { state: { val } });
  };




  return (
    <div style={{ margin: "2%" }}>
      <br/>
      <center><Typography variant="h2" color={'error'}>Admin Dashboard </Typography><br/><br/>
      <Button  variant="contained" color="success" > <Link to={'/adviewdnr'} style={{ textDecoration: 'none', color: 'white' }} > Donor List </Link>   </Button><br/><br/>
      <Button   variant="contained" color="success"> <Link to={'/adviewreq'} style={{ textDecoration: 'none', color: 'white' }} >Request List  </Link>   </Button>
          </center>
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
                  Name:{val.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Bloodgroup:{val.blood}
                </Typography>

                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Email:{val.email}
                </Typography>
                <Typography variant="body2">
                  Mobile:{val.mob}
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                 size="small"
                 onClick={() => {
                   delValue(val._id);
                 }}
               >
                <u> Delete</u>
               </Button>
               <Button
                 size="small"
                 onClick={() => {
                   updateValue(val);
                 }}
               >
              <u>  Update</u>
               </Button>
             </CardActions>
           </Card>
         </Grid>
       );
     })}
   </Grid>
 </div>
);
};

           
          export default View;