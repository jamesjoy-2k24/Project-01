/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "./PlayerCard.css";

const PlayerCard = ({ player }) => {
  const { photo, name, age, sports, averageRating, reviews, _id } = player;

  return (
    <div>
      <div className="card w-[18em] h-[25em] bg-[#171717] flex flex-col hover:transform shadow-panelShadow hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="w-[7em] h-[7em] rounded-[20px] border-2 border-primaryColor m-auto">
          <img
            src={photo}
            alt={name}
            className="w-full h-full object-cover rounded-[20px]"
          />
        </div>
        <div>
          <span className="text-white font-bold text-center block text-[1.2rem]">
            {name}
          </span>
          {/* <span className="text-gray-300 font-bold text-center block text-[0.9rem]">
          {place}
        </span> */}
          <span className="text-gray-300 font-bold text-center block text-[0.9rem] mb-2">
            Age: {age}
          </span>
        </div>
        <div className="mt-1">
          <p className="info">
            {sports.map((sport, index) => (
              <span
                key={index}
                className="bg-[#363636] rounded-2xl p-[7px] text-white font-bold ml-2 mr-1">
                {index > 0 && " "} {sport}{" "}
              </span>
            ))}
          </p>
        </div>
        <div>
          <div className="flex justify-center items-center mt-2 ">
            <FaStar className="text-yellow-400" />
            <span className="text-white font-bold text-center block text-[0.8rem] ml-2">
              {averageRating} / 5{" "}
              <span className="ml-2">({reviews.length})</span>
            </span>
          </div>
          <Link to={`/players/${_id}`}>
            <button className="mb-4 mt-4 py-2 px-4 block m-auto rounded-[20px] border-none font-bold bg-white text-black hover:bg-primaryColor hover:text-white hover:cursor-pointer transition-all hover:duration-200 ease-in-out">
              View Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
