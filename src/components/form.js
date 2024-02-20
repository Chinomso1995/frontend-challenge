import * as React from 'react';
import {  FormControl,
    Input,
    FormLabel,
    FormErrorMessage,
    Box,
    FormHelperText} from "@chakra-ui/react";
import StyledButton from "./button"

const Form = () => {
  return (
    <form
    style={{width: "100%"}}
    >
      <FormControl isRequired>
       <FormLabel>Nombre</FormLabel>
        <Input placeholder='Nombre' />
      </FormControl>
      <FormControl isRequired mt={6}>
       <FormLabel>Email</FormLabel>
        <Input placeholder='Email' />
      </FormControl>
      <FormControl isRequired mt={6}>
       <FormLabel>Telefono</FormLabel>
        <Input placeholder='Telefono' />
      </FormControl>
      <Box
      display="flex"
      width="100%"
      justifyContent="center"
      alignItems="center"
      mt={4}
      >
        <StyledButton
        >
            Guardar
        </StyledButton>
      </Box>
    </form>
  )
}

export default Form