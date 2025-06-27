import PropTypes from "prop-types";

const ApartmentInfo = ({ apart }) => {
  return (
    <div className="w-full mt-5 flex flex-col space-y-3 bg-primary/30 p-5">
      <p>
        <span className="font-bold">Apartment name:</span> {apart?.name}
      </p>
      <p className="font-black t">Address:</p>
      <p>
        <span className="font-bold">Area </span> {apart?.area}
      </p>
      <p>
        <span className="font-bold">Apartment No </span> {apart?.appartmentNo}
      </p>
      <p>
        <span className="font-bold">Road No </span> {apart?.road}
      </p>
      <p>
        <span className="font-bold">City Corporation </span> {apart?.cityCorp}
      </p>
      <p>
        <span className="font-bold">State </span> {apart?.state}
      </p>
      <p className="flex flex-col">
        <span className="font-bold">Description</span>
        <span>{apart?.description}</span>
      </p>
      <p className="flex gap-5 items-center">
        <p>
          <span>Total Flat: </span> {apart?.totalFlats}
        </p>
        <p className="bg-success px-4 py-3">
          <span className="font-bold text-white">Availabe Flat: </span>{" "}
          <span className="text-2xl font-black text-white">
            {" "}
            {apart?.totalFlats}
          </span>
        </p>
      </p>
    </div>
  );
};

ApartmentInfo.propTypes = {
  apart: PropTypes.object,
};

export default ApartmentInfo;
