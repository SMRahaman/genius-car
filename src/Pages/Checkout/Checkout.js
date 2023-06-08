import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { UserContext } from "../../AuthContext/AuthContext";

const Checkout = () => {
  const { _id, title, price } = useLoaderData();
  const { user } = useContext(UserContext);

  const checkoutHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstname.value} ${form.lastname.value}`;
    const email = user?.email || "unregistered";
    const phone = form.phone.value;
    const message = form.message.value;
    console.log(name, email, phone, message);

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message,
    };

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="mx-32 my-12">
      <h1>{title}</h1>
      <h3>{price}</h3>
      <div>
        <form onSubmit={checkoutHandler} className="grid grid-cols-2 gap-10">
          <input
            type="text"
            placeholder="First Name"
            name="firstname"
            className="input input-bordered  w-full "
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastname"
            className="input input-bordered  w-full "
          />
          <input
            type="text"
            placeholder="Phone Number"
            name="phone"
            className="input input-bordered  w-full "
          />
          <input
            type="text"
            placeholder={user.email}
            name="email"
            className="input input-bordered  w-full"
            disabled
          />

          <textarea
            placeholder="Type your message"
            name="message"
            className="textarea textarea-bordered textarea-lg w-full  "
          ></textarea>
          <br></br>
          <div className="text-center mt-5">
            <button className="btn btn-primary">Place your Order</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
