import { Input } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react'




export const ToDoInputBox = (props) => {




  return (
    <Input type='text'
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
