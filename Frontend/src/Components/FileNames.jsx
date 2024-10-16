import { Flex, Input, Image } from '@chakra-ui/react'
import fileSelectedArrowImg from "../assets/icons/right-arrow.png"
import { useEffect, useRef } from 'react'
import { useRecoilState } from 'recoil'
import { fileSelectedArrow_atom } from '../Atoms/atoms'


export const FileNames = (props) => {

    const [fileSelectedArrow, setFileSelectedArrow] = useRecoilState(fileSelectedArrow_atom);

    const fileSelectedArrowImgState = useRef('');
    const inputSectionRef = useRef('');
    
    
    
    // after click i am setting the setFileSelectedArrow state to equal to the index of the element so that i can trace which element needs to have arrow
    const arrowPosition_Fun = () => {
        setFileSelectedArrow(props.ind);
        fileSelectedArrowImgState.current.style.display = 'flex';
    }
    


    console.log("1");
    
    useEffect(() => {
        
        console.log("Number of render");

        if (fileSelectedArrow === props.ind) {
            fileSelectedArrowImgState.current.style.display = 'flex';
            inputSectionRef.current.style.backgroundColor = 'black';
            inputSectionRef.current.style.color = 'white';
            inputSectionRef.current.style.boxShadow = 'none';


        } else {
            fileSelectedArrowImgState.current.style.display = 'none';
            inputSectionRef.current.style.backgroundColor = 'white';
            inputSectionRef.current.style.color = 'black';
            inputSectionRef.current.style.boxShadow = '2px 2px black';

        }

        
    });









    return (
        <Flex justify='space-evenly' align='center' marginBottom='10px' w='100%'>

            {/* arrow image */}
            <img className='h-[20px] hidden' ref={fileSelectedArrowImgState} src={fileSelectedArrowImg} alt="" />

            {/* the file name input section */}
            <Input
                ref={inputSectionRef}
                onClick={arrowPosition_Fun}
                width='280px'
                borderWidth='2px'
                borderColor='black'
                value={props.val}
                borderRadius='2px'
                isReadOnly
                sx={
                    {
                        transition: 'transformx 0.2s ease, box-shadow 0.2s ease',
                        _hover: {
                            border: "2px solid black",
                            boxShadow: "2px 2px 0 0 black",
                            cursor:"pointer",
                            


                        },
                        _focus: {
                            border: "2px solid black",
                            boxShadow: "2px 2px 0 0 black",


                        }
                    }
                }
            >

            </Input>
        </Flex>
    )
}
