import React,{useState} from 'react'
import { AiTwotoneEnvironment } from "react-icons/ai";
import {Image,Box,FormLabel,Button} from "@chakra-ui/react";
import { Link } from 'react-router-dom';



export const InputBox =()=>{
  
  const [placeName,setPlaceName] = useState("");

 

  
 

  return (
    <>
   
    <Box width={{ base: '100%', sm: '50%', md: '25%',lg:"100%"} } height={{base: '24px', md: '40px', lg: '86px' }} display="flex" justifyContent="center" m="auto">
    <Box width={{ base: '100%', sm: '50%', md: '25%',lg:"300px"} } height={{base: '24px', md: '40px', lg: '60px' }}m="auto">
      <Image src="http://www.rahaf.in/wp-content/uploads/2016/04/Travel-Tourism.jpg" alt="" width="100%" height="100%"  borderRadius="5px"/>
      </Box>
      
      
    <Box display="flex" flexDirection={"row"}width={"240px"} border={"1px solid"} borderRadius="5px" height={"40px"}  m="auto" ml="50px" mr="4px">
    <Box m="auto"><AiTwotoneEnvironment /> </Box>
    <FormLabel  mt="7px"  > Select Place :  </FormLabel>
      
      <select style={{marginLeft:"8px", width:"100px", marginRight:"7px"}} id="" value={placeName} onChange={(e)=>setPlaceName(e.target.value)} name="city">
      <option >select-city</option>
        <option value="kolkata">Kolkata</option>
        <option value="delhi">Delhi</option>
        <option value="rajasthan">Rajasthan</option>
      </select>
      </Box>
      <Button border="1px solid" borderRadius="6px" width="70px" height="40px" m="auto" bg="#304FFE" color="white" ml="5px" >
      <Link to={{ pathname: '/ThingsToDo', search: `?place=${placeName}` }}>Search</Link>
      </Button>
    </Box>
    
    
    
   
    </>
      
       
       
    
    
   
  );
}
