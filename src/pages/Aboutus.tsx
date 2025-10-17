import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 md:px-16 lg:px-24">
      {/* ----------- HEADER SECTION ----------- */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
          About Blessing Medical Hospital
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          At <span className="font-semibold">Blessing Medical Hospital</span>,
          we are dedicated to providing exceptional healthcare services to our
          community. Our goal is to ensure every patient receives personalized
          treatment in a caring, professional, and technologically advanced
          environment. We believe that health is the foundation of happiness,
          and we are committed to walking the journey of wellness with every
          patient who walks through our doors.
        </p>
      </div>

      {/* ----------- MAIN ABOUT CONTENT ----------- */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-16">
        {/* Left Text */}
        <div className="md:w-1/2 space-y-6 text-gray-700 leading-relaxed">
          <p>
            Our hospital stands as a beacon of quality healthcare, offering a
            wide range of medical services to meet the diverse needs of our
            patients. From routine checkups to specialized treatments, we
            combine medical expertise, compassion, and innovation to deliver the
            best outcomes. Our highly qualified doctors, nurses, and
            specialists work around the clock to ensure the comfort, safety, and
            recovery of every patient.
          </p>
          <p>
            We take pride in maintaining modern facilities equipped with
            advanced medical technologies, ensuring accurate diagnostics and
            effective treatments. Our commitment extends beyond curing illness —
            we aim to promote wellness, educate the community on preventive
            care, and make quality healthcare accessible to everyone, regardless
            of their background or condition.
          </p>
          <p>
            At Blessing Medical Hospital, your health is our mission. We
            continue to evolve through innovation, research, and compassion —
            striving to make a difference in every life we touch.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="hospital.jpg"
            alt="Hospital Building"
            className="w-full md:w-[500px] h-[350px] object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* ----------- SERVICES SECTION ----------- */}
      <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold text-blue-500 mb-6">
          Our Medical Services
        </h2>

        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 font-medium mb-8">
          <li className="bg-gray-100 py-3 rounded-md hover:bg-blue-100 transition">
            Laboratory
          </li>
          <li className="bg-gray-100 py-3 rounded-md hover:bg-blue-100 transition">
            Ultrasound
          </li>
          <li className="bg-gray-100 py-3 rounded-md hover:bg-blue-100 transition">
            X-Ray
          </li>
          <li className="bg-gray-100 py-3 rounded-md hover:bg-blue-100 transition">
            Electrocardiogram (ECG)
          </li>
          <li className="bg-gray-100 py-3 rounded-md hover:bg-blue-100 transition">
            CT-Scan
          </li>
          <li className="bg-gray-100 py-3 rounded-md hover:bg-blue-100 transition">
            Dental Care
          </li>
        </ul>

        {/* Button */}
        <Link
          to="/services"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-500 transition"
        >
          Our Services
        </Link>
      </div>

      {/* ----------- OUR SPECIALIZATION SECTION ----------- */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8 text-center">
          {/* Title and paragraph */}
          <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            Our Specialization
          </h1>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
            At our hospital, we offer a wide range of specialized medical services
            with state-of-the-art technology and experienced professionals to ensure
            top-notch patient care.
          </p>

          {/* Services images grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-12">
            {/* Laboratory */}
            <div className="flex flex-col items-center">
              <img src="lab.jpg" alt="Laboratory" className="rounded-lg shadow-lg mb-4 w-full h-48 object-cover"/>
              <h3 className="text-xl font-semibold text-gray-800">Laboratory</h3>
            </div>

            {/* Ultrasound */}
            <div className="flex flex-col items-center">
              <img src="ultrasound.jpg" alt="Ultrasound" className="rounded-lg shadow-lg mb-4 w-full h-48 object-cover"/>
              <h3 className="text-xl font-semibold text-gray-800">Ultrasound</h3>
            </div>

            {/* X-Ray */}
            <div className="flex flex-col items-center">
              <img src="Xray.jpg" alt="X-Ray" className="rounded-lg shadow-lg mb-4 w-full h-48 object-cover"/>
              <h3 className="text-xl font-semibold text-gray-800">X-Ray</h3>
            </div>

            {/* ECG */}
            <div className="flex flex-col items-center">
              <img src="electrocardiogram.jpg" alt="Electrocardiogram" className="rounded-lg shadow-lg mb-4 w-full h-48 object-cover"/>
              <h3 className="text-xl font-semibold text-gray-800">Electrocardiogram (ECG)</h3>
            </div>

            {/* CT-Scan */}
            <div className="flex flex-col items-center">
              <img src="scan.jpg" alt="CT-Scan" className="rounded-lg shadow-lg mb-4 w-full h-48 object-cover"/>
              <h3 className="text-xl font-semibold text-gray-800">CT-Scan</h3>
            </div>

            {/* Dental Care */}
            <div className="flex flex-col items-center">
              <img src="dental care.jpg" alt="Dental Care" className="rounded-lg shadow-lg mb-4 w-full h-48 object-cover"/>
              <h3 className="text-xl font-semibold text-gray-800">Dental Care</h3>
            </div>
          </div>

          {/* View More Button */}
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-500 transition">
            View More
          </button>
        </div>
      </section>

      {/* ----------- BOOK APPOINTMENT CTA SECTION ----------- */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-24"
        style={{ backgroundImage: "url('family.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative max-w-6xl mx-auto px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Book Your Appointment Today
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Consult with our experienced doctors and specialists for personalized healthcare.
          </p>
          <button className="bg-blue-600 hover:bg-blue-500 transition px-8 py-3 rounded-md font-semibold text-white">
            Book Appointment
          </button>
        </div>
      </section>
    </div>
  );
}
