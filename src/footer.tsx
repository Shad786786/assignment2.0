import React from "react";
import ProfileCard from "./profilecard";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[rgb(18,12,30)] text-white lg:grid lg:grid-cols-5 pb-30 py-30">
     <div className="hidden lg:block relative ml-30 h-32 lg:col-span-2 lg:h-full">
  
</div>


      <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p>
              <span className="text-xs tracking-wide text-gray-400 uppercase">Call us</span>
              <a
                href="#"
                className="block text-2xl font-semibold text-white hover:text-gray-300 sm:text-3xl"
              >
                +917295005185
              </a>
            </p>

            <ul className="mt-8 space-y-1 text-sm text-gray-300">
              <li>Monday to Friday: 10am - 5pm</li>
              <li>Weekend: 10am - 3pm</li>
            </ul>

            <ul className="mt-8 flex gap-6">
              {[
                { label: "Facebook", iconURL: "src/images/icons8-facebook-250.png", href: "#" },
                { label: "Instagram", iconURL: "src/images/icons8-instagram-250 (1).png", href: "#" },
                { label: "X", iconURL: "src/images/icons8-x-96.png", href: "#" },
                { label: "GitHub", iconURL: "src/images/icons8-github-650.png", href: "https://github.com/Shad786786" },
                { label: "LinkedIn", iconURL: "src/images/icons8-linkedin-500.png", href: "https://www.linkedin.com/in/shad-ahmad-siddiqui-b763b5258" },
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-300 hover:text-gray-400 transition"
                  >
                    <span className="sr-only">{item.label}</span>
                    <img
                           src={item.iconURL}
                           alt={item.label}
                           className="w-6 h-6 object-contain hover:scale-110 transition-transform"
                        />
                     
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p className="font-medium text-white">Quick Links</p>
              <ul className="mt-6 space-y-4 text-sm">
                {[
                  "Home",
                  "Materials",
                  "Highlights",
                  "Connect",
                ].map((service, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-gray-400 transition"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-medium text-white">Company</p>
              <ul className="mt-6 space-y-4 text-sm">
                {["About", "Meet the Team", "Accounts Review"].map((item, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-gray-400 transition"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-12">
          <div className="sm:flex sm:items-center sm:justify-between">
            <ul className="flex flex-wrap gap-4 text-xs text-gray-400">
              {["Terms & Conditions", "Privacy Policy", "Cookies"].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-gray-300 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-xs text-gray-400 sm:mt-0">
              &copy; 2022. EDUTECHNE. All rights reserved.
            </p>
          </div>
        </div>
         <div className=" text-4xl font-bold text-blue-700 tracking-tight py-2">
              EDU<span className="text-gray-500">TECHNE</span>
            </div>
      </div>
    </footer>
  );
};

export default Footer;
