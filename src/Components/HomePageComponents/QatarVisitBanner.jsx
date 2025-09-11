import React from 'react'
import { Box, Center, Flex, Heading,  Image,  Text } from '@chakra-ui/react'


const QatarVisitBanner = () => {
  return (
    <Center>
            <Box width={'85%'} border='1px solid #E0E0E0' rounded='7px' mt={10}  >
                <Flex direction={{base:'column',sm:'row'}} >
                    <Box width={{base:'100%',sm:'50%'}}>
                    <Image roundedBottomLeft={'7px'} roundedLeft={'7px'}  width={'100%'} src='https://i.postimg.cc/qvPKqWGw/Screenshot-2023-03-28-171734.png'/>
                    </Box>
                    <Box width={{base:'100%',sm:'50%'}}>
                        <Image mt={4} ml={1} src='https://i.postimg.cc/BnbWbVvj/Screenshot-2023-03-28-172144.png' />
                        <Heading pl={2} mb={2} textAlign={'left'} size='md'>Feel more love in Qatar</Heading>
                        <Text pl={2} pb={2} textAlign={'left'}>Feel the joy of blue-sky beachside days. sunset cruises and starlit desert night</Text>
                    </Box>
                </Flex>

            </Box>
        </Center>
  )
}

export default QatarVisitBanner
