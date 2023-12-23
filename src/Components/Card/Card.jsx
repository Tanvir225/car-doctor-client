import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ property }) => {
  return (
    <div className="mt-5">
      <div className="card bg-base-100 border-2 shadow-xl">
        <figure className="px-5 pt-5 h-[250px]">
          <img
            src={property.img}
            alt={`${property.title} image`}
            className="rounded-xl w-full h-full object-cover"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{property.title}</h2>
          <p></p>
          <div className="flex items-center">
            <p className="text-[#FF3811] text-lg font-bold">
              Price: {property.price} $
            </p>
            <Link to={`/${property._id}`}>
              <FaArrowAltCircleRight className="text-xl text-[#FF3811]"></FaArrowAltCircleRight>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
