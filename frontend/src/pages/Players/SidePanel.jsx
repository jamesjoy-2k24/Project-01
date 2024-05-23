import { FaDotCircle } from "react-icons/fa";
import { FaBook } from "react-icons/fa";

const sidePanel = ({ playerId, price, available }) => {
  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text__para mt-0 font-semibold">Price</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-black font-bold">
          LKR {price}
        </span>
      </div>

      <div className="flex items-center justify-between mt-5">
        <p className="text__para mt-0 font-semibold">
          {available ? "Available" : "Not Available"}
        </p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-black font-bold">
          <FaDotCircle className="text-green-600" />
        </span>
      </div>

      <button className="flex items-center justify-center gap-3 mt-5 w-full bg-primaryColor py-3 text-white font-semibold rounded-md">
        <FaBook className="inline-block mr-2" />
        Book Now
      </button>
    </div>
  );
};

export default sidePanel;
