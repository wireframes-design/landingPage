import { useTheme } from "@/wireframes/theme/theme-provider";
import React from "react";

const PreFooterWithSocialIcons = () => {
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

          {/* Social Media Links */}
          <div className="w-full lg:w-1/3 mb-4 lg:mb-0 text-center">
            <nav className="flex flex-wrap justify-center space-x-4">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="hover:text-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                  fill="currentColor"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.81v-9.294H9.692V11.29h3.117V8.742c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.464.099 2.797.143v3.245l-1.919.001c-1.505 0-1.795.715-1.795 1.764v2.311h3.587l-.467 3.416h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.324V1.325C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="hover:text-blue-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                  fill="currentColor"
                >
                  <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.574 2.163-2.724-.949.564-2.003.974-3.127 1.195-.896-.957-2.173-1.555-3.594-1.555-2.723 0-4.926 2.203-4.926 4.917 0 .39.045.765.127 1.124-4.093-.205-7.719-2.164-10.148-5.144-.424.729-.666 1.577-.666 2.482 0 1.71.87 3.217 2.188 4.098-.807-.026-1.566-.247-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.316 0-.624-.03-.927-.086.631 1.953 2.445 3.374 4.604 3.414-1.68 1.316-3.809 2.103-6.115 2.103-.398 0-.79-.023-1.175-.068 2.179 1.396 4.768 2.212 7.548 2.212 9.054 0 14-7.497 14-13.986 0-.209 0-.42-.015-.63.961-.694 1.8-1.562 2.462-2.549z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="hover:text-pink-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.333 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.257 0-3.667.013-4.947.072-1.276.058-2.556.338-3.509 1.292-.953.953-1.233 2.233-1.292 3.509-.059 1.28-.072 1.69-.072 4.947s.013 3.667.072 4.947c.058 1.276.338 2.556 1.292 3.509.953.953 2.233 1.233 3.509 1.292 1.28.059 1.69.072 4.947.072s3.667-.013 4.947-.072c1.276-.058 2.556-.338 3.509-1.292.953-.953 1.233-2.233 1.292-3.509.059-1.28.072-1.69.072-4.947s-.013-3.667-.072-4.947c-.058-1.276-.338-2.556-1.292-3.509-.953-.953-2.233-1.233-3.509-1.292-1.28-.059-1.69-.072-4.947-.072zm0 5.838c-3.403 0-6.163 2.76-6.163 6.163s2.76 6.163 6.163 6.163 6.163-2.76 6.163-6.163-2.76-6.163-6.163-6.163zm0 10.137c-2.193 0-3.975-1.782-3.975-3.975s1.782-3.975 3.975-3.975 3.975 1.782 3.975 3.975-1.782 3.975-3.975 3.975zm6.406-11.845c0 .796-.646 1.442-1.442 1.442s-1.442-.646-1.442-1.442.646-1.442 1.442-1.442 1.442.646 1.442 1.442z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="hover:text-blue-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5zm3.75 4.813c.906 0 1.576.643 1.75 1.531h.063V15h-2.875V9.344c0-.781.5-1.531 1.438-1.531zm1.625 7.625v-4.875H13.5v4.875h-2.125zM7.625 8.25a.625.625 0 1 1 0-1.25.625.625 0 0 1 0 1.25zm.625 7.625h2.125v-4.875H8.25v4.875z"
                    clipRule="evenodd"
                  />
                </svg>
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

export default PreFooterWithSocialIcons;
