// import React from "react";
// import { X, Check } from "lucide-react";

// const ComparisonSection = () => {
//   const comparison = [
//     {
//       feature: "Survey Duration",
//       traditional: "2-4 weeks",
//       spatiovista: "2-3 days",
//       improvement: "10x faster",
//     },
//     {
//       feature: "Cost per Survey",
//       traditional: "$5,000 - $15,000",
//       spatiovista: "$500 - $2,000",
//       improvement: "70% reduction",
//     },
//     {
//       feature: "Accuracy Rate",
//       traditional: "75-85%",
//       spatiovista: "95-98%",
//       improvement: "20% improvement",
//     },
//     {
//       feature: "Data Processing",
//       traditional: "Manual (1-2 weeks)",
//       spatiovista: "Automated (Real-time)",
//       improvement: "Instant results",
//     },
//     {
//       feature: "Team Required",
//       traditional: "5-10 people",
//       spatiovista: "1-2 people",
//       improvement: "80% less workforce",
//     },
//   ];

//   return (
//     <div id="comparison" className="px-6 py-20">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2
//             className="text-4xl lg:text-5xl font-bold mb-6"
//             style={{ color: "#5b8d5a" }}
//           >
//             Traditional vs SpatioVista
//           </h2>
//           <p className="text-xl max-w-3xl mx-auto" style={{ color: "#3e1e16" }}>
//             See how our innovative approach revolutionizes geospatial surveying
//           </p>
//         </div>

//         <div
//           className="bg-white rounded-2xl border-2 overflow-hidden shadow-xl"
//           style={{ borderColor: "#6894ca" }}
//         >
//           <div
//             className="grid grid-cols-4 gap-4 p-6 font-semibold"
//             style={{ backgroundColor: "#fff1e0" }}
//           >
//             <div style={{ color: "#5b8d5a" }}>Feature</div>
//             <div style={{ color: "#c95653" }}>Traditional Method</div>
//             <div style={{ color: "#7f7d31" }}>SpatioVista</div>
//             <div style={{ color: "#6894ca" }}>Improvement</div>
//           </div>
//           {comparison.map((item, index) => (
//             <div
//               key={index}
//               className="grid grid-cols-4 gap-4 p-6 border-t hover:bg-opacity-50 transition-colors"
//               style={{ borderColor: "#fff1e0" }}
//             >
//               <div className="font-medium" style={{ color: "#5b8d5a" }}>
//                 {item.feature}
//               </div>
//               <div className="flex items-center" style={{ color: "#c95653" }}>
//                 <X className="w-4 h-4 mr-2" />
//                 {item.traditional}
//               </div>
//               <div className="flex items-center" style={{ color: "#7f7d31" }}>
//                 <Check className="w-4 h-4 mr-2" />
//                 {item.spatiovista}
//               </div>
//               <div className="font-semibold" style={{ color: "#6894ca" }}>
//                 {item.improvement}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ComparisonSection;

import React from "react";
import {
  Clock,
  Users,
  Calculator,
  FileText,
  MapPin,
  Zap,
  Brain,
  Target,
  Gauge,
  Satellite,
} from "lucide-react";

const FeatureItem = ({ icon: Icon, children, color }) => (
  <li className="flex items-start gap-3 text-gray-600">
    <Icon className={`w-5 h-5 mt-1 ${color}`} />
    <span>{children}</span>
  </li>
);

const ComparisonSection = () => {
  return (
    <section
      id="comparison"
      className="w-full flex flex-col items-center py-20 px-4 bg-background"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-primary">
        The Future of Geospatial Surveying Is Here
      </h2>
      <p className="text-lg md:text-xl text-center mb-12 max-w-2xl text-[color:var(--color-accent-dark-brown)]">
        See how our AI-powered drone technology revolutionizes land surveying
        compared to traditional methods.
      </p>

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl justify-center">
        {/* Traditional Approach */}
        <div className="flex-1 bg-background/90 rounded-2xl shadow-lg p-6 border-2 backdrop-blur-md border-[color:var(--color-accent-blue)]">
          <div className="flex items-center gap-2 mb-4">
            <span className="rounded-full p-2 bg-[color:var(--color-accent-blue)] text-background">
              <Clock className="w-5 h-5" />
            </span>
            <span className="text-lg font-semibold text-[color:var(--color-accent-blue)]">
              Traditional Surveying
            </span>
          </div>
          <ul className="space-y-4 mt-4">
            <FeatureItem
              icon={Clock}
              color="text-[color:var(--color-accent-blue)]"
            >
              Weeks of Field Work
            </FeatureItem>
            <FeatureItem
              icon={Users}
              color="text-[color:var(--color-accent-blue)]"
            >
              Large Survey Teams Required
            </FeatureItem>
            <FeatureItem
              icon={Calculator}
              color="text-[color:var(--color-accent-blue)]"
            >
              Manual Data Processing
            </FeatureItem>
            <FeatureItem
              icon={FileText}
              color="text-[color:var(--color-accent-blue)]"
            >
              Paper-Based Documentation
            </FeatureItem>
            <FeatureItem
              icon={MapPin}
              color="text-[color:var(--color-accent-blue)]"
            >
              Limited Access to Difficult Terrain
            </FeatureItem>
          </ul>
        </div>

        {/* SpatioVista Approach */}
        <div className="flex-1 bg-background/90 rounded-2xl shadow-lg p-6 border-2 backdrop-blur-md border-secondary">
          <div className="flex items-center gap-2 mb-4">
            <span className="rounded-full p-2 bg-secondary text-background">
              <Satellite className="w-5 h-5" />
            </span>
            <span className="text-lg font-semibold text-secondary">
              SpatioVista's AI-Powered Solution
            </span>
          </div>
          <ul className="space-y-4 mt-4">
            <FeatureItem icon={Zap} color="text-secondary">
              Rapid Drone Deployment
            </FeatureItem>
            <FeatureItem icon={Brain} color="text-secondary">
              AI-Enhanced Data Analysis
            </FeatureItem>
            <FeatureItem icon={Target} color="text-secondary">
              Precision Mapping Technology
            </FeatureItem>
            <FeatureItem icon={Gauge} color="text-secondary">
              Real-Time Processing
            </FeatureItem>
            <FeatureItem icon={Satellite} color="text-secondary">
              Complete Terrain Coverage
            </FeatureItem>
          </ul>
        </div>
      </div>

      {/* Bottom highlight section */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[color:var(--color-accent-dark-brown)] text-background">
          <Zap className="w-5 h-5" />
          <span className="font-semibold">
            Transform Your Surveying Process Today
          </span>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
