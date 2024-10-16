import React, { useState } from 'react'
import { ToDoInputBox } from '../Components/toDoInputBox'
import { Button, Flex , Text } from '@chakra-ui/react';
import { account, databases } from '../lib/appwrite';

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
      {/* <Button onClick={printing}>Click me</Button> */}






      {/* THE TODO APPLICATION PAGE STARTS HERE */}
      <Flex direction="row">


        {/* ***************************************************** */}
        {/* THE USER AND FILE SECTION */}
        {/* ***************************************************** */}
        <Flex w='20%' h='100vh'>


          {/* THE USER NAME EMAIL AND PROFILE PICTURE */}
          <Flex w='351px' h='122px' justify='center' align='center'>
            {/* Profile picture */}
            <div className='bg-[#F56B00] w-[6rem] h-[6rem] rounded-full'>
                {/* the user profile image will go here */}
            </div>

            {/* User Name and Email */}
            <Flex direction='column'>
                <Text fontSize='lg'>UserName</Text>
                <Text fontSize='lg'>Email</Text>
            </Flex>
          </Flex>




          {/* THE SEARCH BAR ADD FILE BUTTON AND THE FILES SECTION */}
          <Flex>

          </Flex>

        </Flex>








        {/* ***************************************************** */}
        {/* THE TODO SECTION */}
        {/* ***************************************************** */}
        <Flex w='80%' h='100vh'>




          {/* THE DOIT LOGO  */}


          {/* WHAT DO YOU NEED TO DO SECTION WITH THE INPUT BOX AND THE ADD BUTTON */}




          {/* THE TODOS HEADING */}



          {/* THE TODOS SECTION WITH ALL TODOS */}




          {/* THE COMPLETED HEADING */}


          {/* THE COMPLETED SECTION */}
        </Flex>

      </Flex>


    </div>
  )
}
