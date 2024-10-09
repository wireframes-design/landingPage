import { useTheme } from "@/wireframes/theme/theme-provider";
import React from "react";

const FooterWithLinks = () => {
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
            <h5 className="text-lg font-bold mb-2 text-center">Quick Links</h5>
            <ul className="flex flex-col justify-center xl:justify-start text-center">
              <li className="mb-2">
                <a href="#contact" className="text-sm hover:underline">
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#about" className="text-sm hover:underline">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#services" className="text-sm hover:underline">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#careers" className="text-sm hover:underline">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full lg:w-1/4 mb-4 lg:mb-0 text-center xl:text-center">
            <h5 className="text-lg font-bold mb-2">Follow Us</h5>
            <div className="flex lg:flex-col justify-center xl:justify-center space-y-3 space-x-3 text-center align-center">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="text-sm hover:text-gray-700 mt-3 xs:mt-3 sm:mt-3 md:mt-3 lg:mt-0"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="text-sm hover:text-gray-700"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="text-sm hover:text-gray-700"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="text-sm hover:text-gray-700"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Get In Touch Section */}
          <div className="w-full lg:w-1/4 mb-4 lg:mb-0 md:mb-0 text-center md:text-center">
            <h5 className="text-lg font-bold mb-2">Get In Touch</h5>
            <p className="text-sm mb-2">
              Ghatate Building, Besides Care Hospital,
              <br />
              Ramdaspeth, Nagpur - 440010.
            </p>
            <p className="text-sm">
              <strong>Email:</strong> info@example.com
              <br />
              <strong>Phone:</strong> +1 234 567 890
            </p>
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

export default FooterWithLinks;
