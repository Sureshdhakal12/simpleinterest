
import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import './index.css'


const App =()=> {
 const[p, setP]= useState(0)
 const[r, setR]= useState(0)
 const[t, setT]= useState(0)
 const[si, setSI]= useState(0)

 const calculateInterest =() =>{
  setSI(p*r*t/100)
 }
  return (

    <div >
      
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Simple Interest
          </Typography>
        </Toolbar>
      </AppBar>
      <br />
      <TextField onChange={(event) =>setP(event.target.value)} id="outlined-basic" label="Enter P" variant="outlined" /><br />
      <TextField onChange={(event) =>setR(event.target.value)}id="outlined-basic" label="Enter R" variant="outlined" /><br />
      <TextField onChange={(event) =>setT(event.target.value)}id="outlined-basic" label="Enter T" variant="outlined" /><br />
    <br/>
      <Button  onClick ={()=> calculateInterest()}variant="contained">Calculate</Button>
<br />
<Typography variant="h6" gutterBottom="div">
     Simple Interest is:{si}
      </Typography>
    </div>
  );
}

export default App;
