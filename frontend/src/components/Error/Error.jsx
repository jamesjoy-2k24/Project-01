/* eslint-disable react/prop-types */
const Error = ({errMessage}) => {
    return (
        <div className="text-center">
            <h2 className="text-5xl font-bold text-red-500">{errMessage}</h2>
        </div>
    );
};

export default Error