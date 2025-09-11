import React from "react";
import {
  Flex,
  Button,
  Box,
  Image,
  Heading,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";
import FlightList from "./FlightList";
import { useState } from "react";

const SideBar = () => {
  const [priceValue, setPriceValue] = useState(8);
  const [classes, setClasses] = useState("");
  const [page, setPage] = useState(1);
  const [Packaging, setpackaging] = useState("");

  const pageBtn={
    marginTop: "3%",
    // width:"164px",
    padding:"15px",
    height: "43px",
    background: "#3662D8",
    color:" #FFFFFF",
    bordeRadius: "0.5rem",
    position: "relative",
    marginBottom:"1rem"
}

  return (
      <Box
        display={"flex"}
        padding="0px 40px"
        gap={"30px"}
        width="100%"
        marginBottom={"100px"}
      >
        <Box
          width={"25%"}
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
          height={"auto"}
          padding="20px"
          textAlign={"center"}
        >
          <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>
            Sorting & Filtering
          </h1>

          <Box>
            <Heading as="h5" size="sm" m="3">
              Price Per Trip
            </Heading>
            <RadioGroup onChange={setPriceValue} value={priceValue}>
              <Stack direction="column">
                <Radio value="5">₹ 4000 - ₹ 5000</Radio>
                <Radio value="6">₹ 5000 - ₹ 6000</Radio>
                <Radio value="7">₹ 6000 - ₹ 7000</Radio>
                <Radio value="8">₹ 7000 - ₹ 8000</Radio>
              </Stack>
            </RadioGroup>
          </Box>

          <Box>
            <Heading as="h5" size="sm" m="3">
              Filter Class
            </Heading>
            <RadioGroup onChange={setClasses} value={classes}>
              <Stack direction="column">
                <Radio value="eco">Ecomonic Class</Radio>
                <Radio value="business">Business Class</Radio>
                <Radio value="prime">Premium</Radio>
              </Stack>
            </RadioGroup>
          </Box>

          <Box>
            <Heading as="h5" size="sm" m="3">
              Packaging
            </Heading>
            <RadioGroup onChange={setpackaging} value={Packaging}>
              <Stack direction="column">
                <Radio value="eco">0 - 15 Kg</Radio>
                <Radio value="business"> 15 - 30 Kg</Radio>
                <Radio value="prime"> 30 kg +</Radio>
              </Stack>
            </RadioGroup>
          </Box>
        </Box>
        <Box
          width={"80%"}
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
          height={"auto"}
          padding="20px"
        >
          <Image
            src="https://mmt.servedbyadbutler.com/getad.img/;libID=3737167"
            width={"90%"}
            margin="auto"
            marginBottom={"20px"}
          />

          {/* Pagination Part UI Start */}
          <Stack spacing={4} direction='row' align='center'>

          {/* <Flex m="5" align="center"> */}
            <Button 
              style={pageBtn}
              onClick={() => setPage(page - 1)}
              isDisabled={page === 1}
            >
              Previous
            </Button>
            <Button style={pageBtn}>
              {page}
            </Button>
            <Button
              style={pageBtn}
              isDisabled={page === 4}
              onClick={() => setPage(page + 1)}
              >
              Next
            </Button>
          {/* </Flex> */}
              </Stack>
          {/* Pagination Part UI End */}

          <FlightList page={page} priceValue={priceValue} />
        </Box>
      </Box>
  );
};

export default SideBar;
