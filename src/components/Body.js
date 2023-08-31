import { useState } from "react";
import resList from "../utils/mockdata";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  //usestate is same as defining the local variable in react.

  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  // Basically here we are destructuring an array.
  // const arr = useState(resList);
  // const [listOfRestaurants, setListOfRestaurants] = arr;

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top rated restaurant
        </button>{" "}
      </div>
      <div className="res-container">
        {/* map over listOfRestaurants variable because it is getting tracked by react & will update the value after rerendering */}
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
