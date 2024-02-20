import * as React from "react"
import {Box} from '@chakra-ui/react';
import Cart from "../images/cart.svg";
import Login from "../images/Login.svg";
import Logo from "../images/Logo.svg";
import Menubar from "../images/menubar.svg";
import Search from "../images/search.svg";

const Header = () => {
    return (
    <Box
    marginLeft="auto"
    marginRight="auto"
    maxWidth="1560px"
    width="100%"
    paddingLeft="17px"
    paddingRight="17px"
    paddingTop="18px"
    paddingBottom="18px"
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    borderBottom="1px solid #DBDBDB"
   
    >
        <Box data-testid="menubar-icon">
           <Menubar/>
        </Box>
        <Box data-testid="search-icon">
            <Search/>
        </Box>
        <Box data-testid="logo-icon">
            <Logo/>
        </Box>
        <Box data-testid="login-icon">
            <Login/>
        </Box>
        <Box data-testid="cart-icon">
            <Cart/>
        </Box>
    </Box>
    )
}

export default Header;