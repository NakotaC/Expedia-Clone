import React,{useState} from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import data from "./city";
import ShowCalender from "./ShowCalender";
import { Button,} from "@chakra-ui/react";
import styles from "./Stay.module.css";
import {Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectCity } from "../../Redux/StayReducer/action";

function Stay() {
  const [selectedCity, setSelectedCity] = useState("");
  const dispatch = useDispatch();
  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (data) => {
    // the item selected
    console.log(data.name);
    setSelectedCity(data.name);
    dispatch(selectCity(data.name));
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const formatResult = (data) => {
    return (
      <>
        {/* <span style={{ display: 'block', textAlign: 'left' }}>id: {data.id}</span> */}
        <span style={{ display: "block", textAlign: "left" }}>{data.name}</span>
      </>
    );
  };

  return (
    <div className="App" style={{marginLeft:"230px",position:"relative", display:"flex"}}>
      <header style={{ backgroundColor: "white", margin: "20px" , width:"400px"}}>
        <div style={{ width: 400 ,}}>
          <ReactSearchAutocomplete
            items={data}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            formatResult={formatResult}
            showIcon={false}
            placeholder={"Going to"}
            styling={{
              height: "44px",
              border: "1px solid #dfe1e5",
              borderRadius: "6px",
              backgroundColor: "white",
              boxShadow: "rgba(32, 33, 36, 0.28) 0px 1px 6px 0px",
              hoverBackgroundColor: "#eee",
              color: "#212121",
              fontSize: "16px",
              fontFamily: "Arial",
              searchIconMargin: "0 0 0 16px",
            }}
          />
        </div>
      </header>
      <div className={styles["calenderWrapper"]} style={{display:"flex", flexDirection:"column",gap:"20px"}}>
        <div style={{width:"400px",marginTop:"20px"}}>
        <ShowCalender />
        </div>
        
          <Button
            colorScheme="blue"
            size="lg"
            className={styles["SearchBtn1"]}
            style={{margin:"auto",}}
            
          >
            <Link to={{ pathname: '/stay' }}>Search</Link>
          
          </Button >
       
      </div>
    </div>
  );
}

export default Stay;