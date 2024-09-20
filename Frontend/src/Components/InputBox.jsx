import { Flex, Input , Text } from '@chakra-ui/react'
import { useRecoilState } from 'recoil'


export const InputBox = (props) => {

    const [data , setData] = useRecoilState(props.atom);
    
    
/*
    1. LETS CHECK IF THE INPUT DATA IS NULL OR NOT 
    
    2. ALWAYS THE DATA SHOULD BE NOT NULL IN ALL CASES
    
    3. IN CASE OF THE USERNAME WE WILL SEND IT TO THE BACKEND FOR CHECKING IF IT EXISTS OR NOT BECAUSE THE USERNAME SHOULD BE UNIQUE FOR ALL
    
    ONE MORE THING I THINK WE NEED TO ADD ANOTHER PROP CALLING SIGNUP OR SIGNIN , SO THAT WE CAN TELL WHERE IS THE DATA COMMING FROM , IS IT THE SIGN UP PAGE OR THE SIGN IN PAGE . IF THE DATA IF FROM THE SIGN UP PAGE WE NEED TO CHECK ONLY THE USERNAME IF IT EXITSTS OR NOT AND IF IT FROM THE SIGN IN PAGE WE NEED TO SEND BOTHT THE USERNAME AND PASSWORD TO THE BACKEND FOR CHECKING IF THEY MATCH WITH OUR DATABASE OR NOT

*/

   






    // TAKING USER INPUT AND SAVING IT IN THE ATOM
    const userInput = (e) => {
        setData(e.target.value);
        console.log(data);
    }
    
    return (
        <Flex w={350} direction="column">
            <Text fontSize="md">{props.name}</Text>
            <Input
                
                onChange={userInput}
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
