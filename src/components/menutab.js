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
} from "@chakra-ui/react"

import StyledButton from "./button"
import Form from "./form"

import Trash from "../images/trash.svg"
import FormModal from "./modal"

const MenuTab = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
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
            >
              Mis tareas
            </Text>

            <Box
              width="100%"
              background="#FFFFFF"
              borderRadius="4px"
              boxShadow="rgba(0, 0, 0, 0.12)"
              paddingLeft="15px"
              paddingRight="15px"
              paddingTop="17px"
              paddingBottom="17px"
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
                    Titulo tarea
                  </Text>
                  <Text
                    fontSize="12px"
                    fontWeight="400"
                    color="#777777"
                    margin="0px"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris, ac elementum ultrices mauris. Cursus urna vehicula
                    nisi aliquam pulvinar sit interdum eget ac. Rhoncus et nunc,
                    aliquam, ac faucibus odio porta diam lorem. Dictum amet
                    malesuada dictum tristique sollicitudin sed sagittis.
                  </Text>
                </Box>
                <Box>
                  <Trash />
                </Box>
              </Box>
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
