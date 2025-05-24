import React from 'react';

const Updates = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-semibold text-blue-700 mb-4">Conference Updates</h2>
      <ul className="list-disc list-inside space-y-3 text-gray-700">
        <li>📢 Call for papers extended to June 10th.</li>
        <li>🗓️ Keynote speakers announced — visit the homepage for details.</li>
        <li>🧾 Registration closes on July 1st.</li>
        <li>📍 Conference venue confirmed: ABC Auditorium, Main Campus.</li>
        <li>💡 Workshop schedule will be live by next week.</li>
      </ul>
    </div>
  );
};

export default Updates;
