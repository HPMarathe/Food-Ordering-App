import { useContext, useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  // const { loggedInUser, setUserName } = useContext(UserContext);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://hpmarathe.github.io/swiggy-api/Reslist.json"
    );

    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlinesttatus = useOnlineStatus();

  if (onlinesttatus === false)
    return (
      <div className="text-center p-2 m-2 bg-pink-50  min-h-screen">
        <h1 className="font-bold "> You are offline</h1>
        <p className="font-medium">Please check your internet connection</p>
      </div>
    );

  const searchData = (searchText) => {
    const filteredRestaurant = listOfRestaurants.filter((res) =>
      res?.info?.name?.toLowerCase().includes(searchText?.toLowerCase())
    );
    setFilteredRestaurants(filteredRestaurant);
  };

  return listOfRestaurants?.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-pink-50 text-center min-h-screen">
      <div className="p-5 w-full m-auto">
        <div className="flex justify-between p-4 mx-6 ">
          <div className="">
            <input
              type="text"
              className="focus:bg-rose-200 p-2 m-2 w-96 border border-gray-400 rounded-md "
              placeholder="Search for restaurants and food
              "
              value={searchText}
              onChange={(e) => {
                // update the state variable searchText when we typing in input box
                setSearchText(e.target.value);
                // when user will enter the data, it automatically called searchData function so it work same as when you click on Search button
                searchData(e.target.value);
              }}
            />
            <button
              className="border-2 border-red-500 bg-red-500 text-white p-2 m-2 rounded-md hover:bg-transparent hover:text-red-800 font-semibold "
              onClick={() => {
                searchData(searchText);
              }}
            >
              Search
            </button>
          </div>
          <button
            className="border-2 border-red-500 bg-red-500 text-white p-2 m-2 rounded-md hover:bg-transparent hover:text-red-800 font-semibold"
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

        <div className="flex flex-wrap justify-center bg-pink-50">
          {/* map over filteredRestaurants variable as first time in the variable both filteredRestaurants & listOfRestaurants are same but if we filtered it for any result then it should render the filtered results*/}
          {filteredRestaurants?.map((restaurant) => (
            <Link
              key={restaurant?.info?.id}
              to={"/restaurants/" + restaurant?.info?.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
