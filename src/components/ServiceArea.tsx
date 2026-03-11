import { MapPin, Navigation } from "lucide-react";

export default function ServiceArea() {
  return (
    <section
      id="service-area"
      className="py-24 bg-emerald-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-800 mb-6">
            <MapPin className="w-8 h-8 text-emerald-400" />
          </div>
          <h2 className="text-emerald-400 font-semibold tracking-wide uppercase text-sm mb-3">
            Service Area
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Proudly Serving Nedlands & Western Suburbs
          </h3>
          <p className="text-lg text-emerald-100/80">
            We provide our professional gardening and clean-up services to
            homeowners, landlords, and real estate agents across the Western
            Suburbs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-emerald-800/50 backdrop-blur-sm border border-emerald-700/50 rounded-2xl p-6 flex items-start gap-4 hover:bg-emerald-800 transition-colors">
              <Navigation className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg mb-2">Nedlands</h4>
                <p className="text-emerald-100/70 text-sm">
                  Comprehensive gardening services for residential and
                  commercial properties.
                </p>
              </div>
            </div>

            <div className="bg-emerald-800/50 backdrop-blur-sm border border-emerald-700/50 rounded-2xl p-6 flex items-start gap-4 hover:bg-emerald-800 transition-colors">
              <Navigation className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg mb-2">Claremont</h4>
                <p className="text-emerald-100/70 text-sm">
                  Expert hedge trimming, pruning, and green waste removal.
                </p>
              </div>
            </div>

            <div className="bg-emerald-800/50 backdrop-blur-sm border border-emerald-700/50 rounded-2xl p-6 flex items-start gap-4 hover:bg-emerald-800 transition-colors">
              <Navigation className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg mb-2">Dalkeith</h4>
                <p className="text-emerald-100/70 text-sm">
                  Premium yard maintenance and end-of-lease cleanups.
                </p>
              </div>
            </div>

            <div className="bg-emerald-800/50 backdrop-blur-sm border border-emerald-700/50 rounded-2xl p-6 flex items-start gap-4 hover:bg-emerald-800 transition-colors">
              <Navigation className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg mb-2">Cottesloe</h4>
                <p className="text-emerald-100/70 text-sm">
                  Coastal garden care, weeding, and high-pressure cleaning.
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-emerald-700/50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27074.885664536734!2d115.7865033743164!3d-31.98224719999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32a4e214d02b55%3A0x504f0b535df4a70!2sNedlands%20WA%206009%2C%20Australia!5e0!3m2!1sen!2sus!4v1709664000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Service Area Map"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
