import { useTheme } from "@/wireframes/theme/theme-provider";
import React from "react";

const PreFooterWithLinks = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`bg-${theme === "dark" ? "dark-bg" : "light-bg"} text-${
        theme === "dark" ? "dark-text" : "light-text"
      } py-8`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Pre-Footer Text */}
          <div className="w-full lg:w-1/3 mb-4 lg:mb-0 text-center lg:text-left">
            <h2 className="text-2xl font-bold mb-2">Stay Updated!</h2>
            <p className="text-sm">
              Subscribe to our newsletter to get the latest updates and offers.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full lg:w-1/3 mb-4 lg:mb-0 text-center">
            <nav className="flex flex-wrap justify-center">
              <a href="#contact" className="text-sm hover:underline mx-2">
                Contact Us
              </a>
              <a href="#about" className="text-sm hover:underline mx-2">
                About Us
              </a>
              <a href="#services" className="text-sm hover:underline mx-2">
                Services
              </a>

              <a href="#careers" className="text-sm hover:underline mx-2">
                Careers
              </a>
            </nav>
          </div>

          {/* Call-to-Action Button */}
          <div className="w-full lg:w-1/3 text-center lg:text-right">
            <a
              href="#subscribe"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Subscribe Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreFooterWithLinks;
