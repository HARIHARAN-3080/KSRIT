import React from 'react';
import { Link } from 'react-router-dom';

const socialLinks = [
  {
    href: "https://www.instagram.com/yourcollege",
    label: "Instagram",
    icon: (
      <svg
        className="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.88a1.12 1.12 0 11-2.25 0 1.12 1.12 0 012.25 0z" />
      </svg>
    ),
    hoverColor: "hover:bg-pink-500",
  },
  {
    href: "https://wa.me/919842743080",
    label: "WhatsApp",
    icon: (
      <svg
        className="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M20.52 3.48a11.88 11.88 0 00-16.8 0 11.97 11.97 0 00-3.3 8.43 11.97 11.97 0 003.3 8.42l-1.72 5.06 5.16-1.64a11.92 11.92 0 008.3 2.28 12 12 0 0011.96-11.96 11.92 11.92 0 00-3.9-8.59zm-8.51 15.27a8.04 8.04 0 01-4.48-1.27l-.32-.19-2.65.84.85-2.59-.2-.33a8.11 8.11 0 111.89 3.55zm4.7-2.22c-.26-.13-1.55-.77-1.79-.86s-.41-.13-.59.13-.68.86-.84 1.04-.31.19-.58.06a7.09 7.09 0 01-2.1-1.3 7.92 7.92 0 01-1.46-1.82c-.15-.25 0-.38.12-.51s.26-.31.39-.47a1.16 1.16 0 00.19-.31.49.49 0 000-.47c0-.13-.58-1.39-.8-1.9s-.42-.44-.58-.45-.38 0-.58 0a1.15 1.15 0 00-.85.41 3.62 3.62 0 00-1.11 2.7c0 1.58.91 3.11 2.07 4.08a7.05 7.05 0 003.51 1.84 3.51 3.51 0 002.15.02 2.86 2.86 0 001.75-1.37c.13-.22.13-.4.09-.45s-.26-.13-.53-.25z" />
      </svg>
    ),
    hoverColor: "hover:bg-green-500",
  },
  {
    href: "https://www.facebook.com/yourcollege",
    label: "Facebook",
    icon: (
      <svg
        className="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M22 12.07C22 6.52 17.52 2 12 2S2 6.52 2 12.07c0 4.99 3.66 9.13 8.44 9.88v-6.99h-2.54v-2.89h2.54v-2.21c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.46h-1.25c-1.23 0-1.62.77-1.62 1.56v1.9h2.77l-.44 2.89h-2.33v6.99C18.34 21.2 22 17.06 22 12.07z" />
      </svg>
    ),
    hoverColor: "hover:bg-blue-600",
  },
  {
    href: "https://www.yourcollege.edu",
    label: "Website",
    icon: (
      <svg
        className="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm5.27 15.22a7.68 7.68 0 01-10.48 0 8.03 8.03 0 010-11.31 7.68 7.68 0 0110.48 0 8.03 8.03 0 010 11.31zM12 7.75a4.25 4.25 0 100 8.5 4.25 4.25 0 000-8.5z" />
      </svg>
    ),
    hoverColor: "hover:bg-yellow-400",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#061e3e] text-gray-200 py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* About */}
        <div className="space-y-2">
          <h2 className="text-lg font-extrabold text-yellow-400 tracking-wide">
            About the Conference
          </h2>
          <p className="text-gray-300 leading-snug text-sm max-w-md">
            Our international conference brings together innovators, researchers, and students to collaborate and exchange ideas in cutting-edge technology fields. Hosted by the IT Department of [Your College Name].
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-extrabold text-yellow-400 tracking-wide mb-3">
            Quick Links
          </h2>
          <ul className="space-y-2 text-sm font-medium">
            <li>
              <Link
                to="/"
                className="text-gray-200 hover:text-[#fb923c] transition-transform duration-150 hover:scale-105"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="text-gray-200 hover:text-[#fb923c] transition-transform duration-150 hover:scale-105"
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                to="/updates"
                className="text-gray-200 hover:text-[#fb923c] transition-transform duration-150 hover:scale-105"
              >
                Updates
              </Link>
            </li>
            <li>
              <Link
                to="/department"
                className="text-gray-200 hover:text-[#fb923c] transition-transform duration-150 hover:scale-105"
              >
                Department
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="space-y-4">
          <h2 className="text-lg font-extrabold text-yellow-400 tracking-wide mb-1">
            Contact & Connect
          </h2>
          <p className="text-gray-300 text-sm">
            Email: <a href="mailto:conference@yourcollege.edu" className="hover:text-[#fb923c]">conference@yourcollege.edu</a>
          </p>
          <p className="text-gray-300 text-sm mb-4">
            Phone: <a href="tel:+911234567890" className="hover:text-[#fb923c]">+91 12345 67890</a>
          </p>
          <div className="flex space-x-3">
            {socialLinks.map(({ href, label, icon, hoverColor }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`p-2 rounded-full bg-[#17375e] hover:text-white transition-colors duration-200 ${hoverColor}`}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-6 border-t border-gray-700 pt-3 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} IT Department | Designed with ❤️ by Students | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
