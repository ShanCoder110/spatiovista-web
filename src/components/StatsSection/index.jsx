import React from "react";

const StatsSection = () => {
  const stats = [
    { number: "5M+", label: "Data Points Analyzed" },
    { number: "3+", label: "Countries Covered" },
    { number: "99.9%", label: "Uptime Guaranteed" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <div className="px-6 py-16 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center transform hover:scale-105 transition-transform"
            >
              <p className="text-3xl lg:text-5xl font-bold mb-2 text-text-secondary">
                {stat.number}
              </p>
              <div className="text-accent-dark-brown  text-md lg:text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
