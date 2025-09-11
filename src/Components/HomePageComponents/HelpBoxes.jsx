import React from 'react'
import { Box, Heading, HStack, SimpleGrid,Text ,Icon} from '@chakra-ui/react'
import {BsPencilFill} from 'react-icons/bs'
import {RiMessage2Fill} from 'react-icons/ri'
import {HiCurrencyDollar} from 'react-icons/hi'
const HelpBoxes = () => {
  return (
    <Box width={'85%'} m={'auto'} mt={10} >
            <Heading fontSize={'3xl'} fontWeight='semibold' textAlign={'left'} >
                Here to help keep you on the move
            </Heading>
            {/* <Flex>
                <Box border='1px solid gray' rounded='7px' mt={4} >
                    <Heading textAlign={'left'} p={3} pb={1} fontSize='20px' >Change or cancel a trip</Heading>
                    <Heading textAlign={'left'} p={3} pt={1} fontSize='12px' >Make update to your itenerary or cancel a booking</Heading>
                </Box>
            </Flex> */}
            <SimpleGrid gridTemplateColumns={{base:'repeat(1,1fr)',sm:'repeat(3,1fr)'}} columnGap={4} >
                <Box border='1px solid #E0E0E0' rounded='7px' mt={4} >
                    <HStack justifyContent={'space-between'} pr={2} >
                    <Heading textAlign={'left'} p={3} pb={1} fontSize='20px' >Change or cancel a trip</Heading>
                    <Icon as={BsPencilFill}  />
                    </HStack>
                    <Text textAlign={'left'} p={3} pt={1} color='#616161' fontSize='12px' >Make update to your itenerary or cancel a booking</Text>
                </Box>
                <Box border='1px solid #E0E0E0' rounded='7px' mt={4} >
                    <HStack justifyContent={'space-between'} pr={2} >
                    <Heading textAlign={'left'} p={3} pb={1} fontSize='20px' >Use a Credit or Coupan</Heading>
                    <Icon as={HiCurrencyDollar}  />
                    </HStack>
                    <Text textAlign={'left'} p={3} pt={1} color='#616161' fontSize='12px' >Apply a coupan code or credit a new trip</Text>
                </Box>
                <Box border='1px solid #E0E0E0' rounded='7px' mt={4} >
                    <HStack justifyContent={'space-between'} pr={2} >
                    <Heading textAlign={'left'} p={3} pb={1} fontSize='20px' >Track your Refund</Heading>
                    <Icon as={RiMessage2Fill}  />
                    </HStack>
                    <Text textAlign={'left'} p={3} pt={1} color='#616161' fontSize='12px' >Check a process of refund currently progress</Text>
                </Box>
            </SimpleGrid>
        </Box>
  )
}

export default HelpBoxes
