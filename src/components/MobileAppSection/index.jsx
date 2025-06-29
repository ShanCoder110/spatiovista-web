import React from "react";
import {
  Brain,
  DollarSign,
  Clock,
  Target,
  Smartphone,
  CheckCircle,
} from "lucide-react";

const MobileAppSection = () => {
  const appFeatures = [
    {
      icon: <Brain />,
      title: "AI-Powered Surveys",
      desc: "Intelligent survey generation and data collection using machine learning algorithms",
    },
    {
      icon: <DollarSign />,
      title: "Cost Effective",
      desc: "Reduce survey costs by up to 70% compared to traditional field survey methods",
    },
    {
      icon: <Clock />,
      title: "Time Efficient",
      desc: "Complete surveys 5x faster with automated data collection and processing",
    },
    {
      icon: <Target />,
      title: "Precision Accuracy",
      desc: "Achieve 95%+ accuracy in data collection with AI-assisted validation",
    },
  ];

  return (
    <div id="app" className="px-6 py-20 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: "#5b8d5a" }}
          >
            SpatioVista Mobile App
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: "#3e1e16" }}>
            Revolutionary AI-powered survey application that transforms
            traditional field work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {appFeatures.map((feature, index) => (
            <div
              key={index}
              className="group rounded-xl p-6 border-2 hover:border-opacity-100 transition-all hover:transform hover:scale-105"
              style={{
                backgroundColor: "#fff1e0",
                borderColor: "#f4581f",
                borderOpacity: 0.3,
              }}
            >
              <div
                className="mb-4 group-hover:scale-110 transition-transform"
                style={{ color: "#f4581f" }}
              >
                {React.cloneElement(feature.icon, { className: "w-8 h-8" })}
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: "#5b8d5a" }}
              >
                {feature.title}
              </h3>
              <p style={{ color: "#3e1e16" }}>{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://drive.google.com/file/d/1NsaDwSCzweb6cdB1ME00RdtV3Sc7Nwfn/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block cursor-pointer"
            >
              <button
                className="px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center"
                style={{
                  backgroundColor: "#f4581f",
                  color: "white",
                }}
              >
                <Smartphone className="mr-2 w-5 h-5" />
                Download App
              </button>
            </a>
            <div
              className="flex items-center text-sm"
              style={{ color: "#3e1e16" }}
            >
              <CheckCircle
                className="w-4 h-4 mr-2"
                style={{ color: "#7f7d31" }}
              />
              Available on iOS & Android
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppSection;
