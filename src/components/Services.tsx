import {
  Leaf,
  Scissors,
  Trash2,
  Home,
  CheckCircle,
  Droplets,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Garden Cleanups",
      description:
        "Complete front and backyard cleanups to restore your garden to its former glory.",
      icon: <Leaf className="w-8 h-8 text-emerald-600" />,
      features: ["Weed removal", "Pruning", "General tidying"],
    },
    {
      title: "Hedge Trimming",
      description:
        "Professional hedge trimming, height reduction, and tree pruning services.",
      icon: <Scissors className="w-8 h-8 text-emerald-600" />,
      features: ["Tree pruning", "Height reduction", "Shaping & tidying"],
    },
    {
      title: "Green Waste Removal",
      description:
        "Fast and efficient removal of all your garden and green waste.",
      icon: <Trash2 className="w-8 h-8 text-emerald-600" />,
      features: [
        "Small waste loads",
        "Medium waste loads",
        "Eco-friendly disposal",
      ],
    },
    {
      title: "End of Lease Clean Ups",
      description:
        "Get your bond back with our thorough end of lease garden cleanups.",
      icon: <Home className="w-8 h-8 text-emerald-600" />,
      features: ["Full yard clear out", "Lawn mowing", "Weeding & edging"],
    },
    {
      title: "Yard Maintenance",
      description:
        "Regular or one-off maintenance to keep your property looking its best.",
      icon: <CheckCircle className="w-8 h-8 text-emerald-600" />,
      features: ["Lawn care", "Weed control", "Seasonal maintenance"],
    },
    {
      title: "Additional Add-ons",
      description:
        "Extra services to make your property shine from top to bottom.",
      icon: <Droplets className="w-8 h-8 text-emerald-600" />,
      features: [
        "High-pressure cleaning",
        "Cobweb removal",
        "Path & driveway cleaning",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-3">
            Our Services
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Comprehensive Gardening & Clean Up Solutions
          </h3>
          <p className="text-lg text-gray-600">
            From regular yard maintenance to complete end-of-lease cleanups, we
            provide professional services tailored to your property's needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <div className="w-16 h-16 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h4>
              <p className="text-gray-600 mb-6 line-clamp-2">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-gray-500"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
