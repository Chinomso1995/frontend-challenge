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
  useToast,
} from "@chakra-ui/react"

import StyledButton from "./button"

const FormModal = ({ onOpen, isOpen, onClose }) => {
  const [formData, setFormData] = React.useState({
    nombre: "",
    descripcion: "",
  })
  const [errors, setErrors] = React.useState({})
  const toast = useToast()

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    // Perform form validation
    const validationErrors = {}
    if (!formData.nombre.trim()) {
      validationErrors.nombre = "Nombre es requerido"
    }
    if (!formData.descripcion.trim()) {
      validationErrors.descripcion = "Descripción es requerida"
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    // If validation passes, send data to API
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (response.ok) {
          // Show success toast
          toast({
            title: "Success",
            description: "Post added successfully!",
            position: "top-right",
            status: "success",
            duration: 3000,
            isClosable: true,
          })
          // Reset form data
          setFormData({
            nombre: "",
            descripcion: "",
          })
        } else {
          // Handle error response
          throw new Error("Failed to submit form")
        }
      })
      .catch(error => {
        console.error("Error submitting form:", error)
        // Show error toast
        toast({
          title: "Error",
          description: "Failed to submit post. Please try again later.",
          position: "top-right",
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      })
  }
  return (
    <>
      <StyledButton onClick={onOpen}>Anadir tarea</StyledButton>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent marginLeft="10px" marginRight="10px">
          <ModalHeader fontSize="20px" fontWeight="700" color="#333333">
            Añadir tarea
          </ModalHeader>
          <ModalCloseButton />

          <form
            style={{
              width: "100%",
              paddingLeft: "22px",
              paddingRight: "22px",
              paddingBottom: "30px",
            }}
            onSubmit={handleSubmit}
          >
            <FormControl isRequired>
              <FormLabel>Nombre</FormLabel>
              <Input
                placeholder="Nombre"
                borderRadius="3px"
                borderColor="#C9C9C9"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
              />
              {errors.nombre && (
                <span
                  style={{
                    color: "red",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  {errors.nombre}
                </span>
              )}
            </FormControl>
            <FormControl mt={6}>
              <FormLabel>Descripcion</FormLabel>
              <Textarea
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
                placeholder="Descripcion"
                borderRadius="3px"
                borderColor="#C9C9C9"
              />
              {errors.descripcion && (
                <span
                  style={{
                    color: "red",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  {errors.descripcion}
                </span>
              )}
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
                _hover={{ bg: "#B2B2B2", color: "white" }}
                onClick={onClose}
              >
                Cancelar
              </StyledButton>
              <StyledButton maxWidth="136px" type="submit">
                Guardar
              </StyledButton>
            </Box>
          </form>
        </ModalContent>
      </Modal>
    </>
  )
}

export default FormModal
