import { CustomNavbar } from "./components";
import {
  Home,
  AboutUs,
  Classes,
  Services,
  OurTeam,
  ClassesTimetable,
  BmiCalculate,
  Gallery,
  OurBlog,
  Contact,
} from "./pages";

import { Route, Routes } from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <>
      <CustomNavbar />
      {/* main page content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/services" element={<Services />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/classes-timetable" element={<ClassesTimetable />} />
        <Route path="/bmi-calculator" element={<BmiCalculate />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/our-blog" element={<OurBlog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
