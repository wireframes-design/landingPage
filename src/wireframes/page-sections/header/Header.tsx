import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "@/wireframes/theme/theme-provider";
import { ThemeToggle } from "@/wireframes/theme/theme-toggle";
import { LangToggle } from "@/i18n/lang-toggle";
// import { useTranslation } from 'react-i18next';
import LightLogo from "@/assets/images/logo/logo-light.webp";
import DarkLogo from "@/assets/images/logo/logo-dark.webp";

const Header: React.FC = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // const { t } = useTranslation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      closeDropdown();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const themeBgClass = theme === "dark" ? "bg-blake" : "bg-white";

  return (
    <nav
      className={`fixed top-0 w-full z-10 ${themeBgClass}`}
      style={{ zIndex: "1" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between border-b border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#home">
                <img
                  className="h-8 w-auto"
                  src={theme === "dark" ? LightLogo : DarkLogo}
                  alt="Company Logo"
                />
              </a>
            </div>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                ></path>
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:items-center">
            <div className="p-1">{/* <LangToggle /> */}</div>
            <div className="p-1">{/* <ThemeToggle /> */}</div>
          </div>
        </div>
      </div>

      {/* {isOpen && (
        <div className={`lg:hidden ${themeBgClass}`}>
          <div className="px-4 pt-4 pb-2 flex">
            <div className="p-1">
              <LangToggle />
            </div>
            <div className="p-1">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )} */}
    </nav>
  );
};

export default Header;
