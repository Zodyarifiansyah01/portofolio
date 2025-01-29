import React from "react";

const Footer = ({ menuItems }) => {
  return (
    <div className="bg-gray-800 text-white py-8 rounded-md">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us Section */}
          <div>
            <h5 className="text-xl font-semibold mb-2">About Us</h5>
            <p className="text-sm text-justify">
              Saya berkomitmen untuk memberikan hasil terbaik dengan fokus pada
              kualitas dan solusi inovatif yang sesuai dengan kebutuhan
              pengguna. serta memastikan kepuasan pengguna melalui dedikasi dan
              kreativitas.
            </p>
          </div>

          <div>
            <h5 className="text-xl font-semibold mb-2">Quick Links</h5>
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="  text-sm  hover:text-gray-400"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xl font-semibold mb-2">Contact</h5>
            <p className="text-sm">Email: zodyarifiansyah01gmail.com</p>
          </div>
        </div>

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
