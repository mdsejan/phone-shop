import PropTypes from "prop-types";
import Rating from "react-rating";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PhoneCard = ({ phone }) => {
  const { id, phone_name, image, brand_name, price, rating } = phone || {};

  const handleAddToFAvourite = () => {
    const addedFavouritesArray = [];

    const favouriteItems = JSON.parse(localStorage.getItem("favorites"));
    if (!favouriteItems) {
      addedFavouritesArray.push(phone);

      localStorage.setItem("favorites", JSON.stringify(addedFavouritesArray));

      toast.success("Phone Added To Favorite!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      const isExist = favouriteItems.find((phone) => phone.id === id);
      if (!isExist) {
        addedFavouritesArray.push(...favouriteItems, phone);

        localStorage.setItem("favorites", JSON.stringify(addedFavouritesArray));

        toast.success("Phone Added To Favorite!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.error("Alredy Added!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };
  return (
    <div className="max-w-screen-md mx-auto my-20 grid grid-cols-2 gap-12 bg-base-100 shadow-md p-12">
      <figure>
        <img className="w-80" src={image} alt="Movie" />
      </figure>
      <div className="flex flex-col justify-evenly">
        <h2 className="card-title">{phone_name}</h2>
        <Rating
          initialRating={rating}
          emptySymbol={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 100 100"
            >
              <polygon
                points="50,10 61.8,35.4 90,35.4 68.2,57.2 79.6,82.6 50,65.4 20.4,82.6 31.8,57.2 10,35.4 38.2,35.4"
                fill="none"
              />
            </svg>
          }
          fullSymbol={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 100 100"
            >
              <polygon
                points="50,10 61.8,35.4 90,35.4 68.2,57.2 79.6,82.6 50,65.4 20.4,82.6 31.8,57.2 10,35.4 38.2,35.4"
                fill="gold"
              />
            </svg>
          }
          readonly
        ></Rating>
        <p className="font-bold text-lg">Brand: {brand_name}</p>
        <p className="font-bold text-lg">Price: {price} $</p>
        <button
          onClick={handleAddToFAvourite}
          className="btn w-44 btn-neutral lowercase"
        >
          Add to Favourite
        </button>
      </div>
      <div>
        <ToastContainer />
      </div>
    </div>
  );
};

PhoneCard.propTypes = {
  phone: PropTypes.string,
};

export default PhoneCard;
