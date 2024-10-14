import React, { useState } from 'react'
import { ToDoInputBox } from '../Components/toDoInputBox'
import { Button } from '@chakra-ui/react';

export const MainTodoPage = () => {

  const storedData = localStorage.getItem('userData');
  const userData = JSON.parse(storedData);
console.log(userData);

  const [array, setArray] = useState(userData);


  const printing = () => {
    console.log(array);
  }


  return (
    <div className=' w-[100vw] h-[100vh] font-poppins'>

      {array.map((value,index) => {
        return <ToDoInputBox key={index} val={value} arr={array}/>
      })}

      <Button onClick={printing}>Button</Button>

    </div>
  )
}
