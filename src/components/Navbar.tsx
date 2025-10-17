import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full">
      {/* 🔹 Top Contact Bar */}
      <div className="bg-blue-600 text-white text-sm py-2 px-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Mail size={16} /> info@blessingmedicalcenter.com
          </span>
          <span className="flex items-center gap-1">
            <Phone size={16} /> +254 799834434
          </span>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <nav className="bg-blue-500 text-white flex items-center justify-between px-6 py-4 shadow">
        {/* Logo / Brand */}
        <h1 className="text-2xl font-bold tracking-wide">BMC</h1>

        {/* Links */}
        <ul className="flex space-x-8 text-lg">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutus">Aboutus</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/ourteam">Our Team</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Book Appointment Button */}
        <Link to="/Appointment">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Book Appointment
            </button>
          </Link>
      </nav>
    </header>
  );
}
