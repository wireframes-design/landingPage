import { useTheme } from "@/wireframes/theme/theme-provider";
import VaniGuruLogo from "@/assets/images/vani-guru/logo1.png";
import ComponyLogo from "@/assets/images/logo/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  return (
    <section className="bg-background">
      <div className="container-fluid mx-auto px-4 pt-3 rounded-lg">
        <div className="flex flex-col sm:flex-row w-full justify-between items-center sm:items-start">
          {/* Logo Section */}
          <div className="flex-shrink-0 mb-4 sm:mb-0 text-center sm:text-left">
            <a href="#home">
              <img
                className="h-12 w-auto mx-auto sm:mx-0"
                src={theme === "dark" ? ComponyLogo : ComponyLogo}
                alt="Company Logo"
              />
            </a>
          </div>

          {/* Footer Links */}
          <div
            className={`flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-4 text-center sm:text-right `}
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
          <hr className="border-accent mb-2" />

          <p className="text-sm text-accent">
            {/* &copy; {currentYear} Vani. All rights reserved. */}
            &copy; {currentYear} Company Name. All rights reserved.
          </p>
          <p className="text-sm">
            <a
              href="/privacy-policy"
              className={`underline underline-offset-4 text-accent hover:text-accent `}
            >
              Privacy Policy
            </a>
            <span className="mx-2 text-accent">|</span>
            <a
              href="/terms-conditions"
              className={`underline underline-offset-4 text-accent hover:text-accent`}
            >
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
