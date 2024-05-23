/* eslint-disable react/prop-types */
const Error = ({ message }) => {
  return (
    <div className="text-center">
      <h2 className="text-5xl font-bold text-primaryColor">{message}</h2>
    </div>
  );
};

export default Error;
