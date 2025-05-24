import React from 'react';

const sections = [
  {
    title: 'Conference Details',
    description: 'Explore the schedule, speakers, and sessions of the International IT Conference.',
    bgColor: 'bg-red-700',
    image: 'https://via.placeholder.com/600x400?text=Details',
    link: '#',
  },
  {
    title: 'Registration',
    description: 'Secure your spot at the conference by registering today.',
    bgColor: 'bg-blue-700',
    image: 'https://via.placeholder.com/600x400?text=Register',
    link: '#',
  },
  {
    title: 'Speakers',
    description: 'Meet the industry leaders and experts speaking at our event.',
    bgColor: 'bg-green-700',
    image: 'https://via.placeholder.com/600x400?text=Speakers',
    link: '#',
  },
  {
    title: 'Sponsors & Partners',
    description: 'Discover the organizations supporting our conference.',
    bgColor: 'bg-yellow-600',
    image: 'https://via.placeholder.com/600x400?text=Sponsors',
    link: '#',
  },
];

const Home = () => {
  return (
    <div className="font-sans text-white">
      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage: 'url(https://via.placeholder.com/1600x900?text=Conference+Hero+Image)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="text-5xl md:text-7xl font-bold z-10 text-center px-4">
          Welcome to the International IT Conference
        </h1>
      </section>

      {/* Feature Sections */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {sections.map((section, index) => (
          <div key={index} className={`relative ${section.bgColor} overflow-hidden`}>
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: `url(${section.image})` }}
            ></div>
            <div className="relative p-6 h-full flex flex-col justify-center items-center text-center">
              <h2 className="text-2xl font-bold mb-3">{section.title}</h2>
              <p className="mb-4 text-sm">{section.description}</p>
              <a
                href={section.link}
                className="bg-white text-black px-4 py-2 text-sm rounded hover:bg-gray-100 transition"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
