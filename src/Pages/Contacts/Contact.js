import React from "react";

const Contact = () => {
  const contacinfo = [
    {
      img: "https://genius-car-ce44b.web.app/static/media/time.80006c6603b86ac24ca99f9212c0ad88.svg",
      info1: "We are open monday-friday",
      info2: "7:00am - 9:00pm",
    },
    {
      img: "https://genius-car-ce44b.web.app/static/media/phone.dff2a8dbcc9c49991f1196c135097e7e.svg",
      info1: "Have a question?",
      info2: "+2546 251 2658",
    },
    {
      img: "https://genius-car-ce44b.web.app/static/media/location.c85a95f2bc26e95e5c46add9f984c217.svg",
      info1: "Need a repair? our address",
      info2: "Liza Street, New York",
    },
  ];
  return (
    <div
      data-theme="dark"
      className="py-24 text-white mx-16 rounded-lg mb-[100px]"
    >
      <div className="grid grid-cols-3 justify-items-center ">
        {contacinfo.map((contact) => (
          <div className="flex gap-5 items-center  font-bold">
            <div>
              <img src={contact.img} alt="" />
            </div>
            <div>
              <p className="texl-xl">{contact.info1}</p>
              <p className="text-2xl">{contact.info2}</p>
              <p></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
