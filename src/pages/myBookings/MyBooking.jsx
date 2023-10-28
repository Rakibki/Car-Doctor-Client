import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../providers/AuthProvider";
import PageTitle from "../../components/PageTitle";
import BookingRow from "./BookingRow";

const MyBooking = () => {
  const [myBooking, setMyBookings] = useState([]);

  const { user } = useContext(authContext);

  useEffect(() => {
    fetch(`http://localhost:4000/bookings?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyBookings(data));
  }, []);


  const handleDetele = (id) => {
    fetch(`http://localhost:4000/bookings/${id}`, {
        method: "delete",
    })
    .then((res) => res.json())
    .then((data) => {
        if(data.deletedCount > 0) {
            const remmening = myBooking.filter((item) => item._id !== id)
            setMyBookings(remmening)
        }
    })
  }

  return (
    <div>
      <PageTitle text={"Cart Details"} />

      <div className="mt-8 p-8 overflow-x-auto">
        <table className="table">
          <tbody>
            {myBooking.map((item) => (
              <BookingRow handleDetele={handleDetele} item={item} key={item._id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBooking;
