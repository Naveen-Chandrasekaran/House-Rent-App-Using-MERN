import "../styles/List.scss";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import ListingCard from "../components/ListingCard";
import Footer from "../components/Footer"

const WishList = () => {
  const wishList = useSelector((state) => state.user.wishList);

  return (
    <>
      <Navbar />
      <h1 className="title-list">Your Wish List</h1>
      <div className="list">
<<<<<<< HEAD
  {wishList?.map(
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
      booking = false,
    }) => (
      <ListingCard
        key={_id} // Add unique key prop
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

=======
        {wishList?.map(
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
            booking = false,
          }) => (
            <ListingCard
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
>>>>>>> f7a2dd412463f7549df09b33432ba1bedd0c4165
      <Footer />
    </>
  );
};

export default WishList;
