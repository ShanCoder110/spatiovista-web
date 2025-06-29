import React from "react";
import { MapPin, TrendingUp, Users, Shield, Zap, Monitor } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <MapPin />,
      title: "Precision Mapping",
      desc: "Sub-meter accuracy with advanced GPS and satellite data integration for detailed terrain analysis",
    },
    {
      icon: <TrendingUp />,
      title: "Predictive Analytics",
      desc: "AI-powered forecasting for environmental monitoring and urban development planning",
    },
    {
      icon: <Users />,
      title: "Team Collaboration",
      desc: "Real-time sharing and collaborative analysis tools with role-based access control",
    },
    {
      icon: <Shield />,
      title: "Enterprise Security",
      desc: "Bank-level encryption, compliance certifications, and secure data handling protocols",
    },
    {
      icon: <Zap />,
      title: "Lightning Fast Processing",
      desc: "Process terabytes of geospatial data in minutes using our optimized cloud infrastructure",
    },
    {
      icon: <Monitor />,
      title: "Complete Dashboard",
      desc: "Comprehensive web-based dashboard with real-time monitoring and detailed analytics",
    },
  ];

  return (
    <div id="services" className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-text-primary">
            Our Services
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-accent-dark-brown">
            Comprehensive geospatial solutions with complete dashboard
            management and real-time analytics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-background rounded-xl p-6 border-2 hover:border-opacity-100 transition-all hover:transform hover:scale-105 shadow-lg border-secondary"
            >
              <div
                className="mb-4 group-hover:scale-110 transition-transform"
                style={{ color: "#6894ca" }}
              >
                {React.cloneElement(service.icon, { className: "w-8 h-8" })}
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "#5b8d5a" }}
              >
                {service.title}
              </h3>
              <p style={{ color: "#3e1e16" }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
