import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "@/wireframes/theme/theme-provider";

import { useTranslation } from "react-i18next";
import ComponyLogo from "@/assets/images/logo/logo.png";
import { Button } from "@/components/ui/button";

import { AnimatedSubscribeButton } from "../magicui/animated-subscribe-button";
import { CheckIcon, ChevronRightIcon } from "@radix-ui/react-icons";

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

  const themeBgClass = theme === "dark" ? "bg-black" : "bg-white";

  return (
    <nav
      className={`fixed top-0 left-0 w-full  bg-background`}
      style={{ zIndex: 10, height: "4rem" }}
    >
      <div className="container-fluid mx-auto px-4 sm:px-6 lg:px-8 bg-background">
        <div className="relative flex h-16 items-center justify-between border-b border-accent">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/">
                <div className="flex items-center">
                  <img
                    className="h-12 w-auto"
                    src={theme === "dark" ? ComponyLogo : ComponyLogo}
                    alt="Company Logo"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="flex items-center lg:hidden">
            <div className="p-1 ml-2">
              {/* <a href="/">
            <img className="h-10 w-auto" src={PlaystoreIcon} alt=""  />
            </a> */}
              {/* <AnimatedSubscribeButton
                buttonColor="#009688"
                buttonTextColor="#ffffff"
                subscribeStatus={false}
                initialText={
                  <span className="group inline-flex items-center">
                    Download{" "}
                    <ChevronRightIcon className="ml-1 h-3 w-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                }
                changeText={
                  <span className="group inline-flex items-center">
                    <CheckIcon className="mr-2 h-3 w-2" />
                    Download{" "}
                  </span>
                }
              /> */}
              {/* <ThemeToggle /> */}
            </div>
            <Button
              variant="outline"
              size="icon"
              type="button"
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center rounded-md  p-2 focus:outline-none focus:border-accent hover:border-accent hover:bg-accent bg-accent rounded-full`}
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
            </Button>
            {/* <div className="p-1 ml-2">
            <a href="/">
            <img className="h-10 w-auto" src={PlaystoreIcon} alt=""  />
            </a>/}
              {/* <ThemeToggle /> */}
            {/* </div> */}
          </div>
          {/* Mobile menu */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } lg:hidden absolute top-16 w-full bg-secondary text-accent`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* <a
                href="/"
                className={`block px-3 py-2 rounded-md text-accent font-medium hover:text-accent`}
              >
                Home
              </a> */}
              {/* <a
                // href="/about-us"
                href="#about-us"
                className={`block px-3 py-2 rounded-md text-accent font-medium hover:text-accent`}
              >
                About Us
              </a> */}
              {/* <a
                // href="#our-teams"
                className={`block px-3 py-2 rounded-md text-accent  font-medium hover:text-accent`}
              >
              Teams
              </a> */}
              {/* <a
                // href="#contact-us"
                className={`block px-3 py-2 rounded-md text-accent font-medium hover:text-accent`}
              >
                Contact Us
              </a> */}
              {/* <a
                // href="#vote"
                className={`block px-3 py-2 rounded-md text-accent font-medium hover:text-accent`}
              >
                Vote Us
              </a> */}
            </div>
          </div>
          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:justify-end xl:justify-end">
            <div className="space-x-4">
              {/* <a
                href="/"
                className={`px-3 py-2 rounded-md text-accent text-sm font-medium hover:text-accent`}
              >
                Home
              </a> */}
              {/* <a
                // href="/about-us"
                // href="#about-us"
                className={`px-3 py-2 rounded-md text-accent text-sm font-medium hover:text-accent`}
              >
                About Us
              </a> */}
              {/* <a
                // href="#our-teams"
                className={`px-3 py-2 rounded-md text-accent text-sm font-medium hover:text-accent`}
              >
               Teams
              </a> */}
              {/* <a
                // href="#contact-us"
                className={`px-3 py-2 rounded-md text-accent text-sm font-medium hover:text-accent`}
              >
                Contact Us
              </a> */}
              {/* <a
                // href="#vote"
                className={`px-3 py-2 rounded-md text-accent text-sm font-medium hover:text-accent`}
              >
                Vote Us
              </a> */}
            </div>
          </div>
          <div className="hidden lg:flex lg:items-center">
            <div className="p-1 mt-2">
              {/* <AnimatedSubscribeButton
                buttonColor="#009688"
                buttonTextColor="#ffffff"
                subscribeStatus={false}
                initialText={
                  <span className="group inline-flex items-center">
                    Download{" "}
                    <ChevronRightIcon className="ml-1 h-3 w-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                }
                changeText={
                  <span className="group inline-flex items-center">
                    <CheckIcon className="mr-2 h-3 w-2" />
                    Download{" "}
                  </span>
                }
              /> */}
              <div>
              <a  href="/login">
                  <Button
                    className="bg-accent px-3 py-5 text-secondary hover:bg-secondary hover:text-accent rounded-full text-sm md:text-md w-24"
                   
                  >
                    Login
                  </Button>
                  </a>
                </div>
              {/* <a href="/">
            <img className="h-10 w-auto" src={PlaystoreIcon} alt=""  />
            </a> */}
              {/* <ThemeToggle /> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
