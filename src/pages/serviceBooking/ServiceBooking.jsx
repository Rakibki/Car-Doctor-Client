import React, { useContext, useState } from "react";
import PageTitle from "../../components/PageTitle";
import { json, useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { authContext } from "../../providers/AuthProvider";

const ServiceBooking = () => {
  const [startDate, setStartDate] = useState(new Date());

  const lodderService = useLoaderData();
  const { user } = useContext(authContext);

  console.log(lodderService);
  const handleOder = (event) => {
    event.preventDefault();
    const fName = event.target.fName.value;
    const lName = event.target.lName.value;
    const date = startDate;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const price = event.target.price.value;

    const oderInfo = {
      title: lodderService.title,
      img: lodderService.img,
      fName,
      lName,
      date,
      email,
      phone,
      price,
    };

    fetch("http://localhost:4000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(oderInfo),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <PageTitle text={"Booking Now"} />

      <div className="p-24 bg-[#F3F3F3] mt-10">
        <form onSubmit={handleOder}>
          <div className="flex mb-4 gap-3">
            <input
              defaultValue={user?.displayName}
              placeholder="First Name"
              className="outline-none rounded-md p-2 md:w-1/2"
              type="text"
              name="fName"
            />
            <input
              placeholder="Last Name"
              className="outline-none rounded-md p-2 md:w-1/2"
              type="text"
              name="lName"
            />
          </div>

          <div className="grid grid-cols-4 gap-3">
            <div className="">
              <DatePicker
                className="rounded-md block w-full p-2"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />{" "}
            </div>

            <input
              placeholder="Your Phone"
              className="outline-none p-2 rounded-md"
              type="text"
              name="phone"
              id=""
            />

            <input
              placeholder="Price"
              className="outline-none p-2 rounded-md"
              type="text"
              defaultValue={lodderService?.price}
              name="price"
              id=""
            />

            <input
              placeholder="Your Email"
              className="outline-none p-2 rounded-md"
              type="text"
              name="email"
              defaultValue={user?.email}
              id=""
            />
          </div>

          <button
            type="submit"
            className="btn mt-8 w-full capitalize bg-[#FF3811] text-white rounded-md border-none btn-accent"
          >
            Order Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceBooking;
