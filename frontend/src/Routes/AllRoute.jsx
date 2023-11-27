import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Awards from "../Pages/Awards";
import Services from "../Pages/Services";
// import About from "../Pages/About";
import Contact from "../components/Contact";
import Events from "../Pages/Events";
import AboutPage from "../Pages/AboutPage";
import Appointment from "../Pages/Appointment";
import Blogs from "../Pages/Blogs";
import PaymentSuccess from "../components/PaymentSuccess";

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/awards" element={<Awards />} />
      <Route path="/services" element={<Services />} />
      <Route path="/paymentsuccess" element={<PaymentSuccess />} />      <Route path="/about-page" element={<AboutPage />} />
      <Route path="/events" element={<Events />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/blogs" element={<Blogs />} />
    </Routes>
  );
};

export default AllRoute;
