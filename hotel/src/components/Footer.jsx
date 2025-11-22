import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 pt-[50px]">
      {/* Main Footer Content */}
      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <div className="flex flex-col items-start space-y-4 mb-4">
                  <div className="inline-block">
                    <img
                      src={logo}
                      className="max-w-full h-auto w-40"
                      alt="Footer Logo"
                    />
                  </div>
                </div>
                <div className="mb-4 pr-0 lg:pr-4">
                  <p className="text-gray-600 leading-relaxed">
                    We make your dream more beautiful & enjoyful with lots of
                    happiness.
                  </p>
                </div>
                <div className="social-links">
                  <ul className="flex space-x-3">
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <i className="fa-brands fa-facebook text-lg"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <i className="fa-brands fa-linkedin text-lg"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-red-600 transition-colors"
                      >
                        <i className="fa-brands fa-google-plus text-lg"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <i className="fa-brands fa-twitter text-lg"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-pink-600 transition-colors"
                      >
                        <i className="fa-brands fa-dribbble text-lg"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h4 className="text-gray-800 font-semibold mb-4 text-lg">
                  The Navigation
                </h4>
                <ul className="space-y-2">
                  {[
                    "Talent Marketplace",
                    "Payroll Services",
                    "Direct Contracts",
                    "Hire Worldwide",
                    "Hire in the USA",
                    "How to Hire",
                  ].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Resources */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h4 className="text-gray-800 font-semibold mb-4 text-lg">
                  Our Resources
                </h4>
                <ul className="space-y-2">
                  {[
                    "Free Business tools",
                    "Affiliate Program",
                    "Success Stories",
                    "Upwork Reviews",
                    "Resources",
                    "Help & Support",
                  ].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Company */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h4 className="text-gray-800 font-semibold mb-4 text-lg">
                  The Company
                </h4>
                <ul className="space-y-2">
                  {[
                    "About Us",
                    "Leadership",
                    "Contact Us",
                    "Investor Relations",
                    "Trust, Safety & Security",
                  ].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Payment Methods & Partners */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h4 className="text-gray-800 font-semibold mb-4 text-lg">
                  Payment Methods
                </h4>
                <div className="mb-4">
                  <img
                    src="assets/img/payment.png"
                    className="max-w-full h-auto"
                    alt="Payment Methods"
                  />
                </div>
                <div className="mt-6">
                  <div className="mb-3">
                    <p className="text-gray-500 font-medium">Our Partners</p>
                  </div>
                  <div className="flex items-center justify-start space-x-4">
                    <div className="pr-4">
                      <img
                        src="assets/img/mytrip.png"
                        className="max-w-full h-auto"
                        alt="MyTrip"
                      />
                    </div>
                    <div className="pr-4">
                      <img
                        src="assets/img/logo.png"
                        className="max-w-full h-auto"
                        alt="TripAdvisor"
                      />
                    </div>
                    <div className="pr-4">
                      <img
                        src="assets/img/goibibo.png"
                        className="max-w-full h-auto"
                        alt="Goibibo"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-200 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600 text-sm">
                © 2025 GeoTrip Design by Themezhub.
              </p>
            </div>

            <div className="flex justify-start md:justify-end">
              <ul className="flex space-x-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Terms of services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Privacy Policies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
