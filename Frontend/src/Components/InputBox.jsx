import { Box, Flex, Input , Text } from '@chakra-ui/react'
import React from 'react'

export const InputBox = (props) => {




    return (
        <Flex w={350} direction="column">
            <Text fontSize="md">{props.name}</Text>
            <Input
                placeholder={props.placeholder}
                borderColor="black"
                borderWidth="1px"
                borderRadius="2px"
                boxShadow="2px 2px 0 0 black"
                mb="6"
                type={props.type}
                sx={
                    {
                        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                        _hover: {
                            border: "2px solid black",
                            boxShadow: "2px 2px 0 0 black",
                            
                            transform: "scale(1.04)"
                        },
                        _focus:{
                            border: "2px solid black",
                            boxShadow: "2px 2px 0 0 black",
                            
                            transform: "scale(1.04)"
                        }
                    }
                }
            />
        </Flex>
    )
}
