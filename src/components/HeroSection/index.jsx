import React, { useEffect, useState } from "react";
import { Globe, BarChart3, Satellite, ArrowRight, Bot } from "lucide-react";
import SpinningGlobe from "../../components/SpinningGlobe";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Coverage",
      desc: "Accurate satellite imagery and global GIS data.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Geo Analytics",
      desc: "ML-powered spatial insights and real-time layers.",
    },
    {
      icon: <Satellite className="w-8 h-8" />,
      title: "Live Mapping",
      desc: "Stream spatial data with zero lag & high precision.",
    },
  ];

  return (
    <div className="pt-22 w-full px-4 sm:px-6 lg:px-8 relative min-h-auto ">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div
          className={`transform transition-all duration-1000 text-center mb-8 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-20 opacity-0"
          }`}
        >
          <div className="mb-6 ">
            <div className="text-4xl sm:text-5xl font-bold mb-4 text-primary">
              Map the future
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-primary">
              with{" "}
              <span className="text-text-secondary text-4xl sm:text-5xl">
                SpatioVista
              </span>
            </div>
          </div>

          <div>
            <p className="text-base sm:text-lg mb-4 text-[color:var(--color-accent-dark-brown)] max-w-md mx-auto">
              Outdated maps, fragmented data, and disconnected platforms
              threaten the accuracy of geographic systems.
            </p>
            <div className="w-16 h-1 mb-4 bg-secondary mx-auto"></div>
            <p className="text-base sm:text-lg text-[color:var(--color-accent-dark-brown)] max-w-md mx-auto">
              It's time to modernize the way we map, measure, and manage the
              world.
            </p>
          </div>
        </div>

        {/* Globe for mobile */}
        <div className="flex justify-center ">
          <div className="scale-75 sm:scale-100">
            <SpinningGlobe />
          </div>
        </div>

        {/* Second section for mobile */}
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl mb-4 text-text-secondary">
              Unlock the Power of
            </h3>
            <h1 className="text-3xl sm:text-4xl font-bold text-primary">
              Spatial Data
            </h1>
            <h2 className="text-text-secondary text-3xl sm:text-4xl">
              with AI
            </h2>
          </div>
          <div className="w-16 h-1 mb-4 bg-secondary mx-auto"></div>
          <p className="text-accent-dark-brown text-base sm:text-lg max-w-md mx-auto mb-8">
            From urban planning to climate response, our AI turns spatial
            complexity into clear decisions.
          </p>

          <a
            href="#contact"
            className="bg-secondary text-background px-6 py-3 font-semibold rounded-lg hover:scale-105 transition-transform duration-300 flex items-center gap-2 shadow-md mx-auto"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex flex-row">
        <div
          className={`ml-20 transform transition-all duration-1000 w-1/3 ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-20 opacity-0"
          }`}
        >
          <div className="mb-6">
            <div className="text-6xl lg:text-7xl font-bold mb-4 text-primary">
              Map the future
            </div>
            <div className="text-4xl lg:text-6xl font-bold text-primary mb-10">
              with{" "}
              <span className="text-text-secondary z-10 text-4xl lg:text-8xl ">
                SpatioVista
              </span>
            </div>
          </div>
          <div className="mb-8">
            <p className="text-lg mb-4 text-[color:var(--color-accent-dark-brown)]">
              Outdated maps, fragmented data, and disconnected platforms
              threaten the accuracy of geographic systems.
            </p>
            <div className="w-16 h-1 mb-4 bg-secondary"></div>
            <p className="text-lg text-[color:var(--color-accent-dark-brown)]">
              It's time to modernize the way we map, measure, and manage the
              world.
            </p>
            <a
              href="#contact"
              className="bg-secondary mt-10 text-background px-6 py-3 font-semibold rounded-lg w-max hover:scale-105 transition-transform duration-300 flex items-center gap-2 shadow-md"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="absolute left-1/2 lg:left-[52%] top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <SpinningGlobe />
        </div>

        <div className="w-1/3"></div>

        <div className="w-1/3">
          <div className="mb-8">
            <h3 className="text-3xl lg:text-4xl mb-4 text-text-secondary">
              Unlock the Power of
            </h3>
            <h1 className="text-3xl lg:text-7xl font-bold text-primary">
              Spatial Data
            </h1>
            <h2 className="text-text-secondary z-10 text-4xl lg:text-8xl">
              with AI
              <span>
                <Bot className="w-28 h-28" />
              </span>
            </h2>
          </div>
          <div className="w-16 h-1 mb-4 bg-secondary"></div>
          <p className="text-accent-dark-brown text-lg">
            From urban planning to climate response, our AI turns spatial
            complexity into clear decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
