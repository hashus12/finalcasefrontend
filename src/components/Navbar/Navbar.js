import React from "react";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ClassNames } from "@emotion/react";
import styled from '@emotion/styled'
import { color } from "@mui/system";

function Navbar(){
    // https://dev.to/ridhikgovind/how-to-style-your-react-router-links-using-styled-components-2350
    const StyledLink = styled(Link)`
    text-decoration: none; 
    box-shadow : none;
    color: white;
    text-allign : left`;

// bunu sonra current userın id sini alarak yapacağız.
    let userId = 5;
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
          {/* //ikisindede flexGrow:1 olduğunda total alanda bir alan bana ayır bir alanda bana ayır. 2 side birlik alan kaplıyor user ve home. */}
            <Typography variant="h6" component="div" style={{textAlign:"left"}} sx={{ flexGrow: 1 }}>
                 {/* bu linkler App.js'te yazdığımız routelarla eşleşecek */}
                <StyledLink to="/">Home</StyledLink>
            </Typography>
            <Button color="inherit">Login</Button>
            <Typography variant="h6" component="div">
            <StyledLink to={{pathname:'/users/' + userId}}>User</StyledLink>
            </Typography>
         </Toolbar>
        </AppBar>
        </div>
    )
}

export default Navbar;