import { Mail, Phone, Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-12">
      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-3 gap-8">
        {/* About / Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Blessing Medical Center</h2>
          <p className="text-gray-200">
            Dedicated to providing compassionate, modern, and high-quality healthcare. 
            Our skilled medical professionals and state-of-the-art facilities ensure the best care for our patients.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="flex items-center gap-2 mb-2">
            <Mail size={18} /> info@blessingmedicalcenter.com
          </p>
          <p className="flex items-center gap-2">
            <Phone size={18} /> +254 799834434
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex gap-4">
            <Link to="#" className="hover:text-gray-200 transition">
              <Facebook size={24} />
            </Link>
            <Link to="#" className="hover:text-gray-200 transition">
              <Twitter size={24} />
            </Link>
            <Link to="#" className="hover:text-gray-200 transition">
              <Instagram size={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-12 text-center border-t border-blue-500 pt-4 text-gray-200 text-sm">
        &copy; {new Date().getFullYear()} Blessing Medical Center. All rights reserved.
      </div>
    </footer>
  );
}
