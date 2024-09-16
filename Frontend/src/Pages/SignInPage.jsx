import React from 'react'
import { InputBox } from "../Components/InputBox"
import { Button, Center, Flex, Heading, Input, Text } from '@chakra-ui/react'

export const SignInPage = () => {
    return (
        <Center className=' w-[100vw] h-[100vh] font-poppins'>

            {/* the black container */}
            <Flex w={900}
                px="12"
                py="12"
                border="1px solid black"
                boxShadow="4px 4px 0 0 black"
                borderRadius="6px"

            >

                <Flex w="100%"
                    justify="space-between">
                    {/* Sign In Page  */}
                    <Flex direction="column">

                        {/* sign in heading */}
                        <Heading mb="4" fontWeight="normal" size="2xl">Sign In</Heading>

                        {/* dont have an account sign up line */}
                        <Text>dont have an account <span className=" text-[#0D14C2] underline ml-1 hover:cursor-pointer">Sign Up</span></Text>
                    </Flex>

                    <Flex direction="column">

                        {/* username */}
                        <InputBox name="Username" type="text" />
                        {/* password */}
                        <InputBox name="Password" type="password" />
                        {/* sign in button */}
                        <Flex justify="end">
                            <Button color="white"
                                background="black"
                                borderRadius="0px"
                                px="6"
                                fontSize="lg"
                                mt="2"
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
                    {/* Inputs */}

                    {/* sign in button and the sign up alternative link */}
                </Flex>
            </Flex>
        </Center>
    )
}
