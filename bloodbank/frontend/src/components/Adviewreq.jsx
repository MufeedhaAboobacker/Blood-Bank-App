import {
    Button,
    Card,
    CardActions,
    CardContent,
    Grid,
    Typography,
  } from "@mui/material";
  import axios from "axios";
  import React, { useEffect, useState } from "react";
  import { useNavigate } from "react-router-dom";

const Adviewreq = () => {

    var [emp, setEmp] = useState([]);
    var navigate = useNavigate();
    useEffect(() => {
      axios
        .get("http://localhost:3008/adviewreq")
        .then((res) => {
          console.log(res);
          setEmp(res.data);
        })
        .catch((err) => console.log(err));
    }, []);
  
    const delValue = (id) => {
      console.log(id);
      axios
        .delete("http://localhost:3008/removereq/" + id)
        .then((res) => {
          alert(res.data.message);
          window.location.reload();
        })
        .catch((err) => console.log(err));
    };
  
    const updateValue = (val) => {
      console.log("up clicked");
      navigate("/adrequp", { state: { val } });
    };




  return (
<div style={{ margin: "2%" }}>
    <h1>Request List</h1>
      <Grid container spacing={2}>
        {emp.map((val, i) => {
          return (
            <Grid item xs={12} md={4}>
              <Card sx={{ minWidth: 275 }} key={i}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Name:{val.rname}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Email:{val.remail}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Blood:{val.rblood}
                  </Typography>
                  <Typography variant="body2">
                    Mobile No.:{val.rmob}
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
                    Del
                  </Button>
                  <Button
                    size="small"
                    onClick={() => {
                      updateValue(val);
                    }}
                  >
                    Up
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  )
}

export default Adviewreq