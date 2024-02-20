import * as React from "react"
import {
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage,
  Box,
  FormHelperText,
  useToast,
} from "@chakra-ui/react"
import StyledButton from "./button"

const Form = () => {
  const [formData, setFormData] = React.useState({
    nombre: "",
    email: "",
    telefono: "",
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
    if (!formData.email.trim()) {
      validationErrors.email = "Email es requerido"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Formato de email inválido"
    }
    if (!formData.telefono.trim()) {
      validationErrors.telefono = "Teléfono es requerido"
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    // If validation passes, send data to API
    fetch("https://jsonplaceholder.typicode.com/users", {
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
            description: "Form submitted successfully!",
            status: "success",
            position: "top-right",
            duration: 3000,
            isClosable: true,
          })
          // Reset form data
          setFormData({
            nombre: "",
            email: "",
            telefono: "",
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
          description: "Failed to submit form. Please try again later.",
          status: "error",
          position: "top-right",
          duration: 3000,
          isClosable: true,
        })
      })
  }

  return (
    <form style={{ width: "100%" }} onSubmit={handleSubmit}>
      <FormControl isRequired>
        <FormLabel >Nombre</FormLabel>
        <Input
          borderRadius="3px"
          borderColor="#C9C9C9"
          name="nombre"
         
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Nombre"
        />
        {errors.nombre && (
          <span
            style={{ color: "red", paddingTop: "10px", paddingBottom: "10px" }}
          >
            {errors.nombre}
          </span>
        )}
      </FormControl>
      <FormControl isRequired mt={6}>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Email"
          borderRadius="3px"
          borderColor="#C9C9C9"
          name="email"

          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && (
          <span
            style={{ color: "red", paddingTop: "10px", paddingBottom: "10px" }}
          >
            {errors.email}
          </span>
        )}
      </FormControl>
      <FormControl isRequired mt={6}>
        <FormLabel>Telefono</FormLabel>
        <Input
          placeholder="Telefono"
          borderRadius="3px"
          borderColor="#C9C9C9"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
        />
        {errors.telefono && (
          <span
            style={{ color: "red", paddingTop: "10px", paddingBottom: "10px" }}
          >
            {errors.telefono}
          </span>
        )}
      </FormControl>
      <Box
        display="flex"
        width="100%"
        justifyContent="center"
        alignItems="center"
        mt={8}
      >
        <StyledButton type="submit">Guardar</StyledButton>
      </Box>
    </form>
  )
}

export default Form
