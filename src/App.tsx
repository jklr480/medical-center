import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Services from "./pages/Services";
import OurTeam from "./pages/OurTeam";

import Contact from "./pages/contact";
import Appointment from "./pages/Appointment";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar always at the top */}
        <Navbar />

        {/* Page Content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/services" element={<Services />} />
            <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/appointment" element={<Appointment />} /> 
          p
          </Routes>
        </div>

        {/* Footer always at the bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
