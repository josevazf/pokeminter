import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import "./Footer.style.css"

export default function Footer() {
  return (
    <>
      <AppBar position="fixed"
        elevation={1}
        sx={{
          z:0,
          height: "60px",
          alignItems: "center",
          display: 'flex',
          backgroundColor: "white", 
          bottom: "0", 
          fontFamily: "Poppins", 
          color: "black", 
          marginTop: "auto",
          maxWidth: '80%', // Add maxWidth here
          marginRight:'80%'
        }}>
        <Toolbar>
          <div style={{ alignItems: "center", width: '100%' }}>Built by <a href="https://github.com/josevazf/pokeminter" style={{textDecoration: 'underline'}}>josevazf</a></div>
        </Toolbar>
      </AppBar>
    </>
  );
}
