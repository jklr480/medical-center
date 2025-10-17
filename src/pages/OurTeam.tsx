import { Link } from "react-router-dom";

export default function OurTeam() {
  const staff = [
    {
      id: 1,
      name: "Nicole Waithera",
      title: "Nurse Officer",
      image: "nicole waithera.jpg",
      description:
        "Nicole ensures every patient receives professional, compassionate care throughout their stay at Blessing Medical Hospital.",
    },
    {
      id: 2,
      name: "Dr. Peter Kamau",
      title: "Paediatrician",
      image: "peter kamau.jpg",
      description:
        "Dr. Kamau provides quality healthcare for infants, children, and adolescents with kindness and expertise.",
    },
    {
      id: 3,
      name: "Grace Njeri",
      title: "Receptionist",
      image: "grace njeri.jpg",
      description:
        "Grace manages patient appointments, inquiries, and ensures smooth coordination between departments.",
    },
    {
      id: 4,
      name: "Eng. Samuel Otieno",
      title: "Chairman, Board of Directors",
      image: "samuel otieno.jpg",
      description:
        "Samuel provides leadership and strategic direction to ensure the hospital achieves its mission and goals.",
    },
    {
      id: 5,
      name: "Dr. Elizabeth Mwangi",
      title: "Medical Director",
      image: "elizabeth mwangi.jpg",
      description:
        "Dr. Mwangi supervises all medical departments, ensuring patient safety and the highest standards of clinical care.",
    },
    {
      id: 6,
      name: "Catherine Wambui",
      title: "Human Resource Manager",
      image: "cathrine wambui.jpg",
      description:
        "Catherine oversees recruitment, staff welfare, and training to maintain an empowered and motivated workforce.",
    },
    {
      id: 7,
      name: "James Kariuki",
      title: "Finance & Procurement Committee",
      image: "james kariuki.jpg",
      description:
        "James ensures proper management of the hospital’s finances, purchasing, and accountability processes.",
    },
    {
      id: 8,
      name: "Dr. Lucy Achieng",
      title: "Chair, Medical Advisory Committee",
      image: "lucy achieng.jpg",
      description:
        "Dr. Lucy guides the hospital’s clinical decisions, ensuring all treatments meet best medical standards.",
    },
    {
      id: 9,
      name: "David Mutua",
      title: "Chief Operations Officer",
      image: "david mutua.jpg",
      description:
        "David coordinates daily hospital operations, ensuring efficient service delivery and patient satisfaction.",
    },
    {
      id: 10,
      name: "Sarah Kimani",
      title: "Executive Officer",
      image: "sarah kimani.jpg",
      description:
        "Sarah supports executive decisions and works to ensure smooth collaboration between all hospital departments.",
    },
    {
      id: 11,
      name: "Brian Mugo",
      title: "IT Consultant",
      image: "brian mugo.jpg",
      description:
        "Brian maintains the hospital’s digital systems, ensuring secure data management and smooth tech operations.",
    },
    {
      id: 12,
      name: "Janet Nduta",
      title: "Chief Nursing Officer",
      image: "janet nduta.jpg",
    
     
    },
    {
      id: 13,
      name: "John Mwangi",
      title: "Head of ICT",
      image: "john mwangi.jpg",
      description:
        "John manages hospital communication networks and IT systems to support efficient and reliable service delivery.",
    },
  ];

  const doctors = [
    {
      id: 1,
      name: "Dr. Faith Njoroge",
      specialization: "Cardiologist",
      image: "faith njoroge.jpg",
      description:
        "Dr. Faith specializes in diagnosing and treating heart diseases, helping patients maintain strong cardiovascular health.",
    },
    {
      id: 2,
      name: "Dr. Kelvin Omondi",
      specialization: "Orthopedic Surgeon",
      image: "doc6.jpg",
      description:
        "Dr. Kelvin provides expert care for bone, joint, and muscle conditions, helping patients regain mobility and comfort.",
    },
    {
      id: 3,
      name: "Dr. Mary Atieno",
      specialization: "Gynecologist",
      image: "mary otieno.jpg",
      description:
        "Dr. Mary focuses on women’s reproductive health, offering consultations, checkups, and specialized treatments.",
    },
    {
      id: 4,
      name: "Dr. Daniel Kibet",
      specialization: "Neurologist",
      image: "doctor4.jpg",
      description:
        "Dr. Kibet provides advanced care for brain and nervous system disorders, combining expertise with compassion.",
    },
    {
      id: 5,
      name: "Dr. Sharon Mwende",
      specialization: "Dermatologist",
      image: "sharon mwende.jpg",
      description:
        "Dr. Sharon treats skin, hair, and nail conditions with precision and modern dermatological techniques.",
    },
    {
      id: 6,
      name: "Dr. Paul Wanjala",
      specialization: "Dentist",
      image: "doctor3.jpg",
      description:
        "Dr. Paul offers dental care services including cleaning, restoration, and cosmetic treatments for healthy smiles.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ------------ HEADER ------------- */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Our Team</h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          At <span className="font-semibold">Blessing Medical Hospital</span>, our team
          consists of dedicated professionals who bring their expertise, compassion, and
          commitment to ensure the best healthcare services to all our patients.
        </p>
      </section>

      {/* ------------ TEAM GRID ------------- */}
      <section className="px-8 md:px-16 lg:px-24 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {staff.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-teal-700 font-medium mb-2">{member.title}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------ OUR DOCTORS ------------- */}
      <section className="text-center py-16 px-6 bg-white">
        <h1 className="text-4xl font-bold text-teal-700 mb-4">Our Doctors</h1>
        <p className="text-gray-700 max-w-2xl mx-auto mb-12">
          Our team of specialized doctors combines skill, experience, and compassion to
          deliver the best care to every patient who walks through our doors.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-8 md:px-16 lg:px-24">
          {doctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition text-center"
            >
              <img
                src={doc.image}
                alt={doc.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {doc.name}
                </h3>
                <p className="text-teal-700 font-medium mb-2">
                  {doc.specialization}
                </p>
                <p className="text-gray-600 text-sm">{doc.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------ HERO SECTION ------------- */}
      <section className="relative text-white py-20 mt-12">
        <img
          src="family.jpg"
          alt="Appointment Background"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Book an Appointment Today
          </h2>
          <p className="max-w-xl mx-auto mb-8 text-lg">
            We are ready to care for you. Schedule an appointment with our doctors and
            experience compassionate healthcare.
          </p>
          <Link
            to="/contact"
            className="bg-blue-600 text-teal-900 px-6 py-3 rounded-md font-semibold hover:bg-blue-400 transition"
          >
            Book Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}
