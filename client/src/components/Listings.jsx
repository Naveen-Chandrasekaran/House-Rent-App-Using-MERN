<<<<<<< HEAD
import { useEffect, useState, useCallback } from "react";
=======
import { useEffect, useState } from "react";
>>>>>>> f7a2dd412463f7549df09b33432ba1bedd0c4165
import { categories } from "../data";
import "../styles/Listings.scss";
import ListingCard from "./ListingCard";
import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import { setListings } from "../redux/state";

const Listings = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
<<<<<<< HEAD
=======

>>>>>>> f7a2dd412463f7549df09b33432ba1bedd0c4165
  const [selectedCategory, setSelectedCategory] = useState("All");

  const listings = useSelector((state) => state.listings);

<<<<<<< HEAD
  const getFeedListings = useCallback(async () => {
=======
  const getFeedListings = async () => {
>>>>>>> f7a2dd412463f7549df09b33432ba1bedd0c4165
    try {
      const response = await fetch(
        selectedCategory !== "All"
          ? `http://localhost:3001/properties?category=${selectedCategory}`
          : "http://localhost:3001/properties",
        {
          method: "GET",
        }
      );

      const data = await response.json();
      dispatch(setListings({ listings: data }));
      setLoading(false);
    } catch (err) {
      console.log("Fetch Listings Failed", err.message);
    }
<<<<<<< HEAD
  }, [selectedCategory, dispatch]);

  useEffect(() => {
    getFeedListings();
  }, [getFeedListings]);
=======
  };

  useEffect(() => {
    getFeedListings();
  }, [selectedCategory]);
>>>>>>> f7a2dd412463f7549df09b33432ba1bedd0c4165

  return (
    <>
      <div className="category-list">
        {categories?.map((category, index) => (
          <div
<<<<<<< HEAD
            className={`category ${
              category.label === selectedCategory ? "selected" : ""
            }`}
=======
            className={`category ${category.label === selectedCategory ? "selected" : ""}`}
>>>>>>> f7a2dd412463f7549df09b33432ba1bedd0c4165
            key={index}
            onClick={() => setSelectedCategory(category.label)}
          >
            <div className="category_icon">{category.icon}</div>
            <p>{category.label}</p>
          </div>
        ))}
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div className="listings">
          {listings.map(
            ({
              _id,
              creator,
              listingPhotoPaths,
              city,
              province,
              country,
              category,
              type,
              price,
<<<<<<< HEAD
              booking = false,
            }) => (
              <ListingCard
                key={_id}
=======
              booking=false
            }) => (
              <ListingCard
>>>>>>> f7a2dd412463f7549df09b33432ba1bedd0c4165
                listingId={_id}
                creator={creator}
                listingPhotoPaths={listingPhotoPaths}
                city={city}
                province={province}
                country={country}
                category={category}
                type={type}
                price={price}
                booking={booking}
              />
            )
          )}
        </div>
      )}
    </>
  );
};

export default Listings;
