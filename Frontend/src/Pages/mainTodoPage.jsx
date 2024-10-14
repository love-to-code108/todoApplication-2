import React, { useState } from 'react'
import { ToDoInputBox } from '../Components/toDoInputBox'
import { Button } from '@chakra-ui/react';
import { account , databases } from '../lib/appwrite';

export const MainTodoPage = () => {

  // const storedData = localStorage.getItem('userData');
  // const userData = JSON.parse(storedData);
  // console.log(userData);

  const [array, setArray] = useState([]);


  const printing = async () => {
    const response = await databases.listDocuments(
      '670d28850002211f53b4',
      '670d2893000d94d71bc2',
    )

    console.log(response);
    setArray(response.documents);
  }






  return (
    <div className=' w-[100vw] h-[100vh] font-poppins'>
      <Button onClick={printing}>Click me</Button>
      

    </div>
  )
}
