import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "General Consultation",
      image: "consultation.jpg",
      description:
        "Our doctors provide thorough health check-ups, diagnosis, and personalized treatment plans for patients of all ages.",
    },
    {
      id: 2,
      title: "Laboratory Services",
      image: "laboratory Design.jpg",
      description:
        "We offer accurate and timely lab testing using modern diagnostic equipment to support effective medical decisions.",
    },
    {
      id: 3,
      title: "Pharmacy",
      image: "pharmacy.jpg",
      description:
        "Our in-house pharmacy ensures patients receive genuine medications and expert advice for safe and effective use.",
    },
    {
      id: 4,
      title: "Maternity Care",
      image: "maternity.jpg",
      description:
        "Comprehensive maternal care including prenatal, delivery, and postnatal services to ensure the health of mother and child.",
    },
    {
      id: 5,
      title: "Dental Clinic",
      image: "dental care.jpg",
      description:
        "We provide dental check-ups, cleaning, and minor dental procedures to help you maintain a healthy and confident smile.",
    },
    {
      id: 6,
      title: "Emergency Services",
      image: "emergency.jpg",
      description:
        "Our emergency department operates 24/7 to provide quick, professional care for urgent and life-threatening situations.",
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* ---------------------- HEADER ---------------------- */}
      <section className="text-center py-16 px-4">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Our Services</h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          At <span className="font-semibold">Blessing Medical Hospital</span>, we offer a
          wide range of healthcare services designed to meet the needs of individuals and
          families. Our dedicated team ensures you receive quality treatment, care, and
          support at every stage of your health journey.
        </p>
      </section>

      {/* ---------------------- SERVICES GRID ---------------------- */}
      <section className="px-8 md:px-16 lg:px-24 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <button className="bg-blue-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-500 transition">
                  Book Service
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------- HERO BOOK APPOINTMENT ---------------------- */}
      <section className="relative bg-teal-900 text-white py-20 mt-12">
        <img
          src="family.jpg"
          alt="Appointment background"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Book an Appointment Today
          </h2>
          <p className="max-w-xl mx-auto mb-8 text-lg">
            Your health matters to us. Schedule a consultation with our medical team and
            get the care you deserve.
          </p>
          <Link
            to="/contact"
            className="bg-blue-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-500 transition"
          >
            Book Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}
