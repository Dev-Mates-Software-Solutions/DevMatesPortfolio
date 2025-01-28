import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full text-white py-16 relative" id="contact">
      {/* Background Design */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/footer-grid.svg"
          alt="Background Grid"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-3xl lg:text-4xl font-bold">
            Ready to take <span className="text-purple-500">your</span> digital
            presence to the next level?
          </h1>
          <p className="text-gray-400 mt-4">
            Reach out to us today, and let&apos;s discuss how we can help you
            achieve your goals.
          </p>

          {/* Feedback Form */}
          <form className="mt-8 flex flex-col gap-4 items-center w-full max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 bg-gray-800 text-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 bg-gray-800 text-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full px-4 py-2 bg-gray-800 text-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
            ></textarea>
            <button className="m-2 inline-block">
              <MagicButton
                title="Let's Get in Touch"
                icon={<FaLocationArrow />}
                position="right"
              />
            </button>
          </form>

          {/* Call to Action Button */}
        </div>

        {/* Footer Sections */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">About DevMates</h3>
            <p className="text-gray-400 leading-relaxed">
              DevMates is a software development company dedicated to delivering
              top-tier digital solutions. Our expertise includes web
              development, mobile apps, and software engineering.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#about"
                  className="hover:text-purple-500 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-purple-500 transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-purple-500 transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-purple-500 transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <p className="text-gray-400 leading-relaxed">
              Email:{" "}
              <a
                href="devmates03@gmail.com"
                className="text-purple-500 hover:underline"
              >
                devmates03@gmail.com
              </a>
            </p>
            <p className="text-gray-400 mt-2">Phone: +94 72 831 4164</p>
            <p className="text-gray-400 mt-2 leading-relaxed">
              Address: Hanhamuna, Maspotha, Kurunegala, Sri Lanka
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              Subscribe to Our Newsletter
            </h3>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 text-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-sm text-gray-400 text-center md:text-left">
            &copy; 2025 DevMates. All rights reserved.
          </p>

          {/* Social Media */}
          <div className="flex gap-4 mt-6 md:mt-0">
            {socialMedia.map((info) => (
              <a
                key={info.id}
                // href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex justify-center items-center bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
              >
                <img src={info.img} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
