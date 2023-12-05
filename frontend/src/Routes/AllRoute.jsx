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
import AstroBirthChartReformation from "../Pages/FeaturedPageItems/AstroBirthChartReformation";
import AstroVastuConsultancy from "../Pages/FeaturedPageItems/AstroVastuConsultancy";
import LifeCoachAndSuccessGuru from "../Pages/FeaturedPageItems/LifeCoachAndSuccessGuru";
import Palmistry from "../Pages/FeaturedPageItems/Palmistry";
import Numerology from "../Pages/FeaturedPageItems/Numerology";
import FaceReading from "../Pages/FeaturedPageItems/FaceReading";

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/awards" element={<Awards />} />
      <Route path="/services" element={<Services />} />
      <Route path="/paymentsuccess" element={<PaymentSuccess />} />
      <Route path="/about-page" element={<AboutPage />} />
      <Route path="/events" element={<Events />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/blogs" element={<Blogs />} />

      <Route
        path="/astro-birth-chart-reformation"
        element={<AstroBirthChartReformation />}
      />
      <Route
        path="/astro-vastu-consultancy"
        element={<AstroVastuConsultancy />}
      />
      <Route
        path="/life-coach-and-success-guru"
        element={<LifeCoachAndSuccessGuru />}
      />
      <Route path="/palmistry" element={<Palmistry />} />
      <Route path="/numerology" element={<Numerology />} />
      <Route path="/face-reading" element={<FaceReading />} />
    </Routes>
  );
};

export default AllRoute;
