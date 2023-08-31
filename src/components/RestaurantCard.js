import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId } =
    resData?.info;
  // console.log(props);
  return (
    <div className="res-card" style={{ backgroundColor: "lightgray" }}>
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt="" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default RestaurantCard;
