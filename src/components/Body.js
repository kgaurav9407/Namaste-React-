import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // const [listOfRestaurants, setListOfRestaurants] = useState(restaurants);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchdata();
    // console.log("Body Component Mounted");
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3916498&lng=78.4124191&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // console.log(data);

    // Because fetch() returns a Promise that resolves to a Response object, and Response.json() also returns a Promise that resolves to the parsed JSON. So you need to await twice: once to get the Response, and again to get the parsed body.

    // response (what you named data) is a Response object — an object with headers/status and a readable body stream. response.json() reads that body asynchronously and returns a Promise, so you need to await it.
    const json = await data.json();
    setListOfRestaurants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    // console.log(
    //   json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    // );
  };
  console.log("Body Rendered");
  //conditional rendering
  return listOfRestaurants.length === 0 ? (
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
              //Here we are using listofRestaurants instead of filteredRestaurants to search from the original data every time, so that we don't miss any data while searching multiple times.
              const filteredRestaurant = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = filteredRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant, index) => {
          return <RestaurantCard key={index} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
