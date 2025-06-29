import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

const CTASection = () => {
  return (
    <div id="contact" className="px-6 py-10 ">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className="rounded-2xl p-12 border-2"
          style={{ backgroundColor: "#fff1e0", borderColor: "#f4581f" }}
        >
          <h2
            className="text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: "#5b8d5a" }}
          >
            Ready to Transform Your Projects?
          </h2>
          <p className="text-xl mb-8" style={{ color: "#3e1e16" }}>
            Join industry leaders using SpatioVista for professional geospatial
            services and AI-powered surveying solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={"https://cal.com/spatiovista/30min"}
              className="px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center"
              style={{
                backgroundColor: "#f4581f",
                color: "white",
              }}
            >
              Contact Our Team
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <div
              className="flex items-center text-sm"
              style={{ color: "#3e1e16" }}
            >
              <CheckCircle
                className="w-4 h-4 mr-2"
                style={{ color: "#7f7d31" }}
              />
              Professional consultation included
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
