import { useState } from "react";
import ReactDOM from "react-dom/client";
import RestaurantData from "./Restaurant.json";
import { useState } from "react";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://img.freepik.com/premium-vector/logo-design-restaurant-food-company_1253202-57700.jpg" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, sla, costForTwo } = resData.info;

  return (
    <div className="res-card">
      <img
        alt="res-logo"
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating} ⭐</h5>
      <h5>{sla?.deliveryTime} mins</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

const Body = () => {
  const restaurantList = RestaurantData.restaurants;
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurantList.map((restaurant, index) => {
          return <RestaurantCard key={index} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

//Using index as key - not recommended
export default function App() {
  const [items, setItems] = useState([
    { id: 1, value: "A" },
    { id: 2, value: "B" },
    { id: 3, value: "C" },
  ]);

  const addToStart = () => {
    setItems([{ id: Date.now(), value: "X" }, ...items]);
  };

  return (
    <div>
      <button onClick={addToStart}>Add X at Start</button>

      {items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </div>
  );
}

function Item({ item }) {
  const [text, setText] = useState("");

  return (
    <div style={{ marginBottom: 8 }}>
      <span>{item.value}: </span>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: 100 }}
      />
    </div>
  );
}

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
