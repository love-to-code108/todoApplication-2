import { Flex, Input, Button, Image } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react'
import addTodoSign from "../assets/icons/+.svg"




export const ToDoInputInputBox = (props) => {




  return (
    <Flex>
      <Input
      marginRight='15px'
        w='385px'
        placeholder='Get shit done'
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
      <Button
        background='black'
        w='45px'
        h='41.5px'
        fontSize='3xl'>
        <Image
          w='45px'
          src={addTodoSign}></Image>
      </Button>
    </Flex>
  );
}




/*

[{  
    value:"a",
    status:true

    },
    {
    value:"b",
    status:false
    }]

*/
