// import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
// import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  // const { loggedInUser } = useContext(UserContext);
  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId } =
    resData?.info;
  // console.log(props);
  return (
    <div className="w-72 p-3 m-4 shadow-lg rounded-xl bg-rose-100 hover:bg-rose-200 h-80 text-left hover:border border-red-300 ">
      <img
        className="h-48 w-full  rounded-xl"
        src={CDN_URL + cloudinaryImageId}
        alt=""
      />
      <h3 className="font-bold text-xl line-clamp-1">{name}</h3>
      <p className="line-clamp-1">{cuisines.join(", ")}</p>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
      {/* <h4>User: {loggedInUser}</h4> */}
    </div>
  );
};

export default RestaurantCard;
