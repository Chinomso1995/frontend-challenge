import * as React from "react"
import {Box} from '@chakra-ui/react';
import Cart from "../images/cart.svg";
import Login from "../images/login.svg";
import Logo from "../images/logo.svg";
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
        <Box>
           <Menubar/>
        </Box>
        <Box>
            <Search/>
        </Box>
        <Box>
            <Logo/>
        </Box>
        <Box>
            <Login/>
        </Box>
        <Box>
            <Cart/>
        </Box>
    </Box>
    )
}

export default Header;