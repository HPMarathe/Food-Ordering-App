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
      "https://hpmarathe.github.io/swiggy-api/Reslist.json"
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
      <div className="text-center p-2 m-2 ">
        <h1 className="font-bold "> You are offline</h1>
        <p className="font-medium">Please check your internet connection</p>
      </div>
    );

  return listOfRestaurants?.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="p-5 bg-pink-50 text-center  ">
      <div className="flex justify-between p-4 mx-6">
        <div className="">
          <input
            type="text"
            className="focus:bg-rose-200 p-2 m-2 w-96 border border-gray-400 rounded-md"
            placeholder="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          {/* <div className="search m-4 p-4 flex items-center">
            <label>UserName : </label>
            <input
              className="border border-black p-2"
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div> */}
          <button
            // className="p-2 m-2 bg-red-500 hover:bg-red-800 text-white rounded-md "
            className="border-2 border-red-500 bg-red-500 text-white p-2 m-2 rounded-md hover:bg-transparent hover:text-red-800 font-semibold "
            onClick={() => {
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
  );
};

export default Body;
