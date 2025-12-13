import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, sla, costForTwo } = resData.info;

  return (
    <div className="res-card">
      <img
        alt="res-logo"
        className="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating} ⭐</h5>
      <h5>{sla?.deliveryTime} mins</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export default RestaurantCard;
