import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/registrations");
        setRegistrations(res.data);
      } catch (error) {
        console.error("Error fetching registrations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRegistrations();
  }, []);

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return new Date(dateString).toLocaleString(undefined, options);
  };

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("adminToken"); // Clear admin auth token
    navigate("/admin/login"); // Redirect to login page
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Admin Dashboard</h2>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition"
        >
          Logout
        </button>
      </div>

      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : registrations.length === 0 ? (
        <p className="text-center text-gray-600">No registrations found.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow-md">
          <table className="min-w-full bg-white border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-200 text-left text-sm font-semibold">
                <th className="p-3 border border-gray-300">Name</th>
                <th className="p-3 border border-gray-300">Email</th>
                <th className="p-3 border border-gray-300">Phone</th>
                <th className="p-3 border border-gray-300">College</th>
                <th className="p-3 border border-gray-300">Department</th>
                <th className="p-3 border border-gray-300">Category</th>
                <th className="p-3 border border-gray-300">Registration Date</th>
                <th className="p-3 border border-gray-300">Payment</th>
              </tr>
            </thead>
            <tbody>
              {registrations.map((reg) => (
                <tr key={reg._id} className="border-t text-sm hover:bg-gray-50">
                  <td className="p-3 border border-gray-300">{reg.fullName}</td>
                  <td className="p-3 border border-gray-300">{reg.email}</td>
                  <td className="p-3 border border-gray-300">{reg.phone}</td>
                  <td className="p-3 border border-gray-300">{reg.college}</td>
                  <td className="p-3 border border-gray-300">{reg.department}</td>
                  <td className="p-3 border border-gray-300">{reg.category}</td>
                  <td className="p-3 border border-gray-300">{formatDate(reg.createdAt)}</td>
                  <td className="p-3 border border-gray-300">
                    {reg.screenshotPath ? (
                      <a
                        href={`http://localhost:5000${reg.screenshotPath}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline hover:text-blue-800"
                      >
                        View
                      </a>
                    ) : (
                      "No Screenshot"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
