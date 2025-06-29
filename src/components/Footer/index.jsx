import React from "react";
import { Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="px-6 py-12 border-t bg-accent-dark-brown"
      style={{ borderColor: "var(--color-secondary)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-secondary">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-text-primary">
                SpatioVista
              </span>
            </div>
            <p className="text-accent-dark-brown">
              Professional geospatial services and AI-powered surveying
              solutions for modern businesses.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-accent-dark-brown">
              Services
            </h3>
            <div className="space-y-2 text-sm">
              <a
                href="#"
                className="block text-text-tertiary hover:opacity-75 transition-opacity"
              >
                Geospatial Analysis
              </a>
              <a
                href="#"
                className="block text-text-tertiary hover:opacity-75 transition-opacity"
              >
                AI Survey App
              </a>
              <a
                href="#"
                className="block text-text-tertiary hover:opacity-75 transition-opacity"
              >
                Terrain Mapping
              </a>
              <a
                href="#"
                className="block text-text-tertiary hover:opacity-75 transition-opacity"
              >
                Dashboard Solutions
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-accent-dark-brown">
              Contact
            </h3>
            <div className="space-y-2 text-sm text-text-tertiary">
              <p>Email: spatiovista@gmail.com</p>
              <p>Phone: +92 301 6040703</p>
              <p>Address: Samanabad, Faisalabad</p>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t"
          style={{ borderColor: "var(--color-secondary)" }}
        >
          <div className="flex space-x-6 text-sm mb-4 md:mb-0">
            <a
              href="#"
              className="text-text-tertiary hover:opacity-75 transition-opacity"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-text-tertiary hover:opacity-75 transition-opacity"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-text-tertiary hover:opacity-75 transition-opacity"
            >
              Support
            </a>
            <a
              href="#"
              className="text-text-tertiary hover:opacity-75 transition-opacity"
            >
              Documentation
            </a>
          </div>
          <p className="text-sm text-text-tertiary">
            &copy; 2025 SpatioVista. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
