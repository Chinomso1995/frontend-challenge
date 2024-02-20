import * as React from "react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormLabel,
    FormErrorMessage,
    Box,
    FormHelperText,
    FormControl,
    Textarea,
    Input,
  } from '@chakra-ui/react'

import StyledButton from "./button"

const FormModal = ({onOpen, isOpen, onClose}) => {

   

   return (
     <>
      <StyledButton onClick={onOpen}>Anadir tarea</StyledButton>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
        marginLeft="10px"
        marginRight="10px"
        >
          <ModalHeader 
          fontSize="20px"
          fontWeight="700"
          color="#333333"
          >
            Añadir tarea
         </ModalHeader>
          <ModalCloseButton />
        
        <form
        style={{width: "100%", paddingLeft: "22px", paddingRight: "22px", paddingBottom: "30px"}}
        >
           <FormControl>
       <FormLabel>Nombre</FormLabel>
        <Input placeholder='Nombre' />
      </FormControl>
      <FormControl mt={6}>
       <FormLabel>Descripcion</FormLabel>
        <Textarea placeholder='Descripcion' />
      </FormControl>
      
      <Box
      mt={6}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      >
         <StyledButton
         maxWidth="136px"
         color="#B2B2B2"
         bg="white"
         border="none"
         _hover={{bg: "#B2B2B2", color: "white"}}
         >
            Cancelar
         </StyledButton>
         <StyledButton
         maxWidth="136px"
         >
           Guardar
         </StyledButton>
      </Box>
        </form>

          
        </ModalContent>
      </Modal>
     </>
   )
}

export default FormModal;