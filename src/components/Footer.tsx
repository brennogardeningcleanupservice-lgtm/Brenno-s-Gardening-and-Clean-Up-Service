import React from "react";
import { Leaf, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-gray-800 pb-12">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, "#home")}
              className="flex items-center gap-2 mb-6"
            >
              <Leaf className="h-8 w-8 text-emerald-500" />
              <span className="font-bold text-xl text-white tracking-tight">
                Brenno's <span className="text-emerald-500">Gardening</span>
              </span>
            </a>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional gardening and property clean-up services for
              homeowners, landlords, and real estate agents in the Western
              Suburbs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">
              Quick Links
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#home"
                  onClick={(e) => scrollToSection(e, "#home")}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => scrollToSection(e, "#services")}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => scrollToSection(e, "#about")}
                  className="hover:text-emerald-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => scrollToSection(e, "#pricing")}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "#contact")}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">
              Our Services
            </h4>
            <ul className="space-y-4">
              <li className="text-gray-400">Garden Cleanups</li>
              <li className="text-gray-400">Hedge Trimming</li>
              <li className="text-gray-400">Weeding & Pruning</li>
              <li className="text-gray-400">Green Waste Removal</li>
              <li className="text-gray-400">Yard Maintenance</li>
              <li className="text-gray-400">End of Lease Cleanups</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+61439646490"
                  className="hover:text-emerald-400 transition-colors"
                >
                  0439 646 490
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:brenno.gardeningcleanupservice@gmail.com"
                  className="hover:text-emerald-400 transition-colors break-all"
                >
                  brenno.gardeningcleanupservice@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>Nedlands & Western Suburbs, WA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>
            &copy; {currentYear} Brenno's Gardening and Clean Up Services. All
            rights reserved.
          </p>
          <p>Designed for local growth.</p>
        </div>
      </div>
    </footer>
  );
}
