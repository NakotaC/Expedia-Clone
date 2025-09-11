import React from 'react'
import { Box, Card, CardBody, Center, Heading, Image, Stack, Text} from '@chakra-ui/react'
const ImageQRCodeBanner = () => {
  return (
    <Center>
        <Box width={'85%'} border='1px solid #BDBDBD' borderRadius={'7px'}  margin={'auto'} mt={10} >
        <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        >
        <Image
            objectFit='cover'
            roundedLeft={'7px'}
            maxW={{ base: '100%', sm: '300px' }}
            src='https://a.travel-assets.com/mad-service/footer/bnaBanners/BEX_ROME_iStock_72dpi.jpg'
            alt='Tourist'
        />

        <Stack>
            <CardBody>
            <Heading pl={3} py='2' fontSize={'3xl'} fontWeight='semibold' textAlign={'left'}>Go with the Chalo Ghume App</Heading>

            <Text pl={3} py='2' textAlign={'left'} >
            Save even more - get up to 20% on select hotels and earn double the points when you book on the app. Our app deals help you to save on trips so you can travel more and manage it all on the go.
            </Text>

            <Text pl={3} py='2' textAlign={'left'} fontWeight={'bold'} color={"gray.700"} >
                Scan the QR code with your device camera and download our app
            </Text>
            </CardBody>


        </Stack>
        <Image
            objectFit='cover'
            p={5}
            maxW={{ base: '100%', sm: '200px' }}
            src='https://a.travel-assets.com/mad-service/qr-code/footer_qr_hp/BEX-HP-CONTROL-27.png'
            alt='Caffe Latte'
        />
        </Card>
        </Box>
        </Center>
  )
}

export default ImageQRCodeBanner
