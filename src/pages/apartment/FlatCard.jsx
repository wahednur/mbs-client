import { Link } from "react-router-dom";
import AgreementBtn from "../agreement/AgreementBtn";

const FlatCard = ({ flat }) => {
  const apartment = flat?.apartment;
  return (
    <div className="border border-primary rounded-lg overflow-hidden">
      <img
        className="aspect-video object-cover object-center"
        src={flat?.image}
        alt=""
      />
      <div className="flex flex-col gap-3 mt-5 p-5">
        <div className="flex flex-col space-y-3">
          <p className=" h-10">
            Apartment Name: <span className="font-bold">{apartment?.name}</span>
          </p>
          <p>
            Rent:{" "}
            <span className="font-black text-2xl text-primary">
              {flat?.rent} BDT
            </span>
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p>
            Floor: <span className="font-bold">{flat?.floor}</span>
          </p>
          <p>
            Block: <span className="font-bold">{flat?.block}</span>
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p>
            Bed: <span className="font-bold">{flat?.bed}</span>
          </p>
          <p>
            Bathroom: <span className="font-bold">{flat?.bathroom}</span>
          </p>
        </div>
        <div className="flex justify-between items-center">
          <Link
            className="btn bg-primary rounded-lg text-white duration-300 hover:bg-secondary"
            to={`/apertment/${flat?._id}`}
          >
            Details
          </Link>
          <AgreementBtn id={flat?._id} link={flat?._id} />
        </div>
      </div>
    </div>
  );
};

FlatCard.propTypes = {};

export default FlatCard;
