import * as React from "react"
import {Button} from "@chakra-ui/react"


const StyledButton = ({children}) => {
    return (
        <Button
        width="100%"
            maxWidth="347px"
            borderRadius="5px"
            padding="12px"
            color="white"
            bg="#639605"
            fontWeight="600"
            _hover={{ bg: 'white', color: "#639605", border: "1px solid #639605" }}
        >
            {children}
        </Button>
    )
}

export default StyledButton;
