/* eslint-disable react/prop-types */
import { useState } from "react";
import { formateDate } from "../../utils/formateDate";
import { FaStar } from "react-icons/fa";
import FeedbackForm from "./FeedbackForm";

const Feedback = ({ reviews }) => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-black mb-[30px]">
          {/* Display all reviwes lenthg */}
          All Reviews ({reviews?.length} {reviews?.length > 1 ? "" : "Review"})
        </h4>

        {reviews?.map((review, index) => (
          <div key={index} className="flex justify-between gap-10 mb-[30px]">
            <div className="flex gap-3">
              <figure className="w-12 h-12">
                <img
                  src={review?.user?.photo}
                  alt="user"
                  className="w-full rounded-full"
                />
              </figure>

              <div>
                <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                  {review?.sponsor?.name}
                </h5>
                <p className="text-[14px] leading-6 text-black">
                  {formateDate(review?.createdAt)}
                </p>
                <p className="text__para mt-3 font-medium text-[15px] ">
                  {review?.reviewText}
                </p>
              </div>
            </div>

            <div className="flex gap-1">
              {[...Array(review?.ratings).keys()].map((item, index) => (
                <FaStar key={index} className="text-yellow-500" />
              ))}
            </div>
          </div>
        ))}
      </div>

      {!showFeedbackForm && (
        <div className="text-center">
          <button
            className="btn rounded-[30px]"
            onClick={() => setShowFeedbackForm(true)}>
            Give Feedback
          </button>
        </div>
      )}

      {showFeedbackForm && <FeedbackForm />}
    </div>
  );
};

export default Feedback;
