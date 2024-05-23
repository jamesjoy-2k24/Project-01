import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import PlayerCard from "../../components/Players/PlayerCard";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";

const MyBookings = () => {
  const {
    data: appointmentsData = [], // Provide a default value of an empty array
    loading,
    error,
  } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`);

  // Log the appointmentsData to see its structure
  console.log("Appointments Data:", appointmentsData);

  // Ensure appointments is always an array
  const appointments = Array.isArray(appointmentsData) ? appointmentsData : [];

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error errMessage={error} />;
  }

  if (!loading && !error && appointments.length === 0) {
    return (
      <h2 className="mt-5 text-center leading-7 text-[20px] font-semibold text-primaryColor">
        You don&apos;t have any booking yet!
      </h2>
    );
  }

  return (
    <div className="grid grid-cols-5 lg:grid-cols-2 gap-5">
      {appointments.map((player) => (
        <PlayerCard player={player} key={player._id} />
      ))}
    </div>
  );
};

export default MyBookings;
