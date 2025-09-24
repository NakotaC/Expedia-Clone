import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingHotels } from "../../Redux/StayReducer/action";
import "./StayData.css";
import Sidebar from "./Sidebar";
import Pagination from "./Pagination";
import { useNavigate } from "react-router-dom";

const StayData = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = useSelector((store) => store.StayReducer);
  const checkInDate = useSelector((state) => state.StayReducer.checkInDate);
  const checkOutDate = useSelector((state) => state.StayReducer.checkOutDate);
  const selectedCity = useSelector((state) => state.StayReducer.selectedCity);
  
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 10000]);
  const [filteredHotel, setFilteredHotel] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalNumOfPages = Math.ceil(filteredHotel.length / 20); 

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleLeft = (hotel) => {
    localStorage.setItem("selectedHotel", JSON.stringify(hotel));
    localStorage.setItem("checkInDate", checkInDate);
    localStorage.setItem("checkOutDate", checkOutDate);
    navigate("/checkout");
  };

  useEffect(() => {
    dispatch(fetchingHotels("","",1));
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      let filtered = [...data]
      if (selectedCity) {
        filtered = filtered.filter(hotel => 
          hotel.place?.toLowerCase().includes(selectedCity.toLowerCase()) ||
          hotel.name?.toLowerCase().includes(selectedCity.toLowerCase())
        );
      }
      
      filtered = filtered.filter(
        (hotel) =>
          hotel.price >= selectedPriceRange[0] &&
          hotel.price <= selectedPriceRange[1]
      );
      
      if (sortBy === "price") {
        filtered.sort((a, b) => {
          return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
        });
      } else if (sortBy === "rating") {
        filtered.sort((a, b) => {
          const ratingA = a.rating || 0;
          const ratingB = b.rating || 0;
          return sortOrder === "asc" ? ratingA - ratingB : ratingB - ratingA;
        });
      }
      
      setFilteredHotel(filtered);
    }
  }, [data, selectedPriceRange, sortBy, sortOrder, selectedCity]);

  return (
    <div className="stay-data">
      <div className="sidebar-container">
        <Sidebar 
          onPriceRangeChange={setSelectedPriceRange}
          onSortChange={(sort, order) => {
            setSortBy(sort);
            setSortOrder(order);
          }}
        />
      </div>

      {filteredHotel?.map((hotel) => (
        <div className="stay-card" key={hotel.id}>
          <img src={hotel.image} alt="hotel" />

          <div className="stay-info">
            <div className="stay-header">
              <h3 className="stay-name">{hotel.name}</h3>
              <button
                className="stay-left-btn"
                onClick={() => handleLeft(hotel)}
              >
                Book Now
              </button>
            </div>
            <p className="stay-location">{hotel.location}</p>
            <p className="stay-description">{hotel.description}</p>
            <div className="stay-details">
              <div className="stay-price">
                <span>Price:</span>
                <p>₹{hotel.price.toLocaleString()}</p>
              </div>
              <div className="stay-rating">
                <span>Rating:</span>
                <p>{hotel.rating ? hotel.rating : 1}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div>
      <Pagination
        current={currentPage}
        onChange={handlePageChange}
        total={totalNumOfPages}
      />
      </div>
    </div>
  );
};

export default StayData;