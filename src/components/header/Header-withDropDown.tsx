import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "@/wireframes/theme/theme-provider";
import { ThemeToggle } from "@/wireframes/theme/theme-toggle";
import { LangToggle } from "@/i18n/lang-toggle";
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { t } = useTranslation();
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
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      closeDropdown();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const themeBgClass = theme === "dark" ? "bg-gray-800" : "bg-white";
  const themeTextClass = theme === "dark" ? "text-white" : "text-gray-900";
  const themeDropdownBgClass = theme === "dark" ? "bg-gray-700" : "bg-white";
  const themeDropdownHoverClass = theme === "dark" ? "hover:bg-gray-600" : "hover:bg-gray-100";

  return (
    <nav className={`fixed top-0 w-full z-10 ${themeBgClass}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between border-b border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=violet&shade=500"
                alt="Your Company"
              />
            </div>
            <div className="hidden lg:ml-10 lg:block">
              <div className="flex space-x-4">
                <a href="#dashboard" className={`px-3 py-2 rounded-md text-sm font-medium ${themeTextClass} ${themeDropdownHoverClass}`}>
                  {t('header.dashboard')}
                </a>
                <a href="#jobs" className={`px-3 py-2 rounded-md text-sm font-medium ${themeTextClass} ${themeDropdownHoverClass}`}>
                  {t('header.jobs')}
                </a>
                <div className="relative" ref={dropdownRef}>
                  <a onClick={toggleDropdown} className={`px-3 py-2 rounded-md text-sm font-medium ${themeTextClass} ${themeDropdownHoverClass} flex items-center cursor-pointer`}>
                    {t('header.applicants')}
                    <svg className={`ml-1 h-4 w-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                  {dropdownOpen && (
                    <div className={`absolute mt-2 w-48 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 ${themeDropdownBgClass}`}>
                      <a href="#applicants1" className={`block px-4 py-2 text-sm ${themeTextClass} ${themeDropdownHoverClass}`}>
                        Applicants1
                      </a>
                      <a href="#applicants2" className={`block px-4 py-2 text-sm ${themeTextClass} ${themeDropdownHoverClass}`}>
                        Applicants2
                      </a>
                      <a href="#applicants3" className={`block px-4 py-2 text-sm ${themeTextClass} ${themeDropdownHoverClass}`}>
                        Applicants3
                      </a>
                    </div>
                  )}
                </div>
                <a href="#company" className={`px-3 py-2 rounded-md text-sm font-medium ${themeTextClass} ${themeDropdownHoverClass}`}>
                  {t('header.company')}
                </a>
                <ThemeToggle />
                <LangToggle />
              </div>
            </div>
          </div>
          <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="w-full max-w-lg lg:max-w-xs">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative text-gray-400 focus-within:text-gray-500">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  id="search"
                  className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 sm:text-sm"
                  placeholder="Search"
                  type="search"
                  name="search"
                />
              </div>
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
        </div>
      </div>

      {isOpen && (
        <div className={`lg:hidden ${themeBgClass}`}>
          <div className="space-y-1 px-2 pt-2 pb-3">
            <a
              href="#dashboard"
              className={`block px-3 py-2 rounded-md font-medium ${themeTextClass} ${themeDropdownHoverClass}`}
            >
              Dashboard
            </a>
            <a
              href="#jobs"
              className={`block px-3 py-2 rounded-md font-medium ${themeTextClass} ${themeDropdownHoverClass}`}
            >
              Jobs
            </a>
            <div className="relative">
              <a
                onClick={toggleDropdown}
                className={`block w-full text-left px-3 py-2 rounded-md font-medium ${themeTextClass} ${themeDropdownHoverClass} flex items-center cursor-pointer`}
              >
                Applicants
                <svg className={`ml-1 h-4 w-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              {dropdownOpen && (
                <div className={`ml-4 mt-2 space-y-1 ${themeDropdownBgClass}`}>
                  <a
                    href="#applicants1"
                    className={`block px-4 py-2 text-sm ${themeTextClass} ${themeDropdownHoverClass}`}
                  >
                    Applicants1
                  </a>
                  <a
                    href="#applicants2"
                    className={`block px-4 py-2 text-sm ${themeTextClass} ${themeDropdownHoverClass}`}
                  >
                    Applicants2
                  </a>
                  <a
                    href="#applicants3"
                    className={`block px-4 py-2 text-sm ${themeTextClass} ${themeDropdownHoverClass}`}
                  >
                    Applicants3
                  </a>
                </div>
              )}
            </div>
            <a
              href="#company"
              className={`block px-3 py-2 rounded-md font-medium ${themeTextClass} ${themeDropdownHoverClass}`}
            >
              Company
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
