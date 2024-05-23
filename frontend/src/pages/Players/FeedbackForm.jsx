import { toast } from "react-toastify";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, token } from "../../config";
import { FaStar, FaSmile } from "react-icons/fa";
import HashLoader from "react-spinners/HashLoader";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!rating || !reviewText) {
        setLoading(false);
        return toast.error("Please select a rating and provide a review");
      }

      const res = await fetch(`${BASE_URL}/players/${id}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          rating,
          reviewText,
        }),
      });

      // Log the response and its content type
      // console.log("Response:", res);
      // console.log("Content-Type:", res.headers.get("content-type"));

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      } else {
        toast.success("Feedback submitted successfully");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h3 className="text-black text-[16px] leading-6 font-[600] mb-4 mt-0">
          How was your experience?
        </h3>

        <div className="flex">
          {[...Array(5).keys()].map((_, index) => {
            index += 1;
            return (
              <button
                key={index}
                type="button"
                className={`${
                  index <= ((rating && hover) || hover)
                    ? "text-yellow-500"
                    : "text-gray-400"
                } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}>
                <span>
                  <FaStar />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-[30px]">
        <h3 className="text-black text-[16px] leading-6 font-[600] mb-4 mt-0">
          Share your thoughts & Suggestions!
        </h3>

        <textarea
          rows="5"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          className="border border-solid border-black w-full focus:outline outline-primaryColor px-4 py-3 rounded-md"
          placeholder="Enter your reviewText"></textarea>
      </div>

      <button type="submit" className="btn mt-[30px] flex items-center">
        {loading ? <HashLoader color="#fff" size={25} /> : "Submit Feedback"}
        <FaSmile className="text-white ml-2 text-[20px]" />
      </button>
    </form>
  );
};

export default FeedbackForm;
