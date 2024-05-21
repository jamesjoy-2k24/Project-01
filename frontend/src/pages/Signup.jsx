import SignpImg from "../assets/images/signup.png";
// import profile1 from "../assets/images/profile1.jpg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLock, FaUnlock } from "react-icons/fa";
import HashLoader from "react-spinners/ClockLoader.js";
import uploadImage from "../utils/uploadCloudinary.js";
// import BASE_URL from "../../config.js";
import { toast } from "react-toastify";
// import { FaEye } from "react-icons/fa";
// import { FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [previewURL, setPreviewURL] = useState();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    photo: selectedFile,
    // gender : "",
    role: "player",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];

    const data = await uploadImage(file);

    setPreviewURL(data.url);
    setSelectedFile(data.url);
    setFormData({
      ...formData,
      photo: data.url,
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('http://localhost:8000/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const { message } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }

      setLoading(false);
      toast.success('Successfully registered!');
      navigate('/login');
    } catch (error) {
      setLoading(false);
      toast.error(error.message, "Some thing went wrong");
    }
  };

  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* =========Signup Image======== */}
          <div className="hidden lg:flex items-center rounded-l-lg">
            <figure className="rounded-l-lg">
              <img
                src={SignpImg}
                alt="signup"
                className="w-full h-full rounded-l-lg"
              />
            </figure>
          </div>

          {/* =========Signup Form======== */}
          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-black text-[22px] leading-9 font-bold mb-10 flex items-center">
              Create an{" "}
              <span className="text-primaryColor ml-2"> account </span>
            </h3>

            <form onSubmit={submitHandler}>
              <div className="mb-[2rem] flex items-center gap-5">
                <FaUser className="text-primaryColor text-[20px]" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className="w-full py-3 px-5 border-b border-solid border-gray-500 bg-[#FFFCC8] focus:outline-none focus:border-b-primaryColor text-[18px] leading-7 text-black placeholder:text-grayColor rounded-md"
                  required
                />
              </div>
              <div className="mb-[2rem] flex items-center gap-5">
                <FaEnvelope className="text-primaryColor text-[20px]" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter Your Email"
                  className="w-full py-3 px-5 border-b border-solid border-gray-500 bg-[#FFFCC8] focus:outline-none focus:border-b-primaryColor text-[18px] leading-7 text-black placeholder:text-grayColor rounded-md"
                  required
                />
              </div>
              <div className="mb-[2rem] flex items-center gap-5">
                <FaLock className="text-primaryColor text-[20px]" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter Your Password"
                  className="w-full py-3 px-5 border-b border-solid border-gray-500 bg-[#FFFCC8] focus:outline-none focus:border-b-primaryColor text-[18px] leading-7 text-black placeholder:text-grayColor rounded-md "
                  required
                />
              </div>
              <div className="mb-[2rem] flex items-center gap-5">
                <FaUnlock className="text-primaryColor text-[20px]" />
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm Your Password"
                  className="w-full py-3 px-5 border-b border-solid border-gray-500 bg-[#FFFCC8] focus:outline-none focus:border-b-primaryColor text-[18px] leading-7 text-black placeholder:text-grayColor rounded-md"
                  required
                />
              </div>

              <div className="mb-5 flex items-center justify-between">
                <label className="text-primaryColor font-bold text-[16px] leading-7">
                  Are you a :
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="ml-3 text-gray-500 bg-gray-50 font-semibold text-[15px] leading-7 p-4
                py-2 rounded-md focus:outline-none">
                    <option value="sponsor">Sponsor</option>
                    <option value="player">Player</option>
                  </select>
                </label>
                <label className="text-primaryColor font-bold text-[16px] leading-7">
                Gender :
                <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="ml-3 text-gray-500 bg-gray-50 font-semibold text-[15px] leading-7 p-4
                py-2 rounded-md focus:outline-none">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </label>
              </div>

              <div className="mb-5 flex items-center gap-3">
                {selectedFile && (
                  <figure
                    className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor
              flex items-center justify-center">
                    <img
                      src={previewURL}
                      alt="profile"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </figure>
                )}

                <div className="relative w-[130px] h-[50px]">
                  <input
                    type="file"
                    value={formData.photo}
                    name="photo"
                    id="customFile"
                    onChange={handleFileInputChange}
                    accept="image/*"
                    className="w-full h-full cursor-pointer opacity-0 left-0 right-0 absolute"
                  />

                  <label
                    htmlFor="customFile"
                    className="absolute top-0 w-full h-full
                flex items-center px-[0.7rem] py-[0.3rem] text-[18px] leading-6 overflow-hidden
                bg-gray-200  text-black font-semibold rounded-lg truncate cursor-pointer">
                    Upload photo
                  </label>
                </div>
              </div>

              <div className="mt-7">
                <button
                disabled={loading && true}
                  type="submit"
                  className="w-full bg-primaryColor text-white px-4 py-3 text-[22px] font-semibold rounded-lg">
                 {loading ? <HashLoader color="white" /> : ' Sign Up'}
                </button>
              </div>

              <p className="mt-5 text-gray-500 text-center">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-primaryColor font-medium ml-1">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
