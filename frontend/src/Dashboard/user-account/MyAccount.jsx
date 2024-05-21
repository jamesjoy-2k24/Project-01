import{ useContext, useState } from "react";
import { authContext } from "../../context/authContext";
import MyBookings from "./MyBookings";
import Profile from "./Profile";
import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import Loading from "../../components/Loader/Loading"; 
import Error from "../../components/Error/Error";

const MyAccount = () => {
  const { dispatch } = useContext(authContext);
  const [tab, setTab] = useState("bookings");

  const { data: userData, loading, error } = useFetchData(
    `${BASE_URL}/users/profile/me`,
  );

  // if (loading) return <div className="text-center p-10"><Loading /></div>;
  // if (error) return <div className="text-center p-10"><Error /></div>;

  console.log(userData, "userdata");
 
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <section>
          <div className="max-w-[1170px] mx-auto px-5">

            {loading && <Loading />}

            {error && <Error errMessage={error}/>}

            {!loading && !error && (
      <div className="grid md:grid-cols-3 gap-10">
        <div className="pb-[50px] pc-[30px] p-5 rounded-md shadow-panelShadow">
          <div className="flex items-center justify-center">
            <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">
              <img
                src={userData?.photo}
                alt="user"
                className="w-full h-full rounded-full object-cover"
              />
            </figure>
          </div>

          <div className="text-center mt-4">
            <h3 className="text-[18px] leading-[30px] text-black font-bold">
              {userData?.name || "User"}
            </h3>
            <p className="text-gray-800 text-[16px] leading-6 font-medium">
              {userData?.email || "user@gmail.com"}
            </p>
            <p className="text-gray-800 text-[16px] leading-6 font-medium">
                {userData?.role || "Sponsor"}
        
            </p>

            <p className="text-gray-800 text-[15px] leading-6 font-medium">
              I am live in {" "}                {userData?.place}

            </p>
          </div>

          <div className="mt-[30px] md:mt-[80px]">
            <button
              className="btn bg-black mb-[2rem] w-full p-3 text-[16px] leading-7 rounded-md"
              onClick={handleLogout}>
              Logout
            </button>
            <button className="btn w-full p-3 text-[16px] leading-7 rounded-md">
              Delete Account
            </button>
          </div>
        </div>

        <div className="md:col-span-2 md:px-[30px] py-8">
          <div>
            <button
              onClick={() => setTab("bookings")}
              className={`${
                tab === "bookings" && "bg-primaryColor text-white mr-5"
              } p-2 px-5 mr-5 rounded-md text-black font-semibold text-[16px] leading-7
               border border-solid border-primaryColor hover:bg-primaryColor hover:text-white`}>
              My Bookings
            </button>
            <button
              onClick={() => setTab("settings")}
              className={`${
                tab === "settings" && "bg-primaryColor text-white"
              } p-2 px-5 rounded-md text-black font-semibold text-[16px] leading-7
               border border-solid border-primaryColor hover:bg-primaryColor hover:text-white`}>
              Profile Settings
            </button>
          </div>

          {tab === "bookings" && <MyBookings />}
          {tab === "settings" && <Profile user = {userData} />}
        </div>
      </div>
      )}


    </div>
    </section>
  );
};

export default MyAccount;
