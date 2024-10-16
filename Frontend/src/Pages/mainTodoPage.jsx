import React, { useState } from 'react'
import { ToDoInputBox } from '../Components/toDoInputBox'
import { Button, Flex, Text, Input, Center, Image } from '@chakra-ui/react';
import { account, databases } from '../lib/appwrite';
import newFileIcon from '../assets/icons/new-documentWhite.png'

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
      <Flex w='100vw' h='100vh' >


        {/* ***************************************************** */}
        {/* THE USER AND FILE SECTION */}
        {/* ***************************************************** */}
        <Flex h='100vh' padding='31px' paddingRight='34px' borderRight='1px' direction='column'>


          {/* THE USER NAME EMAIL AND PROFILE PICTURE */}
          <Flex w='351px' h='122px' justify='space-evenly' align='center' borderWidth='1px' borderColor='black' boxShadow='3px 3px black' borderRadius='4px'>


            {/* Profile picture */}
            <div className='bg-[#F56B00] w-[6rem] h-[6rem] rounded-full border-[1px] border-black' >
              {/* the user profile image will go here */}
            </div>



            {/* User Name and Email */}
            <Flex direction='column'>
              <Text fontSize='xl'>love-to-code108</Text>
              <Text fontSize='xl'>love.to.code108@</Text>
            </Flex>
          </Flex>






          {/* THE SEARCH BAR ADD FILE BUTTON AND THE FILES SECTION */}
          <Flex w='351px' marginTop='80px'>


            {/* Search bar and the add file button */}
            <Flex w='100%' justify='space-evenly' align='center'>

              <Input borderWidth='1px'
                borderColor='black'
                w='260px'
                borderRadius='2px'
                boxShadow='2px 2px 0 0 black'
                sx={
                  {
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    _hover: {
                      border: "2px solid black",
                      boxShadow: "2px 2px 0 0 black",

                      
                    },
                    _focus: {
                      border: "2px solid black",
                      boxShadow: "2px 2px 0 0 black",

                      
                    }
                  }
                }></Input>


              <Center borderWidth='1px' borderColor='black' borderRadius='4px'
                backgroundColor='black'

                paddingX='10px'
                paddingY='7px'>

                <Image w='25px' src={newFileIcon}></Image>
              </Center>

            </Flex>



            {/* looping through an array of files */}
            <Flex>

            </Flex>

          </Flex>

        </Flex>












        {/* ***************************************************** */}
        {/* THE TODO SECTION */}
        {/* ***************************************************** */}
        <Flex h='100vh'>




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
