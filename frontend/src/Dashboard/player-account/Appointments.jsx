import { FaCheck, FaTimes } from "react-icons/fa";
import { formateDate } from "../../utils/formateDate";

/* eslint-disable react/prop-types */
function Appointments({ appointments }) {
  return (
    <table className="w-full text-left text-sm text-gray-600">
      <thead className="text-s text-gray-800 uppercase bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3">
            Name
          </th>
          <th scope="col" className="px-6 py-3">
            Email
          </th>
          <th scope="col" className="px-6 py-3">
            Place
          </th>
          <th scope="col" className="px-6 py-3">
            Price
          </th>
          <th scope="col" className="px-6 py-3">
            Payment
          </th>
          <th scope="col" className="px-6 py-3">
            Booked on
          </th>
        </tr>
      </thead>

      <tbody>
        {appointments?.map((item) => (
          <tr key={item._id}>
            <th
              scope="row"
              className="px-6 py-4 flex items-center text-gray-900 whitespace-nowrap">
              <img
                src={item.user.photo}
                className="w-10 h-10 rounded-full"
                alt=""
              />
              <div className="pl-3">
                <div className="textbase font-semibold">{item.user.name}</div>
                <div className="text-normal text-gray-500">
                  {item.user.email}
                </div>
              </div>
            </th>

            <td className="px-6 py-4">{item.user.email}</td>
            <td className="px-6 py-4">{item.user.place}</td>
            <td className="px-6 py-4">
              {item.isPaid && (
                <div className="flex items-center">
                  <FaCheck className="text-green-500" />
                  <span className="ml-2">Paid</span>
                </div>
              )}

              {!item.isPaid && (
                <div className="flex items-center">
                  <FaTimes className="text-red-500" />
                  <span className="ml-2">Unpaid</span>
                </div>
              )}
            </td>

            <td className="px-6 py-4">{item.price}</td>
            <td className="px-6 py-4">{formateDate(item.createdAt)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Appointments;
