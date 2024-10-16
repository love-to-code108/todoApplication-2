import { Box, Button, Flex, Input } from "@chakra-ui/react"


export const IndivisualTodo = () => {




    return (
        <Flex>
            <Input
            marginBottom='20px'
            marginRight='20px'
                w='320px'
                type='text'
                borderWidth='1px'
                borderColor='black'
                borderRadius="2px"
                boxShadow="2px 2px 0 0 black"
                sx={
                    {
                        transition: 'transformx 0.2s ease, box-shadow 0.2s ease',
                        _hover: {
                            border: "2px solid black",
                            boxShadow: "2px 2px 0 0 black",




                        },
                        _focus: {
                            border: "2px solid black",
                            boxShadow: "2px 2px 0 0 black",


                        }
                    }
                }
            >
            </Input>

            <Box
                w='45px'
                h='41.5px'
                borderWidth='1px'
                borderColor='black'
                borderRadius="6px"
            >
            </Box>
        </Flex>
    );
}
