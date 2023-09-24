import { useEffect, useState } from "react";
import PhonesCard from "../../components/Phones/PhonesCard";

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);
  const [noFound, setNoFound] = useState("");

  const [isShow, setIsShow] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const favouriteItems = JSON.parse(localStorage.getItem("favorites"));
    if (favouriteItems) {
      setFavourites(favouriteItems);

      const total = favouriteItems.reduce(
        (prevalue, currentItem) => prevalue + currentItem.price,
        0
      );
      setTotalPrice(total);
    } else {
      setNoFound("No Data Found");
    }
  }, []);

  const handleFavDelete = () => {
    localStorage.clear();
    setFavourites([]);
    setNoFound("No Data Found");
  };

  return (
    <div className="max-w-screen-2xl mx-auto">
      {noFound ? (
        <p className="h-[85vh] flex justify-center items-center font-bold text-5xl">
          {noFound}
        </p>
      ) : (
        <div>
          <div className="text-center py-8">
            <h1 className="text-4xl font-bold">
              Favourite Phones Total Price:
              <span className="text-3xl text-slate-600"> {totalPrice} $</span>
            </h1>

            {favourites.length > 0 && (
              <button
                onClick={handleFavDelete}
                className="btn bg-rose-800 text-white hover:bg-black mt-10"
              >
                Delete All Favourites
              </button>
            )}
          </div>
          <div className="grid grid-cols-4 gap-8 py-16">
            {isShow
              ? favourites.map((phone) => (
                  <PhonesCard key={phone.id} phone={phone}></PhonesCard>
                ))
              : favourites
                  .slice(0, 3)
                  .map((phone) => (
                    <PhonesCard key={phone.id} phone={phone}></PhonesCard>
                  ))}
          </div>

          {favourites.length > 3 && (
            <div className="flex justify-center items-center pb-8">
              <button
                onClick={() => setIsShow(!isShow)}
                className="btn bg-emerald-800 text-white hover:bg-black mt-10"
              >
                {isShow ? "Show Less" : "Show All"}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Favourites;
