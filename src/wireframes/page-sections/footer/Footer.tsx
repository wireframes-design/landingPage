import { useTheme } from "@/wireframes/theme/theme-provider";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  return (
    <footer
      className={`bg-${theme === "dark" ? "dark-bg" : "light-bg"} text-${
        theme === "dark" ? "dark-text" : "light-text"
      } py-8`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full lg:w-1/4 mb-4 lg:mb-0 text-center xl:text-left">
            <h5 className="text-lg font-bold mb-2">Vani</h5>
            <p className="text-sm">
              Leading the industry with innovative solutions and exceptional
              service.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full lg:w-1/4 mb-4 lg:mb-0 text-center xl:text-left">
            <h5 className="text-lg font-bold mb-2">Quick Links</h5>
            <ul className="flex flex-col lg:flex-row justify-center xl:justify-start text-center">
              <li className="mr-4 mb-2 lg:mb-0">
                <a href="#contact" className="text-sm hover:underline">
                  Contact Us
                </a>
              </li>
              <li className="mr-4 mb-2 lg:mb-0">
                <a href="#about" className="text-sm hover:underline">
                  About Us
                </a>
              </li>
              <li className="mr-4 mb-2 lg:mb-0">
                <a href="#services" className="text-sm hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#careers" className="text-sm hover:underline">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          {/* Social Media Links */}
          <div className="w-full lg:w-1/4 mb-4 lg:mb-0 text-center xl:text-left">
            <h5 className="text-lg font-bold mb-2">Follow Us</h5>
            <div className="flex justify-center xl:justify-start space-x-4">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="hover:text-gray-700"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="hover:text-gray-700"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="hover:text-gray-700"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="hover:text-gray-700"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Legal Info */}
        <div className="mt-8 text-center">
          <hr className="border-gray-300 mb-6" />

          <p className="text-sm">
            &copy; {currentYear} Vani. All rights
            reserved.
          </p>
          <p className="text-sm">
            <a href="#privacy" className="hover:underline">
              Privacy Policy
            </a>
            <span className="mx-2">|</span>
            <a href="#terms" className="hover:underline">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
