import { useState } from "react";
import Profile from "../../assets/images/profile.jpg";
import { FaStar } from "react-icons/fa";
import PlayerAbout from "./PlayerAbout";
import Feedback from "./Feedback";
import SidePanel from "./SidePanel";

const PlayerDetails = () => {
  const [tab, setTab] = useState("about");

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[30px]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure className="max-w-[200px] max-h-[200px]">
                <img
                  src={Profile}
                  alt="profile"
                  className="w-full rounded-[10px]"
                />
              </figure>

              <div className="w-full mt-[6rem]">
                <span className="bg-grayColor text-black py-2 px-3 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-5 font-semibold rounded">
                  Soccer
                </span>
                <h2 className="heading text-black text-[22px] leading-9 mt-[2rem] font-bold">
                  Cristiano Ronaldo
                </h2>
                <div className="flex items-center gap-[6px]">
                  <span
                    className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7
                  text-black font-semibold"
                  >
                    <FaStar className="text-yellowColor" /> 4.9
                  </span>
                  <span
                    className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400]
                  text-grayColor"
                  >
                    5.5k Ratings
                  </span>
                </div>

                <p className="text__para text-[14px] leading-6 md:text-[15px] lg:max-w-[380px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  ljjj Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </p>
              </div>
            </div>

            <div className="mt-[50px] border-b border-solid border-gray-400">
              <button
                onClick={() => setTab("about")}
                className={`${
                  tab === "about"
                    ? "text-primaryColor border-b-2 border-solid border-primaryColor"
                    : "text-black"
                } py-2 px-5 mr-5 text-[16px] leading-7 text-black font-semibold`}
              >
                About
              </button>

              <button
                onClick={() => setTab("feedback")}
                className={` ${
                  tab === "feedback"
                    ? "text-primaryColor border-b-2 border-solid border-primaryColor"
                    : "text-black"
                } py-2 px-5 mr-5 text-[16px] leading-7 text-black font-semibold`}
              >
                Feedback
              </button>
            </div>

            <div className="mt-[50px]">
              {tab === "about" && <PlayerAbout />}
              {tab === "feedback" && <Feedback />}
            </div>
          </div>

          <div>
            <SidePanel />
          </div>

        </div>
      </div>
    </section>
  );
};

export default PlayerDetails;
