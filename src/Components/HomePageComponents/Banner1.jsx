import { Center, Image,Box } from '@chakra-ui/react'
import React from 'react'

const Banner1 = () => {
  return (
    <Center>
        <Box width={'85%'} margin={'auto'} mt={10} >
            <Image width={'100%'} src='https://i.postimg.cc/MHtTNCQm/banner.png' alt='banner' />
        </Box>
    </Center>
  )
}

export default Banner1
