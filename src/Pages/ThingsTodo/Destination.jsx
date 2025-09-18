import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import firebase_app from "../../01_firebase/config_firebase";
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
  
  
useEffect(() => {
    const fetchThings = async () => {
      const db = getFirestore(firebase_app);
      let q = collection(db, "Things_todo");
      if (place) {
        q = query(q, where("place", "==", place));
      }
      const querySnapshot = await getDocs(q);
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setPlaces(data);
      console.log(data);
    };
    fetchThings();
  }, [place]);
 
 
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
