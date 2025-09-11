import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import DestinationCard from './DestinationCard';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer'

import {Grid,Box,Center} from '@chakra-ui/react';


export const Destination = () => {
  const [places,setPlaces] = useState([])
  const [searchParams] = useSearchParams()
 
  let place = searchParams.get("place")
  
  
  useEffect(()=>{
    axios.get(`https://happy-sunglasses-eel.cyclic.app/Things_todo?place=${place}`).then((response) => {
        setPlaces(response.data)
     console.log(response.data)
    });
  },[])
 
 
  return (

    
      <>
      
        <Center>
      
      <Grid templateColumns={{ base: 'repeat(1, 1fr)',  md: 'repeat(2, 1fr)',lg:'repeat(3, 1fr)'} } columnGap={20} rowGap={20} mt={"60px"}>
       {places.map((el)=>(<DestinationCard key={el.id} image={el.image} title={el.title} price={el.price} rating={+el.rating ? +el.rating : 0} place={el.place}/>
        ))}
        </Grid>
    
  </Center>
   
      
      
      </>
      
  )
}
