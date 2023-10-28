import React from "react";

const BookingRow = ({ handleDetele, item }) => {
  console.log(item);
  return (
    <div className="flex justify-center my-6">
      <div>
        <tr>
          <th>
            <button onClick={() => handleDetele(item._id)} className="btn btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </th>
          <td>
            <div className="flex items-center space-x-10 ">
              <div className="avatar">
                <div className="mask rounded-md w-24 h-24">
                  <img src={item.img} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="text-xl">{item.title}</div>
                {/* <div className="text-sm opacity-50">United States</div> */}
              </div>
            </div>
          </td>
          <td>
            <h2 className="text-2xl">${item.price}</h2>
          </td>
          <td>
          <h2 className="text-2xl">{item.date.slice(0,10)}</h2>
          </td>
          <th>
            <button className="btn capitalize btn-primary">Pendding</button>
          </th>
        </tr>
      </div>
    </div>
  );
};

export default BookingRow;
