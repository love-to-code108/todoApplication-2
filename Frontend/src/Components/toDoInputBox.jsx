import { Input } from '@chakra-ui/react';
import React, { useEffect } from 'react'

export const ToDoInputBox = () => {

// ADDING EVENT LISTNER TO LISTEN FOR WHEN THE ENTER BUTTON IS BEING PRESSED BY THE USER

useEffect(() => {

    const handleKeyPress = (event) => {
        if(event.key == 'Enter')
            console.log("Hello");

    };

    window.addEventListener('keydown',handleKeyPress);

    // THE CLEAN UP CODE 
    return() => {
        window.removeEventListener('keydown',handleKeyPress);
    } 
},[])





  return (
    <Input type='text' on>
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
