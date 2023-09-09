import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId } =
    resData?.info;
  // console.log(props);
  return (
    <div className="w-72 p-3 m-4 shadow-lg  bg-rose-100 hover:bg-rose-200 h-80 hover:border-black text-left">
      <img className="h-48 w-full" src={CDN_URL + cloudinaryImageId} alt="" />
      <h3 className="font-bold text-xl line-clamp-1">{name}</h3>
      <p className="line-clamp-1">{cuisines.join(", ")}</p>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default RestaurantCard;
