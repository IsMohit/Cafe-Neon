import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-black from-blue-100 to-teal-100 text-white-700 pt-10 pb-16 shadow-xl">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Taste.it Section */}
          <div className="text-center md:text-center">
            <h2 className="text-3xl font-bold mb-4 text-red-900">Cafe Neone</h2>
            <p className="text-yellow-600 mb-4 leading-relaxed">
              Discover a world of exquisite flavors, where every dish tells a
              story. Join us for an unforgettable culinary experience.
            </p>
            <div className="flex justify-center md:justify-center space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 transition"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 transition"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 transition"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4 text-white">
              Quick Links
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="./home" className="hover:text-gray-900">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Menu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Open Hours Section */}
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4 text-white">
              Open Hours
            </h2>
            <ul className="text-yellow-600 space-y-2">
              <li className="flex justify-between">
                <span>Monday</span>
                <span>9:00 AM - 12:00 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Tuesday</span>
                <span>9:00 AM - 12:00 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Wednesday</span>
                <span>9:00 AM - 12:00 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Thursday</span>
                <span>9:00 AM - 12:00 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Friday</span>
                <span>9:00 AM - 2:00 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 2:00 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>

          {/* Location Section */}
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4 text-white">Location</h2>
            <p className="text-yellow-600 mb-4">
              K city Mall, Gurudwara Rd, Mahdevnagar, Kopargaon, Maharashtra
              423601
            </p>
            <div className="w-full h-40 bg-gray-300 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126766.89770022357!2d-81.3792361!3d28.5383355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77ab6c57d9c1b%3A0xa53c20b7e0cf1b93!2sOrlando%2C%20FL%2C%20USA!5e0!3m2!1sen!2s!4v1638354082007!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="w-full bg-gray-800 py-3 absolute bottom-0 inset-x-0 text-center text-gray-200">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Cafe-Neone | All rights reserved |
          Made with <FaHeart className="inline text-red-500" /> by Cafe-Neone
        </p>
      </div>
    </footer>
  );
};

export default Footer;
