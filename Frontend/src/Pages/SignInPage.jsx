import { InputBox } from "../Components/InputBox"
import { Button, Center, Flex, Heading, Text } from '@chakra-ui/react'
import doit from "../assets/Logo/doitLogo.svg"
import { Link } from 'react-router-dom'
import { password_atom, userName_atom } from "../Atoms/atoms"

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
                        <Text>dont have an account <Link to='/signup' className=" text-[#0D14C2] underline ml-1 hover:cursor-pointer">Sign Up</Link></Text>
                    </Flex>

                    <Flex direction="column">




                        {/* username */}
                        <InputBox page={"signIn"} atom={userName_atom} name="Username" type="text" />
                        {/* password */}
                        <InputBox page={"signIn"} atom={password_atom} name="Password" type="password" />
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
                            >Sign In</Button>
                        </Flex>
                    </Flex>

                </Flex>
            </Flex>


            {/* the doit logo*/}
            <div className=' absolute right-10 bottom-8'>
                <img src={doit} alt="" />
            </div>
        </Center>
    )
}
