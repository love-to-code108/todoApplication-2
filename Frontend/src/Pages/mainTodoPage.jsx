import { useState } from 'react'
import { Flex, Text, Input, Center, Image, Heading } from '@chakra-ui/react';
import newFileIcon from '../assets/icons/new-documentWhite.png'
import { FileNames } from '../Components/FileNames';
import doitLogo from "../assets/Logo/doitLogo.svg"
import { ToDoInputInputBox } from '../Components/toDoInputBox';
import { IndivisualTodo } from '../Components/indivisualTodo';



export const MainTodoPage = () => {

  // const storedData = localStorage.getItem('userData');
  // const userData = JSON.parse(storedData);
  // console.log(userData);

  const [array, setArray] = useState(["File 1", "File 2", "File 3", "File 4"]);









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
          <Flex w='351px' marginTop='80px' direction='column'>


            {/* Search bar and the add file button */}
            <Flex w='100%' justify='space-evenly' align='center' marginBottom='30px'>

              <Input 
              placeholder='Search'
              borderWidth='1px'
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
            <Flex backgroundColor='' w='351px'
              direction='column' align='end' justify='space-evenly'>

              {/* looping throught elements in an array */}
              {array.map((value, index) => (
                <FileNames key={value} ind={index} val={value} />

              ))}

            </Flex>




            {/* -------------------------------------------- */}
            {/* THE SEARCH BAR ADD FILE BUTTON AND THE FILES SECTION */}
          </Flex>
          {/* --------------------------------- */}
          {/* THE USER AND FILE SECTION */}
        </Flex>












        {/* ***************************************************** */}
        {/* THE TODO SECTION */}
        {/* ***************************************************** */}
        <Flex h='100vh' direction='column' w='100%' justify='start' align='center'>



          {/* ////////////////////////// */}
          {/* THE DOIT LOGO  */}
          <Image
            h='50px'
            position='absolute'
            top='30px'
            right='60px'
            src={doitLogo} alt="" />
            


          {/* ///////////////////////////////////// */}
          {/* what do yo need to do and the input box */}
          <Flex direction='column' w='500px' marginTop='160px' marginBottom='60px'>

            {/* WHAT DO YOU NEED TO DO SECTION WITH THE INPUT BOX AND THE ADD BUTTON */}
            <Text fontSize='3xl' marginBottom='10px'>What do you need to do ?</Text>

            {/* the input section */}
            <ToDoInputInputBox/>
          </Flex>



          {/* //////////////////////////////////////// */}
          {/* The todos heading with all the todos */}
          <Flex direction='column' w='500px'>


            {/* THE TODOS HEADING */}
            <Text fontSize='3xl'>Todos:</Text>


            {/* THE TODOS SECTION WITH ALL TODOS */}
            <IndivisualTodo />


          </Flex>




          {/* THE COMPLETED HEADING */}


          {/* THE COMPLETED SECTION */}
        </Flex>

      </Flex>


    </div>
  )
}
