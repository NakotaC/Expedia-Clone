import { useDispatch } from "react-redux";
import { fetchingHotels } from "../../Redux/StayReducer/action";


function Pagination({current, onChange, total}) {

const dispatch = useDispatch();

  let btnArr = new Array(total).fill(0);
  return (
  <div data-testid = "page-container">
    {btnArr.map((ele, index) => {

      return (
        <button id="pagination"
        key={index + Math.random()}
        style={{
          margin:"0.5rem",
          padding: "0.5rem",
          backgroundColor: current === index + 1 ? "green" : "teal",
          borderRadius: "5px",
        }}
        onClick={()=> {
          dispatch(fetchingHotels("", "",index+1));
          onChange(index +1)}}
        >
          {index +1}
        </button>
      )
    })}
  
  </div>
 
  );
}

export default Pagination;
