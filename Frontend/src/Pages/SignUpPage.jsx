import { Box, Button, Center, Flex, Heading, Input, Text } from "@chakra-ui/react"
import '@fontsource/poppins';
import { InputBox } from "../Components/InputBox"
import doit from "../assets/Logo/doitLogo.svg"



export const SignUpPage = () => {

  return (
    <Center className=" w-[100vw] h-[100vh] font-poppins">



      <Flex p="10" border="1px solid black"
        boxShadow="4px 4px 0 0 black"
        borderRadius="6px"
        direction={"column"} w={900} h={555}
        justify="center"
        align="center">

        {/* SIGN UP HEADING */}
        <Flex mb="10" w="91%">
          <Heading fontWeight="normal" size="3xl">Sign Up</Heading>
        </Flex>




        {/* INPUT BOXES FOR SIGN UP PAGE */}
        <Flex justify="space-around" w="100%">





          {/* left input boxes */}
          <Flex direction="column">

            {/* NAME */}
            <InputBox name="Name" type="text" />

            {/* DATE OF BIRTH */}
            <InputBox name="Date of Birth" type="Date" />

            {/* EMAIL */}
            <InputBox name="Email" type="email" />

          </Flex>




          {/* right input boxes */}
          <Flex direction="column">
            {/* USERNAME */}
            <InputBox name="Username" type="text" />
            {/* PASSWORD */}
            <InputBox name="Password" type="password" />
            {/* CONFIRM PASSWORD */}
            <InputBox name="Confirm Password" type="password" />
          </Flex>



        </Flex>






        {/* SIGN UP BUTTON AND SIGN IN LINK  */}
        <Flex w="100%" justify="space-between" mt="4">

          {/* Already have an account then Sign in  */}
          <Flex ml={8}>
            <Text>already have an account <span className=" text-[#0D14C2] underline ml-1 hover:cursor-pointer">Sign In</span></Text>
          </Flex>


          {/* Sign Up Button */}
          <Flex mr={7}>
            <Button color="white"
              background="black"
              borderRadius="0px"
              px="6"
              fontSize="lg"
              sx={{
                _hover: {
                  backgroundColor: "black",
                  color: "white",
                  transform: "scale(1.04)"
                }
              }}
            >Sign Up</Button>
          </Flex>
        </Flex>





      </Flex> {/* This is the master flex*/}

      {/* the doit logo*/}
      <div className=' absolute right-10 bottom-8'>
        <img src={doit} alt="" />
      </div>
    </Center>
  )
}
