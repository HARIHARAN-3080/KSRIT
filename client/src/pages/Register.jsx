import React, { useState, useRef } from "react";

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    department: "",
    category: "",
    otherCategory: "",
    paymentScreenshot: null,
  });

  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "paymentScreenshot") {
      setFormData((prev) => ({
        ...prev,
        paymentScreenshot: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.college ||
      !formData.department ||
      !formData.category ||
      (formData.category === "other" && !formData.otherCategory) ||
      !formData.paymentScreenshot
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!emailRegex.test(formData.email)) {
      alert("Enter a valid email address.");
      return;
    }

    if (!phoneRegex.test(formData.phone)) {
      alert("Enter a valid 10-digit phone number.");
      return;
    }

    const dataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "otherCategory" && formData.category !== "other") return;
      dataToSend.append(key, value);
    });

    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        body: dataToSend,
      });

      const result = await res.json();
      setLoading(false);

      if (res.ok) {
        alert("Registration successful!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          college: "",
          department: "",
          category: "",
          otherCategory: "",
          paymentScreenshot: null,
        });
        if (fileInputRef.current) fileInputRef.current.value = null;
      } else {
        alert(result.message || "Registration failed.");
      }
    } catch (error) {
      setLoading(false);
      alert("Server error. Try again later.");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] py-10 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#061e3e] mb-8 text-center">
          Conference Registration
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 sm:p-8 rounded-xl shadow-md border border-gray-200 space-y-5"
          >
            <h2 className="text-xl font-semibold text-[#061e3e] mb-3">
              Participant Details
            </h2>

            {/* Full Name */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-[#061e3e]">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-[#061e3e]">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-[#061e3e]">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            {/* College */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-[#061e3e]">
                College Name
              </label>
              <input
                type="text"
                name="college"
                value={formData.college}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            {/* Department */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-[#061e3e]">
                Department
              </label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-[#061e3e]">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400"
                required
              >
                <option value="">Select Category</option>
                <option value="student">Student</option>
                <option value="staff">Staff</option>
                <option value="researcher">Researcher</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Other Category */}
            {formData.category === "other" && (
              <div>
                <label className="block mb-2 text-sm font-semibold text-[#061e3e]">
                  Please specify your category
                </label>
                <input
                  type="text"
                  name="otherCategory"
                  value={formData.otherCategory}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-yellow-400"
                  required
                />
              </div>
            )}

            {/* Screenshot Upload */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-[#061e3e]">
                Upload Payment Screenshot
              </label>
              <input
                type="file"
                name="paymentScreenshot"
                ref={fileInputRef}
                accept="image/*"
                onChange={handleChange}
                className="w-full border rounded-md p-2 bg-white"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`${
                loading ? "opacity-50 cursor-not-allowed" : ""
              } bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-md font-semibold transition`}
            >
              {loading ? "Submitting..." : "Submit Registration"}
            </button>
          </form>

          {/* Payment Section */}
          <div className="bg-[#fef7dc] p-6 sm:p-8 rounded-xl shadow-md border border-yellow-300 space-y-5">
            <h2 className="text-xl font-semibold text-[#061e3e] mb-3">
              Payment Information
            </h2>

            <p className="text-sm text-gray-700">
              Please pay using UPI apps (GPay, PhonePe, etc.) and upload the screenshot below.
              <br />
              <span className="text-red-500 font-medium">
                * Pay Now button only works on mobile.
              </span>
            </p>

            <p className="font-semibold text-[#061e3e]">
              UPI ID: <span className="text-yellow-600">conference@upi</span>
            </p>

            <a
              href="upi://pay?pa=conference@upi&pn=IT%20Conference&cu=INR"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-semibold transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pay Now via UPI App
            </a>

            <div className="mt-4 text-center">
              <img
                src="/qr-code.png"
                alt="UPI QR Code"
                className="w-40 h-40 mx-auto border p-1 rounded-md"
              />
              <p className="text-sm mt-2 text-gray-600">Scan to pay using UPI</p>
            </div>

            <div className="text-center">
              <a
                href="https://wa.me/91XXXXXXXXXX?text=I%20have%20paid%20the%20conference%20fee.%20Here%20is%20my%20screenshot."
                className="text-green-700 font-medium underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact us on WhatsApp for help
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
