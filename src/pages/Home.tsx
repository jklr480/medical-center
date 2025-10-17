import { Link } from "react-router-dom";
  // make sure the path is correct



export default function Home() {
  return (
    <div>
      {/* ---------------------- HERO SECTION ---------------------- */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-24 py-16 bg-gray-50">
        {/* Left Text Section */}
        <div className="max-w-lg text-center md:text-left">
          <p className="text-blue-600 font-medium mb-2">
            Welcome to our Medical Care Center
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            We Take Care Of <br />
            <span className="text-blue-500">Our Patients’ Health</span>
          </h1>
          <p className="text-gray-600 mb-8">
            I realized that becoming a doctor, I can only help a small community. 
            But by becoming a doctor, I can help my whole country.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 justify-center md:justify-start">
            <Link
              to="/about"
              className="bg-blue-700 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-400 transition"
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="border-2 border-black text-blue-500 px-5 py-2 rounded-md font-semibold hover:bg-blue-500 hover:text-white transition"
            >
              Our Services
            </Link>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="mt-10 md:mt-0">
          <img
            src="doc.jpg"
            alt="Doctor smiling"
            className="w-[400px] md:w-[500px] rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* ---------------------- WE CARE SECTION ---------------------- */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-24 py-16 bg-white">
        {/* Left Image */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <div className="relative">
            <img
              src="reception.jpg"
              alt="Hospital Reception"
              className="rounded-lg shadow-lg w-full"
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              
            </div>
          </div>
        </div>

        {/* Right Text */}
        <div className="w-full md:w-1/2 md:pl-12">
          <p className="text-blue-600 font-semibold uppercase mb-3 tracking-wide">
            We Care
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
            Blessing medical hospital
          </h2>
          <p className="text-gray-600 mb-4">
            Modern medical center dedicated to providing quality and compassionate healthcare
            to our community. Our goal is to make healthcare more accessible, affordable,
            and centered around each patient’s unique needs.
          </p>
          <p className="text-gray-600">
            Blessing health care Hospital brings together numerous specialists and consulting doctors into one
            healthcare establishment aimed at providing the best care medicine and technology can offer.
            Among our specialist services include: Gynecologists & Surgeons, Orthopaedic surgeries,
            Urologists, Gastroenterologists, Pediatric and Neurosurgeons, and more.
          </p>
        </div>
      </section>

      {/* ---------------------- MISSION & VISION SECTION ---------------------- */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Mission</h3>
              <p>
                To provide compassionate, high-quality, and affordable healthcare
                services to the community, ensuring the wellbeing of every patient.
              </p>
            </div>
            
            {/* Vision */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4 text-green-600">Vision</h3>
              <p>
                To become a leading medical institution known for excellence,
                innovation, and holistic patient care in the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------- ABOUT HOSPITAL SECTION ---------------------- */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-500 mb-4">
            Committed to Quality Healthcare
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our hospital is dedicated to providing compassionate and high-quality healthcare. 
            With skilled medical professionals and modern facilities, we ensure that every patient 
            receives personalized care and attention. We focus on promoting health, preventing illness, 
            and delivering effective treatment for all members of our community.
          </p>
        </div>
      </section>

      {/* ---------------------- FACILITIES SECTION ---------------------- */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Facilities</h2>

          {/* Facility 1 - Operation Theater */}
          <div className="flex flex-col md:flex-row items-center mb-12">
            <img
              src="Operation Theatre.jpg"
              alt="Operation Theatre"
              className="w-30px md:w-1/2 rounded-lg shadow-lg mb-4 md:mb-0 md:mr-6 w-20 h-60 object-cover"
            />
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Operation Theater</h3>
              <p className="text-gray-600">
                Our modern operation theaters are fully equipped with advanced surgical
                instruments and technology to ensure safe and effective procedures for all patients.
              </p>
            </div>
          </div>

          {/* Facility 2 - Laboratory */}
          <div className="flex flex-col md:flex-row items-center mb-12 ">
            <img
              src="laboratory Design.jpg"
              alt="Laboratory"
              className="w-full md:w-1/2 rounded-lg shadow-lg mb-6 md:mb-0 md:ml-8  h-60 object-cover"
            />
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Laboratory</h3>
              <p className="text-gray-600">
                Our advanced laboratory offers precise and fast diagnostic tests
                to support accurate medical treatment and patient care.
              </p>
            </div>
          </div>

          {/* Facility 3 - Wards & Beds */}
          <div className="flex flex-col md:flex-row items-center">
            <img
              src="wards beds.jpg"
              alt="Wards & Beds"
              className="w-full md:w-1/2 rounded-lg shadow-lg mb-6 md:mb-0 md:mr-8  h-60 object-cover"
            />
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Wards & Beds</h3>
              <p className="text-gray-600">
                Clean and comfortable wards with well-maintained beds ensure
                patients have a safe and relaxing environment during their stay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------- TESTIMONIALS SECTION ---------------------- */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">What Our Patients Say</h2>

          <div className="flex overflow-x-auto space-x-6 snap-x snap-mandatory pb-4">
            {/* Testimonial 1 */}
            <div className="flex-shrink-0 w-80 bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition snap-start">
              <p className="text-gray-600 mb-4">
                “The doctors and nurses were incredibly caring. I felt safe and well taken care of throughout my treatment.”
              </p>
              <h4 className="text-lg font-semibold">Alice W.</h4>
              <p className="text-sm text-gray-500">Patient</p>
            </div>

            {/* Testimonial 2 */}
            <div className="flex-shrink-0 w-80 bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition snap-start">
              <p className="text-gray-600 mb-4">
                “Excellent service and modern facilities. I highly recommend this hospital to anyone seeking quality healthcare.”
              </p>
              <h4 className="text-lg font-semibold">John M.</h4>
              <p className="text-sm text-gray-500">Patient</p>
            </div>

            {/* Testimonial 3 */}
            <div className="flex-shrink-0 w-80 bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition snap-start">
              <p className="text-gray-600 mb-4">
                “Friendly staff and prompt attention. I appreciated how well they explained every procedure.”
              </p>
              <h4 className="text-lg font-semibold">Mary K.</h4>
              <p className="text-sm text-gray-500">Patient</p>
            </div>

            {/* Testimonial 4 */}
            <div className="flex-shrink-0 w-80 bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition snap-start">
              <p className="text-gray-600 mb-4">
                “From check-in to discharge, everything was handled professionally. The care was top-notch.”
              </p>
              <h4 className="text-lg font-semibold">Peter L.</h4>
              <p className="text-sm text-gray-500">Patient</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
