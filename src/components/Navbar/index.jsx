import React, { useState } from "react";
import {
  Globe,
  Settings,
  Smartphone,
  GitCompare,
  Mail,
  Download,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="px-6 py-4 sticky top-0 z-50 backdrop-blur-lg bg-accent-dark-brown border-b shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: "#f4581f" }}
          >
            <Globe className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-[color:#f4581f]">
            SPATIOVISTA
          </span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#services"
            className="text-white hover:opacity-75 transition-opacity flex items-center space-x-2"
          >
            <Settings className="w-4 h-4" />
            <span>Services</span>
          </a>
          <a
            href="#app"
            className="text-white hover:opacity-75 transition-opacity flex items-center space-x-2"
          >
            <Smartphone className="w-4 h-4" />
            <span>Mobile App</span>
          </a>
          <a
            href="#comparison"
            className="text-white hover:opacity-75 transition-opacity flex items-center space-x-2"
          >
            <GitCompare className="w-4 h-4" />
            <span>Comparison</span>
          </a>
          <a
            href="#contact"
            className="text-white hover:opacity-75 transition-opacity flex items-center space-x-2"
          >
            <Mail className="w-4 h-4" />
            <span>Contact</span>
          </a>
          <button className="px-6 py-2 rounded border border-white text-white hover:opacity-75 transition-all flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Download App</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white hover:opacity-75 transition-opacity"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-white/20">
          <div className="flex flex-col space-y-4 pt-4">
            <a
              href="#services"
              className="text-white hover:opacity-75 transition-opacity flex items-center space-x-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Settings className="w-4 h-4" />
              <span>Services</span>
            </a>
            <a
              href="#app"
              className="text-white hover:opacity-75 transition-opacity flex items-center space-x-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Smartphone className="w-4 h-4" />
              <span>Mobile App</span>
            </a>
            <a
              href="#comparison"
              className="text-white hover:opacity-75 transition-opacity flex items-center space-x-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <GitCompare className="w-4 h-4" />
              <span>Comparison</span>
            </a>
            <a
              href="#contact"
              className="text-white hover:opacity-75 transition-opacity flex items-center space-x-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1NsaDwSCzweb6cdB1ME00RdtV3Sc7Nwfn/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded border border-white text-white hover:opacity-75 transition-all flex items-center space-x-2 w-fit"
            >
              <Download className="w-4 h-4" />
              <span>Download App</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
