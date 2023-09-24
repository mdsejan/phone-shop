import PropTypes from "prop-types";

import PhonesCard from "./PhonesCard";

const Phones = ({ phones }) => {
  console.log(phones);
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-center py-16">
          All Categories Phones
        </h1>
      </div>

      <div className="grid grid-cols-4 gap-8">
        {phones?.map((phone) => (
          <PhonesCard key={phone.id} phone={phone}></PhonesCard>
        ))}
      </div>
    </div>
  );
};

Phones.propTypes = {
  phones: PropTypes.string,
};

export default Phones;
