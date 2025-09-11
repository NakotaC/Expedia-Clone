import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Image,
    useColorMode
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    MoonIcon, SunIcon
  } from '@chakra-ui/icons';

  import {BsGlobe2,BsBuildingFillCheck} from 'react-icons/bs'
  import {IoIosNotifications} from 'react-icons/io'
  import {HiOutlineChevronDown} from 'react-icons/hi'
  import {MdOutlineFlight} from 'react-icons/md'
  import {AiFillCar} from 'react-icons/ai'
  import {Link as RouterLink} from 'react-router-dom'
  
  export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    const myColor = useColorModeValue('light','dark')
  
    return (
    
     <Box>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          justifyContent={'space-between'}
          py={{ base: 2, }}
          px={{ base: 4 }}
          pr={{sm:'80px'}}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
          </Flex>
          <RouterLink to="/">
          <Flex flex={{ base: 100 }} justify={{ base: 'space-between', md: 'start' }}>
            <Image src={myColor=='light'?'https://i.postimg.cc/QxksRNkQ/expedio-Logo.jpg':'https://i.postimg.cc/fRx4D7QH/logo3.png'}  alt='logo' width={{base:'350px',sm:'18%'}} />
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={6}>
              <DesktopNav />
            </Flex>
        
          </Flex>
          </RouterLink>
  
          <Stack
            flex={{ base: 1, sm: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={{base:3,sm:6}}>

            
            <Box fontWeight={'500'} fontSize={{base:'12px',sm:'16px'}} display={'flex'} >
                <Icon mt={1} mr={1}  as={BsGlobe2} />
                English
            </Box> 
            
            
            
            <Box fontWeight={'500'} fontSize={{base:'12px',sm:'16px'}} display={'flex'} >
                Support
            </Box>

            <Box fontWeight={'500'} fontSize={{base:'12px',sm:'16px'}} display={'flex'} >
                Trip
            </Box>

            <Box fontWeight={'500'} fontSize={{base:'16px',sm:'23px'}}  display={'flex'} >
                <Icon mt={0.5} mr={1}   as={IoIosNotifications} />
            </Box>
             <RouterLink to="/login">
            <Box fontWeight={'500'}  fontSize={{base:'12px',sm:'16px'}}  mr={9} >
                SignIn
            </Box>
            </RouterLink>
            <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>


            
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    
      
   
      
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label} mt={'12px'} zIndex={5}  >
            <Popover trigger={'click'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Box fontSize={20} zIndex={10}>
                    <Link
                    p={2}
                    href={navItem.href ?? '#'}
                    fontSize={13}
                    fontWeight={500}
                    color={linkColor}
                    _hover={{
                        textDecoration: 'none',
                        color: linkHoverColor,
                    }}>
                    {navItem.label}
                    </Link>
                    <Icon  pt={2} as={HiOutlineChevronDown} />
                </Box>
                
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  
                  border={0}
                  boxShadow={'xl'}
                  // bg={popoverContentBgColor}
                  bg={'white'}
                  zIndex={5}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href,icon }) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('blue.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box display={'flex'} >
            <Icon as={icon} mr={2} mt={1} />
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'black' }}
              fontWeight={500}>
              {label}
            </Text>
            
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'black'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  
  
  const NAV_ITEMS = [
    {
      label: 'More Travels',
      children: [
        {
          label: 'Stays',
          href: '#',
          icon : BsBuildingFillCheck
        },
        
        {
          label: 'Flight',
          href: '#',
          icon : MdOutlineFlight
        },
        {
            label : 'Car',
            href : '#',
            icon : AiFillCar
        }

      ],
    }
  ];