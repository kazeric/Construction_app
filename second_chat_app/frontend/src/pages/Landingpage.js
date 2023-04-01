import React from 'react'
import "./landingpage.css"
import { Box, Button, useToast} from '@chakra-ui/react';
import { useHistory } from "react-router";

const Landingpage = () => {
    const history = useHistory();  
    const toast = useToast(); 
    const UsersubmitHandler = async () => {
        // console.log(email, password);
        try {
          history.push("/register");

        } catch (error) {
          toast({
            title: "Error Occured!",
            description: error.response.data.message,
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });

        }
      };


  return (
    <div class="main-container">
      <Box display={"flex"} justifyContent="center" background={"white"} 
       p={2}>
      <h1>Kajuda Enterprises</h1>
      </Box>
        <header id="showcase">
          <Box background={"white"} borderRadius="3xl" p={3}>
            <h1>Looking for a job?</h1>
            <p>Kajuda us a  construction company with the heart of the people in mind. Sign up today and we'll give you access a new life</p>
            <Button
           colorScheme="blue"
           onClick={UsersubmitHandler} >
        Sign Up
      </Button>
          </Box>

        </header>
        <section id="section-a">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit minus impedit maxime, quae soluta quis cumque perferendis! Doloribus quaerat, placeat iste facere, aspernatur ex cum veritatis laudantium, officia, non porro exercitationem incidunt quis dolore? Officia ex accusamus expedita optio, voluptatem minus? In maiores omnis aperiam earum ab molestiae beatae laborum blanditiis incidunt, delectus dolor, id voluptates optio aspernatur aliquam saepe atque labore? Tempore reprehenderit ab ipsam perspiciatis ut, provident perferendis sapiente in numquam blanditiis, enim, illo error nulla incidunt quos quidem ratione repellat ipsa molestias veritatis? Mollitia, fugit dolore commodi porro repudiandae atque, eos, ipsum quam culpa fuga deleniti quae.</p>
        </section>
        <section id="section-b">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit minus impedit maxime, quae soluta quis cumque perferendis! Doloribus quaerat, placeat iste facere, aspernatur ex cum veritatis laudantium, officia, non porro exercitationem incidunt quis dolore? Officia ex accusamus expedita optio, voluptatem minus? In maiores omnis aperiam earum ab molestiae beatae laborum blanditiis incidunt, delectus dolor, id voluptates optio aspernatur aliquam saepe atque labore? Tempore reprehenderit ab ipsam perspiciatis ut, provident perferendis sapiente in numquam blanditiis, enim, illo error nulla incidunt quos quidem ratione repellat ipsa molestias veritatis? Mollitia, fugit dolore commodi porro repudiandae atque, eos, ipsum quam culpa fuga deleniti quae.</p>
        </section>
        <section id="section-c">
            <div class="box-1">
              <span>Already have an account?</span>  
                <div></div>
                <span>Login now to see all the exciting new places you could work </span>
                <div></div>
                <Button
                 colorScheme="white"
               onClick={UsersubmitHandler} >
               Sign in
           </Button>
            </div>
            <div class="box-2">
            <span>Want to know more?</span>  
                <div></div>
                <span>Click the button to  learn about us</span>
                <div></div>
                <Button
                 colorScheme="blue"
               >
               <a href='#'>Read More</a>
           </Button>
            </div>
            <div class="box-3">
            <span>Are you an admin?</span>  
                <div></div>
                <span>Login now to see the stats on the projects you've been amanaging </span>
                <div></div>
                <Button
                 colorScheme="blue"
               onClick={UsersubmitHandler} >
               Sign in
           </Button>
            </div>
        </section>
    </div>
  )
}

export default Landingpage
