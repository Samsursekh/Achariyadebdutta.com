import React, { useState } from "react";
import TopNavbar from "../components/TopNavbar";
import BottomNavbar from "../components/BottomNavbar";

const Appointment = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    address: "",
    date: "",
    time: "",
    preferredSlot: "morning",
    modeOfConsultation: "online",
    priceOfAppointment: 3000,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <>
      <section>
        <div className="hidden md:block">
          <TopNavbar />
        </div>
        <div className="bg-black/30 h-[70px]">
          <BottomNavbar className="text-black" />
        </div>
        <div>
          <form
            className="m-auto my-4"
            action=""
            onSubmit={handleSubmit}
            style={{
              border: "1px solid gray",
              width: "300px",
              padding: "10px",
            }}
          >
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              style={{
                width: "97%",
                gap: "5px",
                marginTop: "5px",
                padding: "10px",
                marginRight: "10px",
                margin: "5px",
                border: "1px solid gray",
              }}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              style={{
                width: "97%",
                gap: "5px",
                marginTop: "5px",
                padding: "10px",
                marginRight: "10px",
                margin: "5px",
                border: "1px solid gray",
              }}
            />
            <input
              type="text"
              placeholder="Mobile Number"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              style={{
                width: "97%",
                gap: "5px",
                marginTop: "5px",
                padding: "10px",
                marginRight: "10px",
                margin: "5px",
                border: "1px solid gray",
              }}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              style={{
                width: "97%",
                gap: "5px",
                marginTop: "5px",
                padding: "10px",
                marginRight: "10px",
                margin: "5px",
                border: "1px solid gray",
              }}
            />
            <input
              type="text"
              placeholder="Address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              style={{
                width: "97%",
                gap: "5px",
                marginTop: "5px",
                padding: "10px",
                marginRight: "10px",
                margin: "5px",
                border: "1px solid gray",
              }}
            />
            <input
              type="date"
              placeholder="Select Date here"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              style={{
                width: "97%",
                gap: "5px",
                marginTop: "5px",
                padding: "10px",
                marginRight: "10px",
                margin: "5px",
                border: "1px solid gray",
              }}
            />
            <input
              type="time"
              placeholder="Select Time here"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              style={{
                width: "97%",
                gap: "5px",
                marginTop: "5px",
                padding: "10px",
                marginRight: "10px",
                margin: "5px",
                border: "1px solid gray",
              }}
            />
            <select
              name="preferredSlot"
              value={formData.preferredSlot}
              onChange={handleInputChange}
              id=""
              style={{
                width: "97%",
                gap: "5px",
                marginTop: "5px",
                padding: "10px",
                marginRight: "10px",
                margin: "5px",
                border: "1px solid gray",
              }}
            >
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
            </select>
            <select
              name="modeOfConsultation"
              value={formData.modeOfConsultation}
              onChange={handleInputChange}
              id=""
              style={{
                width: "97%",
                gap: "5px",
                marginTop: "5px",
                padding: "10px",
                marginRight: "10px",
                margin: "5px",
                border: "1px solid gray",
              }}
            >
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>

            <button
              style={{
                width: "97%",
                borderRadius: "0px",
                color: "white",
                backgroundColor: "blue",
                marginTop: "10px",
                padding: "10px 20px",
              }}
            >
              APPOINTMENT
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Appointment;
