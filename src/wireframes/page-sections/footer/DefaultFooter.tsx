import { useTheme } from "@/wireframes/theme/theme-provider";
import LightLogo from "@/assets/images/logo/logo-light.webp";
import DarkLogo from "@/assets/images/logo/logo-dark.webp";
import React from "react";

const DefaultFooter = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  const themeBgClass = theme === "dark" ? "bg-black" : "bg-white";
  const themeTextClass = theme === "dark" ? "text-white" : "text-black";
  const themeHoverTextClass =
    theme === "dark" ? "hover:text-gray-300" : "hover:text-gray-500";

  return (
    <section
      className={`bg-${theme === "dark" ? "dark-bg" : "light-bg"} text-${
        theme === "dark" ? "dark-text" : "light-text"
      } py-2 border border-black-500`}
    >
      <div className="container-fluid mx-auto px-4 pt-3 rounded-lg">
        <div className="flex flex-col sm:flex-row w-full justify-between items-center sm:items-start">
          {/* Logo Section */}
          <div className="flex-shrink-0 mb-4 sm:mb-0 text-center sm:text-left">
            <a href="#home">
              <img
                className="h-8 w-auto mx-auto sm:mx-0"
                src={theme === "dark" ? LightLogo : DarkLogo}
                alt="Company Logo"
              />
            </a>
          </div>

          {/* Footer Links */}
          <div
            className={`flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-4 text-center sm:text-right ${themeHoverTextClass}`}
          >
            {/* <a
              href="#about-us"
              className={`${themeTextClass} py-2 px-4 rounded decoration-none ${themeHoverTextClass}`}
            >
              About Us
            </a>
            <a
              href="#services"
              className={`${themeTextClass} py-2 px-4 rounded ${themeHoverTextClass}`}
            >
              Services
            </a>
            {/* <a
              href="#clients"
              className={`${themeTextClass} py-2 px-4 rounded ${themeHoverTextClass}`}
            >
              Clients
            </a> */}
            {/* <a
              href="/contact-us"
              className={`${themeTextClass} py-2 px-4 rounded ${themeHoverTextClass}`}
            >
              Contact Us
            </a> */}
          </div>
        </div>
        {/* Legal Info */}
        <div className="mt-2 text-center pb-3">
          <hr className="border-gray-300 mb-2" />

          <p className="text-sm">
            &copy; {currentYear} Vani. All rights
            reserved.
          </p>
          <p className="text-sm">
            <a
              href="/privacy-policy"
              className={`hover:underline ${themeTextClass} ${themeHoverTextClass}`}
            >
              Privacy Policy
            </a>
            <span className="mx-2">|</span>
            <a
              href="/privacy-policy"
              className={`hover:underline ${themeTextClass} ${themeHoverTextClass}`}
            >
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default DefaultFooter;
