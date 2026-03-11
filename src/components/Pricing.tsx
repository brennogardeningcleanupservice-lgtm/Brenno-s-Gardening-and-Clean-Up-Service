import { Check, Info } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-3">
            Transparent Pricing
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Simple & Competitive Rates
          </h3>
          <p className="text-lg text-gray-600">
            We believe in honest pricing with no hidden surprises. All our
            services come with a free appraisal and quotation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Garden Clean Up */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col h-full">
            <h4 className="text-2xl font-bold text-gray-900 mb-2">
              Garden Clean Up
            </h4>
            <p className="text-gray-500 text-sm mb-6">
              Complete yard restoration
            </p>

            <div className="space-y-4 flex-grow">
              <div className="flex justify-between items-center border-b border-gray-50 pb-3">
                <span className="text-gray-700 font-medium">Front Yard</span>
                <span className="font-bold text-gray-900">
                  $35
                  <span className="text-sm text-gray-500 font-normal">
                    /hr*
                  </span>
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-50 pb-3">
                <span className="text-gray-700 font-medium">Backyard</span>
                <span className="font-bold text-gray-900">
                  from $35
                  <span className="text-sm text-gray-500 font-normal">
                    /hr*
                  </span>
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-50 pb-3">
                <span className="text-gray-700 font-medium">
                  Front & Backyard
                </span>
                <span className="font-bold text-gray-900">
                  $35
                  <span className="text-sm text-gray-500 font-normal">
                    /hr*
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Hedge Trimming */}
          <div className="bg-emerald-600 rounded-3xl p-8 shadow-lg shadow-emerald-600/20 text-white flex flex-col h-full relative transform md:-translate-y-4">
            <div className="absolute top-0 right-8 transform -translate-y-1/2">
              <span className="bg-emerald-200 text-emerald-900 text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                Popular
              </span>
            </div>
            <h4 className="text-2xl font-bold mb-2">Hedge & Tree Care</h4>
            <p className="text-emerald-100 text-sm mb-6">
              Professional pruning and shaping
            </p>

            <div className="space-y-4 flex-grow">
              <div className="flex justify-between items-center border-b border-emerald-500/50 pb-3">
                <span className="font-medium">Tree Pruning</span>
                <span className="font-bold">
                  $35
                  <span className="text-sm text-emerald-100 font-normal">
                    /hr*
                  </span>
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-emerald-500/50 pb-3">
                <span className="font-medium">Height Reduction & Tidy</span>
                <span className="font-bold">
                  $35
                  <span className="text-sm text-emerald-100 font-normal">
                    /hr*
                  </span>
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-emerald-500/50 pb-3">
                <span className="font-medium">Pruning + Reduction/Tidy</span>
                <span className="font-bold">
                  $35
                  <span className="text-sm text-emerald-100 font-normal">
                    /hr*
                  </span>
                </span>
              </div>
            </div>
            <a
              href="#contact"
              className="mt-8 block w-full bg-white text-emerald-700 text-center py-3 rounded-xl font-bold hover:bg-emerald-50 transition-colors"
            >
              Get a Free Quote
            </a>
          </div>

          {/* End of Lease */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col h-full">
            <h4 className="text-2xl font-bold text-gray-900 mb-2">
              End of Lease
            </h4>
            <p className="text-gray-500 text-sm mb-6">Get your bond back</p>

            <div className="space-y-4 flex-grow">
              <div className="flex justify-between items-center border-b border-gray-50 pb-3">
                <span className="text-gray-700 font-medium">Front Yard</span>
                <span className="font-bold text-gray-900">
                  $35
                  <span className="text-sm text-gray-500 font-normal">
                    /hr*
                  </span>
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-50 pb-3">
                <span className="text-gray-700 font-medium">Backyard</span>
                <span className="font-bold text-gray-900">
                  $35
                  <span className="text-sm text-gray-500 font-normal">
                    /hr*
                  </span>
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-50 pb-3">
                <span className="text-gray-700 font-medium">
                  Front & Backyard
                </span>
                <span className="font-bold text-gray-900">
                  $35
                  <span className="text-sm text-gray-500 font-normal">
                    /hr*
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Green Waste */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Check className="w-5 h-5 text-emerald-500" />
              Green Waste Removal
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Small Waste Removal</span>
                <span className="font-bold text-gray-900">$65*</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Medium Waste Removal</span>
                <span className="font-bold text-gray-900">$110*</span>
              </div>
            </div>
          </div>

          {/* Addons */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Check className="w-5 h-5 text-emerald-500" />
              Additional Add-ons
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">High-pressure cleaning</span>
                <span className="font-bold text-gray-900">
                  $35
                  <span className="text-sm text-gray-500 font-normal">
                    /hr*
                  </span>
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Cobweb removal</span>
                <span className="font-bold text-gray-900">
                  $30
                  <span className="text-sm text-gray-500 font-normal">
                    /hr*
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 max-w-4xl mx-auto bg-emerald-50 rounded-xl p-4 flex items-start gap-3 border border-emerald-100">
          <Info className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-emerald-800">
            <strong>* Important Note:</strong> A $25 Service Fee applies to all
            visits. All prices are estimates and may vary based on the specific
            condition of your property. We provide a{" "}
            <strong>free appraisal and quotation</strong> before starting any
            work.
          </p>
        </div>
      </div>
    </section>
  );
}
