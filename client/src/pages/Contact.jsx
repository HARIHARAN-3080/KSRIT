import React from 'react';

const Contact = () => {
  return (
    <section className="p-8 max-w-2xl mx-auto">
      <h2 className="text-3xl font-semibold text-blue-700 mb-6">Contact Us</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Name</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Your Name" />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input type="email" className="w-full p-2 border border-gray-300 rounded" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Message</label>
          <textarea className="w-full p-2 border border-gray-300 rounded" rows="4" placeholder="Your message"></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
