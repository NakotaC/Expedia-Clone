import { useState } from "react";
import {   Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
   } from "@chakra-ui/react";

const PriceFilter = ({ onPriceRangeChange }) => {
  const [priceRange, setPriceRange] = useState([0, 10000]);

  const handlePriceRangeChange = (newPriceRange) => {
    setPriceRange(newPriceRange);
    onPriceRangeChange(newPriceRange);
  };

//   const style = {
//     track: {
//       backgroundColor: "gray.200",
//       height: "4px",
//       borderRadius: "full",
//     },
//     filledTrack: {
//       backgroundColor: "teal.500",
//       height: "4px",
//       borderRadius: "full",
//     },
//     thumb: {
//       backgroundColor: "teal.500",
//       width: "20px",
//       height: "20px",
//       borderRadius: "full",
//       boxShadow: "none",
//     },
//   };
//   sx={style}
  return (
    <div>
 
    <Slider
      min={0}
      max={10000}
      step={100}
      defaultValue={priceRange}
      onChange={handlePriceRangeChange}
    
      aria-label='slider-ex-1' 
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
      <SliderThumb />
    </Slider>
    </div>
  );
};

export default PriceFilter;
