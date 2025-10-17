import { useState } from "react";

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    service: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You could send this data to your backend here (e.g., Laravel API)
    console.log("Appointment booked:", formData);
    setSuccess(true);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
          Book an Appointment
        </h2>

        {success ? (
          <div className="text-center text-green-600 font-semibold">
            ✅ Your appointment has been booked successfully!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Service</option>
              <option value="consultation">Consultation</option>
              <option value="checkup">Check-Up</option>
              <option value="treatment">Treatment</option>
            </select>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Book Appointment
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Appointment;
