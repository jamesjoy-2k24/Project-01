import { useState } from "react";
import { FaStar, FaSmile } from "react-icons/fa";

const FeedbackForm = () => {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [feedback, setFeedback] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(rating, feedback);
    };

    // API Call

    return (
        <form action="">
            <div>
                <h3 className="text-black text-[16px] leading-6 font-[600] mb-4 mt-0">
                    How was your experience?
                </h3>
                
                <div>
                    {[...Array(5).keys()].map((_,index) => {
                        index += 1;
                        return (
                            <button 
                            key={index}
                                type="button"
                                className={`${
                                    index <= ((rating && hover) || hover )
                                    ? "text-primaryColor"
                                    : "text-gray-400"
                                } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                                onClick={() => setRating(index)}
                                onMouseEnter={() => setHover(index)}
                                onMouseLeave={() => setHover(rating)}
                                onDoubleClick={()=> {
                                    setHover(0);
                                    setRating(0)
                                }}>
                                    <span>
                                        <FaStar />
                                    </span>
                                </button>
                        )
                    })}
                </div>
            </div>

            <div className="mt-[30px]">
            <h3 className="text-black text-[16px] leading-6 font-[600] mb-4 mt-0">
                   Share your thoughts & Suggestions !
                </h3>

                <textarea rows="5" className="border border-solid border-black w-full focus:outline outline-primaryColor px-4
                py-3 rounded-md"
                placeholder="Enter your feedback"
                onChange={e=> setFeedback(e.target.value)}></textarea>
            </div>

            <button type="submit" onClick={handleSubmit} className="btn mt-[30px] flex items-center">Submit 
                <FaSmile className="text-white ml-2 text-[20px]" />
            </button>
        </form>
    )
}

export default FeedbackForm