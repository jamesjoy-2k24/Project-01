import { useState } from "react";
import { formateDate } from "../../utils/formateDate";
import { FaStar } from "react-icons/fa";
import FeedbackForm from "./FeedbackForm";

const Feedback = () => {
const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-black mb-[30px]">
          All reviews (2k)
        </h4>

        <div className="flex justify-between gap-10 mb-[30px]">
          <div className="flex gap-3">
            <figure className="w-12 h-12">
              <img src= "https://randomuser.me/api/portraits/men/1.jpg" alt="user" className="w-full rounded-full" />
            </figure>

            <div>
              <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                John Doe
              </h5>
              <p className="text-[14px] leading-6 text-black">
                {formateDate(new Date())}
              </p>
              <p className="text__para mt-3 font-medium text-[15px] ">
                Good Player, very good. Highly recommended for the team.
              </p>
            </div>
          </div>

          <div className="flex gap-1">
            {[...Array(5).keys()].map((item, index) => (
              <FaStar
                key={index}
                className="text-primaryColor"
              />
            ))}
          </div>
        </div>
      </div>

            {!showFeedbackForm &&
      <div className="text-center">
        <button className="btn rounded-[30px]" onClick={()=> setShowFeedbackForm(true)} >Give Feedback</button>
      </div>}

      {showFeedbackForm && <FeedbackForm />}
    </div>
  );
};

export default Feedback;