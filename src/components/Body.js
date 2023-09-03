import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  //useeffect will get called after the rendering is complete.
  useEffect(() => {
    fetchData();
  }, []);

  //creating a function which will fetch data from API.
  //fetch is an API provided by browser which give apromise.Because of this we have to use async await.we can also use .then.
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1370256&lng=72.8549697&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    // loads  --> Rendering  --> calling API(after 500 ms will get response) --> Rerender the result from live API.
    //setListOfRestaurant is responsible for Rerender the result from live API.
    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    //here we are setting setFilteredRestaurants same as setListOfRestaurants because in the first cycle we are rendering FilteredRestaurants. so default value should be all restaurants.
    setFilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  console.log(" Body rendered");
  //Using ternary operator
  return listOfRestaurants?.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //writing logic for filteredRestaurant - always filtering from all restaurants
              //using .inclues so if you search for one word it will give results for that word.
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top rated restaurant
        </button>{" "}
      </div>

      <div className="res-container">
        {/* map over filteredRestaurants variable as first time in the variable both filteredRestaurants & listOfRestaurants are same but if we filtered it for any result then it should render the filtered results*/}
        {filteredRestaurants?.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
