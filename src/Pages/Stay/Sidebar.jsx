import PriceSlider from "./PriceSlider";

export const Sidebar = ({ onPriceRangeChange, onSortChange }) => {
  const handlePriceChange = (e) => {
    const selectedOrder = e.target.value;
    onSortChange("price", selectedOrder);
  };
 
  const handleRatingChange = (e) => {
    const selectedOrder = e.target.value;
    onSortChange("rating", selectedOrder);
  };

  return (
    <div>
      <h3>Filter By Price</h3>
      <div onChange={handlePriceChange}>
        <input type="radio" name="price" value={"asc"} />
        <label>Low to High</label>
        <br />
        <input type="radio" name="price" value={"desc"} />
        <label>High to Low</label>
      </div>
      <br />
      <br />
      <h3>Filter By Rating</h3>
      <div onChange={handleRatingChange}>
        <input type="radio" name="rating" value={"asc"} />
        <label>Low to High</label>
        <br />
        <input type="radio" name="rating" value={"desc"} />
        <label>High to Low</label>
      </div>
      <br/>
      <br/>
      <br/>
      <div>
        <PriceSlider onPriceRangeChange={onPriceRangeChange} />
      </div>
    </div>
  );
};

export default Sidebar;