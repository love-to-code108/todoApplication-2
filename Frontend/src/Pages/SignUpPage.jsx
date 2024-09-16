import { Box, Center, Flex , Input } from "@chakra-ui/react"


export const SignUpPage = () => {

    return (
        <Center w={[200 , 300 , 400 , 400 , 400 , "100%"]} h={400} className=" font-poppins">
            {/* <Box> Hello world</Box>
            <Box> Hello world</Box>
            <Box> Hello world</Box>
            <Box> Hello world</Box> */}
            <Input 
            placeholder="Enter Something"
            type="text" 
            border='2px solid black'
            focusBorderColor="black"
            w={400}
            sx={{
                transition: 'transform 0.2s ease, box-shadow 0.2s ease', // Animates scaling and shadow
                _hover: {
                  transform: 'scale(1.05)', // Scales the input slightly
                  boxShadow: '2px 2px 0 0 black', // Adds a shadow on focus
                  outline: 'none', // Removes the default outline
                },
                // _hover:{
                //     border: '2px solid black',
                // },
              }} 
               />

        </Center>
    )
}
