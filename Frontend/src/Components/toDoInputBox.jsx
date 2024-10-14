import { Input } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react'




export const ToDoInputBox = (props) => {

  console.log(props.val);


  // USING USE REF
  const input1 = useRef()
  
  
  
  
  // USING USE STATE
  const [userInput, setUserInput] = useState('');
  
  console.log(userInput);
  
  
  // HANDELING THE ENTER PRESS
  const handleKeyPress = (event) => {
    if (event.key == 'Enter') {
      setUserInput(input1.current.value);
      props.val.value = input1.current.value;
      localStorage.setItem('userData', JSON.stringify(props.arr));
      // console.log(input1.current.value);
    }
  };
  
  
  
  
  // ADDING EVENT LISTNER TO LISTEN FOR WHEN THE ENTER BUTTON IS BEING PRESSED BY THE USER
  
  useEffect(() => {
    
    input1.current.value = props.val.value;
    input1.current.addEventListener('keydown', handleKeyPress);

    // THE CLEAN UP CODE 
    return () => {
      input1.current.removeEventListener('keydown', handleKeyPress);
    }
  }, [])








  return (
    <Input ref={input1} type='text'>
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
