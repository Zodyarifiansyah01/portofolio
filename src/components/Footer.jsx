import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-8 rounded-md">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us Section */}
          <div>
            <h5 className="text-xl font-semibold mb-2">About Us</h5>
            <p className="text-sm">
              We are a company that cares about delivering the best products for
              our customers. Our mission is to provide high-quality goods at
              affordable prices.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h5 className="text-xl font-semibold mb-2">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h5 className="text-xl font-semibold mb-2">Contact</h5>
            <p className="text-sm">Email: zodyarifiansyah01gmail.com</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center">
          <p className="text-sm">
            &copy; 2025 Arifiansyah. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
