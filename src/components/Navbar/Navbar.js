import React from "react";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import styled from '@emotion/styled'

function Navbar(){
    // https://dev.to/ridhikgovind/how-to-style-your-react-router-links-using-styled-components-2350
    const StyledLink = styled(Link)`
    text-decoration: none; 
    box-shadow : none;
    color: white;
    text-allign : left`;

    return(
        <div>
        <AppBar position="static">
         <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            >
            <MenuIcon />
          </IconButton>
            <Typography variant="h6" component="div" style={{textAlign:"left"}} sx={{ flexGrow: 1 }}>
                <StyledLink to="/">Home</StyledLink>
            </Typography>
            <Typography variant="h6" component="div">
            </Typography>
         </Toolbar>
        </AppBar>
        </div>
    )
}

export default Navbar;