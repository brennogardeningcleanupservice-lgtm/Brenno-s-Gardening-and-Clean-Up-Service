import { CheckCircle2, ShieldCheck, Clock, ThumbsUp } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-100 rounded-3xl transform -rotate-3 scale-105 origin-bottom-left z-0"></div>
            <img
              src="https://images.unsplash.com/photo-1592424001806-53b70ff4584e?q=80&w=2070&auto=format&fit=crop"
              alt="Gardener working on a beautiful lawn"
              className="relative z-10 rounded-3xl shadow-xl object-cover w-full h-[500px]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <ThumbsUp className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">100%</p>
                  <p className="text-sm text-gray-500 font-medium">
                    Satisfaction
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-xl">
            <h2 className="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-3">
              About Us
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Your Local Gardening Experts in the Western Suburbs
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Brenno's Gardening and Clean Up Services, we pride ourselves on
              transforming overgrown, messy yards into beautiful, manageable
              outdoor spaces. Whether you're a homeowner looking for regular
              maintenance, a landlord preparing a property, or a real estate
              agent needing an end-of-lease cleanup, we've got you covered.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <ShieldCheck className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    Trusted & Reliable
                  </h4>
                  <p className="text-gray-600">
                    We show up on time, respect your property, and deliver
                    exactly what we promise.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Clock className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    Efficient Service
                  </h4>
                  <p className="text-gray-600">
                    Our team works quickly and efficiently to minimize
                    disruption to your day.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    Quality Results
                  </h4>
                  <p className="text-gray-600">
                    We don't cut corners. We ensure every job is completed to
                    the highest standard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
