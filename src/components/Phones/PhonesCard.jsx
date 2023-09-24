import PropTypes from "prop-types";
import Rating from "react-rating";
import { NavLink } from "react-router-dom";

const PhonesCard = ({ phone }) => {
  const { id, image, phone_name, brand_name, price, rating } = phone || {};
  return (
    <div className="card bg-base-100 shadow-md">
      <figure>
        <img className=" h-[250px] object-cover" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
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
        <h2 className="text-xl text-amber-600">{brand_name}</h2>
        <p className="font-bold text-red-900">{price} $</p>
        <div className="card-actions justify-start mt-5">
          <NavLink to={`/phones/${id}`} state={phone_name}>
            <button className="btn btn-neutral">Details</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
PhonesCard.propTypes = {
  phone: PropTypes.string,
};

export default PhonesCard;
