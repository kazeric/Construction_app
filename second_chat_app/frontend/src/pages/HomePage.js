import { Box, Container, Flex, Text , Tab ,Tabs, TabList, TabPanels,TabPanel} from '@chakra-ui/react';
import React from 'react';
import Login from '../components/Authentication/login';
import Signup from '../components/Authentication/signup';
import { useHistory } from "react-router";
import { useEffect } from 'react';

const HomePage = () => {
    // const history = useHistory();
  
    // useEffect(() => {
    //   const user = JSON.parse(localStorage.getItem("userInfo"));
  
    //   if (user) history.push("/chats");
    // }, [history]);



  return (
    <Container maxW="xl" centerContent>
        <Box
          d="flex"
          justifyContent="center"
          p={3}
          bg={"white"}
          w="100%"
          m="40px 0 15px 0"
          borderRadius="lg"
          borderWidth="1px"
        >
          <Text fontSize="4xl" fontFamily="Work sans" Color="black" textAlign="center">COM-STRUCT</Text>
        </Box>
        <Box bg="white" w="100%" p={4} borderRadius="lg" borderwidth="1px">
          <Tabs variant='soft-rounded' colorScheme='gray'>
            <TabList mb="1em">
            <Tab width={"50%"}>Login</Tab>
            <Tab width="50%">Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
              <Login />
              </TabPanel>
              <TabPanel>
              <Signup /> 
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
    </Container>
  )
}

export default HomePage;
