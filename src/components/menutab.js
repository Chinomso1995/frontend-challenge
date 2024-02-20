import * as React from "react"
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  TabIndicator,
  Heading,
  Text,
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage,
  useDisclosure,
  FormHelperText,
  SimpleGrid,
  Spinner,
  IconButton,
  useToast,
} from "@chakra-ui/react"

import { ChevronRightIcon, ChevronLeftIcon, DeleteIcon } from "@chakra-ui/icons"

import StyledButton from "./button"
import Form from "./form"

import Trash from "../images/trash.svg"
import FormModal from "./modal"

const MenuTab = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [posts, setPosts] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [page, setPage] = React.useState(1)
  const toast = useToast()

  React.useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=3`
        )
        if (!response.ok) {
          throw new Error("Failed to fetch posts")
        }
        const data = await response.json()
        setPosts(data)
      } catch (error) {
        console.error("Error fetching posts:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [page])

  const handleNextPage = () => {
    setPage(page + 1)
  }

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }


  const handleDelete = (postId) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: "DELETE"
    })
      .then((response) => {
        if (response.ok) {
          // Show success toast
          toast({
            title: "Success",
            position: "top-right",
            description: "Post deleted successfully!",
            status: "success",
            duration: 3000,
            isClosable: true
          });
          // Remove the deleted post from the state
          setPosts(posts.filter((post) => post.id !== postId));
        } else {
          // Handle error response
          throw new Error("Failed to delete post");
        }
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
        // Show error toast
        toast({
          title: "Error",
          position: "top-right",
          description: "Failed to delete post. Please try again later.",
          status: "error",
          duration: 3000,
          isClosable: true
        });
      });
  };
  return (
    <Box>
      <Tabs position="relative" variant="unstyled">
        <TabList
          overflowY="hidden"
          marginLeft="auto"
          marginRight="auto"
          maxWidth="1560px"
          width="100%"
          paddingLeft="17px"
          paddingRight="17px"
          paddingTop="13px"
          sx={{
            scrollbarWidth: "none",
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Tab flexShrink={0}>Mis datos</Tab>
          <Tab flexShrink={0}>Mis tareas</Tab>
          <Tab flexShrink={0}>Mis devoluciones</Tab>
          <Tab flexShrink={0}>Mis comunicaciones</Tab>
          <Tab flexShrink={0}>Mis mejores amigos</Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="4px"
          bg="#639605"
          borderRadius="3px 3px 0px 0px"
        />
        <TabPanels background="#F4F4F4" minHeight="100vh">
          <TabPanel
            marginLeft="auto"
            marginRight="auto"
            maxWidth="1560px"
            width="100%"
            paddingLeft="17px"
            paddingRight="17px"
            paddingTop="30px"
          >
            <Text
              fontWeight="700"
              fontSize="20px"
              lineHeight="27.24px"
              color="#555555"
              paddingBottom= "20px"
            >
              Mis datos
            </Text>

            <Box
              width="100%"
              background="#FFFFFF"
              borderRadius="4px"
              boxShadow="rgba(0, 0, 0, 0.12)"
              paddingLeft="17px"
              paddingRight="17px"
              paddingTop="28px"
              paddingBottom="28px"
            >
              <Form />
            </Box>
          </TabPanel>
          <TabPanel
            marginLeft="auto"
            marginRight="auto"
            maxWidth="1560px"
            width="100%"
            paddingLeft="17px"
            paddingRight="17px"
            paddingTop="30px"
          >
            <Text
              fontWeight="700"
              fontSize="20px"
              lineHeight="27.24px"
              color="#555555"
              paddingBottom= "20px"
            >
              Mis tareas
            </Text>

            {loading ? (
              <Spinner />
            ) : (
              <Box width="100%">
                {posts.map(post => (
                  <Box
                    width="100%"
                    background="#FFFFFF"
                    borderRadius="4px"
                    boxShadow="rgba(0, 0, 0, 0.12)"
                    paddingLeft="15px"
                    paddingRight="15px"
                    paddingTop="17px"
                    paddingBottom="17px"
                    marginBottom={4}
                  >
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      width="100%"
                    >
                      <Box display="flex" flexDirection="column">
                        <Text
                          fontSize="16px"
                          fontWeight="600"
                          color="#333333"
                          paddingBottom="5px"
                          margin="0px"
                        >
                          {post.title}
                        </Text>
                        <Text
                          fontSize="12px"
                          fontWeight="400"
                          color="#777777"
                          margin="0px"
                        >
                          {post.body}
                        </Text>
                      </Box>
                      <Box>
                        <IconButton 
                        onClick={() => handleDelete(post.id)}
                        icon={<DeleteIcon />}
                        bg="white"
                        color="#B2B2B2"
                        _hover={{bg: "#639605", color: "white"}}
                        />
                      
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            )}

            <Box
              mt="4"
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
            >
              <IconButton
                disabled={page === 1}
                marginRight="10px"
                onClick={handlePrevPage}
                icon={<ChevronLeftIcon />}
                bg="white"
                color="#639605"
                _hover={{bg: "#639605", color: "white"}}
              />

              <IconButton
                onClick={handleNextPage}
                icon={<ChevronRightIcon />}
                bg="white"
                color="#639605"
                _hover={{bg: "#639605", color: "white"}}
              />
            </Box>

            <Box
              display="flex"
              width="100%"
              justifyContent="center"
              alignItems="center"
              mt={10}
            >
              <FormModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
            </Box>
          </TabPanel>
          <TabPanel
            marginLeft="auto"
            marginRight="auto"
            maxWidth="1560px"
            width="100%"
            paddingLeft="17px"
            paddingRight="17px"
            paddingTop="30px"
          >
            <Text
              fontWeight="700"
              fontSize="20px"
              lineHeight="27.24px"
              color="#555555"
              paddingBottom= "20px"
            >
              Mis devoluciones
            </Text>
          </TabPanel>
          <TabPanel
            marginLeft="auto"
            marginRight="auto"
            maxWidth="1560px"
            width="100%"
            paddingLeft="17px"
            paddingRight="17px"
            paddingTop="30px"
          >
            <Text
              fontWeight="700"
              fontSize="20px"
              lineHeight="27.24px"
              color="#555555"
              paddingBottom= "20px"
            >
              Mis comunicaciones
            </Text>
          </TabPanel>
          <TabPanel
            marginLeft="auto"
            marginRight="auto"
            maxWidth="1560px"
            width="100%"
            paddingLeft="17px"
            paddingRight="17px"
            paddingTop="30px"
          >
            <Text
              fontWeight="700"
              fontSize="20px"
              lineHeight="27.24px"
              color="#555555"
              paddingBottom= "20px"
            >
              Mis mejores amigos
            </Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default MenuTab
