/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const PlayerCard = ({ player }) => {
  return (
    <div className="w-full max-w-[320px] mx-auto bg-white shadow-lg hover:shadow-primaryColor hover:shadow-sm rounded-lg overflow-hidden transform transition-transform hover:scale-105 duration-300">
      <img
        className="w-full h-48 object-cover text-center mt-[1rem]"
        src={player.image}
        alt={`${player.name}`}
      />

      <div className="p-6 h-64 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{player.name}</h2>
          <p className="text-gray-700 mt-2">{player.position}</p>
          <p className="text-gray-700 mt-2">{player.experience}</p>
          <p className="text-gray-700 mt-2">{player.skills[0]}</p>
          
        </div>
        <div className="flex items-center mt-4">
          <div className="flex items-center">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-gray-400" />
          </div>
          <span className="ml-2 text-gray-600">{player.rating}</span>
        </div>
        <div className="mt-4 flex justify-center items-center">
          <span className="text-xl font-semibold text-gray-900">
            {player.team}
          </span>
          <Link to={`/player/${player.id}`}>
            <button className="border border-solid border-primaryColor text-black mx-auto hover:text-white hover:bg-primaryColor font-bold py-2 px-4 rounded transition-colors duration-300">
              View Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
