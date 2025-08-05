import React from 'react';
import { FormControl, FormLabel, Input, VStack, InputGroup, InputRightElement, Button } from '@chakra-ui/react';
import { useState } from 'react';
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const UserLogin = () => {
    const [show, setShow] = useState(false);  
    const handleClick = ()=> setShow(!show);
    const toast = useToast(); 
    const [name, setName] = useState();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();  
       
      
    const submitHandler = async () => {
      setLoading(true);
      if (!email || !password) {
        toast({
          title: "Please Fill all the Feilds",
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setLoading(false);
        return;
      }   
  
      // console.log(email, password);
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
  
        const { data } = await axios.post(
          "https://construction-app-zekq.onrender.com/api/user/login",
          { email, password },
          config
        );
        
        localStorage.setItem("userInfo", JSON.stringify(data));
        // console.log(JSON.stringify(data));
        toast({
          title: "Login Successful",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        history.push("/chats");
        setLoading(false);
      } catch (error) {
        toast({
          title: "Error Occured!",
          description: error.response.data.message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setLoading(false);
      }
    };

  return (
    <VStack spacing='5px' color={"black"}>
    <FormControl id='first-name' isRequired>
      <FormLabel>Name</FormLabel>
      <Input
          placeholder='Enter Your Name'
          onChange={(e)=>setName(e.target.value)}
      />
      
    </FormControl>
    <FormControl id="email" isRequired>
      <FormLabel>Email Address</FormLabel>
      <Input
        type="email"
        placeholder="Enter Your Email Address"
        onChange={(e) => setEmail(e.target.value)}
      />
    </FormControl>
    <FormControl id="password" isRequired>
      <FormLabel>Password</FormLabel>
      <InputGroup size="md">
        <Input
          type={show ? "text" :  "password"}
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputRightElement width="4.5rem" onClick={handleClick}>
          <Button h="1.75rem" size="sm" >
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
   
    <Button
      colorScheme="blue"
      width="100%"
      style={{ marginTop: 15 }}
      onClick={submitHandler}
      isLoading={loading}
    >
      Login
    </Button>
    <Button
        variant="solid"
        colorScheme="red"
        width="100%"
        onClick={() => {history.push("/register")
        }}
      >
        Are you an admin?
      </Button>
  </VStack>
  )
}

export default UserLogin
