import { useState, useEffect } from 'react'
import { Box, Button, HStack, Heading, Icon, Image, Input, SimpleGrid, Text, useToast } from '@chakra-ui/react'
import {TbBed} from 'react-icons/tb'
import {BsCheck} from 'react-icons/bs'
import {IoIosMan} from 'react-icons/io'
import {AiOutlineWifi} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { getFirestore, collection, addDoc } from "firebase/firestore";
import firebase_app from "../01_firebase/config_firebase";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const db = getFirestore(firebase_app);
  
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    cardName: '',
    cardNumber: '',
    securityCode: ''
  });

  useEffect(() => {
    const hotelData = localStorage.getItem('selectedHotel');
    const flightData = localStorage.getItem('selectedFlight');
    
    if (hotelData) {
      setSelectedHotel(JSON.parse(hotelData));
    }
    if (flightData) {
      setSelectedFlight(JSON.parse(flightData));
    }
    
    if (!hotelData && !flightData) {
      navigate('/');
    }
  }, [navigate]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCompleteBooking = async () => {
    if (!formData.firstName || !formData.lastName || !formData.mobile) {
      toast({
        title: "Please fill required fields",
        status: "error",
        duration: 3000,
      });
      return;
    }

    try {
      const bookingData = {
        ...formData,
        hotel: selectedHotel,
        flight: selectedFlight,
        bookingDate: new Date().toISOString(),
        bookingId: `BK${Date.now()}`,
        status: 'confirmed'
      };

      await addDoc(collection(db, "bookings"), bookingData);
      
      localStorage.removeItem('selectedHotel');
      localStorage.removeItem('selectedFlight');
      localStorage.removeItem('checkInDate');
      localStorage.removeItem('checkOutDate');
      
      toast({
        title: "Booking Confirmed!",
        status: "success",
        duration: 3000,
      });
      
      navigate('/');
    } catch (error) {
      toast({
        title: "Booking failed",
        status: "error",
        duration: 3000,
      });
    }
  };

  const currentItem = selectedHotel || selectedFlight;
  if (!currentItem) return <div>Loading...</div>;

  return (
    <Box bg={'gray.300'} width={'100%'} height={'1000px'} >
      <Box width={'85%'} margin={'auto'} >
        <Heading fontSize={'26px'} fontWeight={'bold'} textAlign={'left'} >Review and Book</Heading>

        <Box bg={'white'} mt={2} p={3} >
          <HStack>
            <Box>
              <Image src='https://i.postimg.cc/mZmMdvzw/Screenshot-2023-04-01-130744.png' alt='image' />
            </Box>
            <Box>
              <Text textAlign={'left'} fontWeight={'bold'} >
                Fully refundable before Sat, 8 Apr, 18:00 (property local time)
              </Text>
              <Text>
              You can change or cancel this stay if plans change. Because flexibility matters.
              </Text>
            </Box>
          </HStack>
        </Box>

        <SimpleGrid mt={2} gridTemplateColumns={'63% 35%'} gap={"1%"} >
          <Box bg={'white'} p={3}  >
            <Heading textAlign={'left'} fontSize={'20px'} fontWeight={'bold'}  >Whos Checking</Heading>
            
            <Box>
              <Box textAlign={'left'} my={2} >
                <label>
                  First Name : <Input name="firstName" value={formData.firstName} onChange={handleInputChange} type='text' placeholder='First Name' border='1px solid gray' />
                </label>
              </Box>
              <Box textAlign={'left'} my={2} >
                <label>
                  Surname Name : <Input name="lastName" value={formData.lastName} onChange={handleInputChange} type='text' placeholder='Surname' border='1px solid gray' />
                </label>
              </Box>
              <Box textAlign={'left'} my={2} >
                <label>
                  Mobile No : <Input name="mobile" value={formData.mobile} onChange={handleInputChange} type='text' placeholder='Mobile No' border='1px solid gray' />
                </label>
              </Box>
            </Box>

            <Box textAlign={'left'} display={'flex'} >
              <Input type='checkbox'/><Heading ml={2} >Receive text alerts about this trip (free of charge).</Heading>
            </Box>

            <Heading textAlign={'left'} fontSize={'20px'} fontWeight={'bold'} mt={6} >Payment Method</Heading>
            
            <Box display={'flex'} gap={'6px'} >
              <Image height={'30px'} width={'30px'}  src='https://a.travel-assets.com/dms-svg/payments/cards-cc_american_express.svg' alt='image' />
              <Image height={'30px'} width={'30px'}   src='https://a.travel-assets.com/dms-svg/payments/cards-cc_master_card.svg' alt='image' />
              <Image height={'30px'} width={'30px'}  src='https://a.travel-assets.com/egds/marks/payment__visa.svg' alt='image' />
              <Image  height={'30px'} width={'30px'} src='https://a.travel-assets.com/dms-svg/payments/cards-cc_visa_electron.svg' alt='image' />
            </Box>
            <Box>
              <Box textAlign={'left'} my={2} >
                <label>
                  <b>Name on Card</b> : <Input name="cardName" value={formData.cardName} onChange={handleInputChange} type='text' placeholder='Card Name' border='1px solid gray' />
                </label>
              </Box>
              <Box textAlign={'left'} my={2} >
                <label>
                  <b>Debit/Credit card number : </b> <Input name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} type='text' placeholder='Card Number' border='1px solid gray' />
                </label>
              </Box>
              <Box textAlign={'left'} my={2} >
                <label>
                  <b>Security code :</b> <Input name="securityCode" value={formData.securityCode} onChange={handleInputChange} type='text' placeholder='CVV' border='1px solid gray' />
                </label>
              </Box>
            </Box>

          </Box>

          <Box bg={'white'} textAlign={'left'} p={4} >
            <Image mb={1} width={'100%'} src={currentItem.image || 'https://images.trvl-media.com/lodging/4000000/3450000/3447500/3447485/4c0514cb_l.jpg'} />
            <Heading fontSize={'13px'} >{currentItem.name || currentItem.airline}</Heading>
            <Heading fontSize={'13px'}>{selectedHotel ? currentItem.place : `${currentItem.from} to ${currentItem.to}`}</Heading>
            
            {selectedHotel && (
              <SimpleGrid gridTemplateColumns={'repeat(2,1fr)'} mt={3} mb={5} >
                <Box><Icon as={TbBed} fontSize={'18px'} />  2 Twins Bed</Box>
                <Box><Icon as={IoIosMan} fontSize={'18px'} />   Sleeps 3</Box>
                <Box><Icon as={AiOutlineWifi} fontSize={'18px'} />  Free WiFi</Box>
                <Box><Icon as={BsCheck} fontSize={'18px'} />  Free parking</Box>
              </SimpleGrid>
            )}

            <Box justifyContent={'space-between'} display={'flex'} >
              <Box>1 room x 1 night</Box>
              <Box>${currentItem.price?.toLocaleString()}</Box>
            </Box>

            <Box justifyContent={'space-between'} display={'flex'} >
              <Box>Taxes</Box>
              <Box>${Math.round(currentItem.price * 0.1)}</Box>
            </Box>

            <Box justifyContent={'space-between'} display={'flex'} fontWeight={'bold'} >
              <Box>Total</Box>
              <Box>${Math.round(currentItem.price * 1.1)?.toLocaleString()}</Box>
            </Box>

            <Box justifyContent={'space-between'} display={'flex'} color='green.600' >
              <Box>Pay Now</Box>
              <Box>$0.00</Box>
            </Box>

            <Box justifyContent={'space-between'} display={'flex'} >
              <Box>Pay at property</Box>
              <Box>${Math.round(currentItem.price * 1.1)?.toLocaleString()}</Box>
            </Box>
            <Button onClick={handleCompleteBooking} mt={4} width={'100%'} height='40px' bg={'#FF9800'} rounded={'7px'} >Complete Booking</Button>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default CheckoutPage