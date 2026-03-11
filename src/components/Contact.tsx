import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-3">
              Get in Touch
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Request Your Free Quote Today
            </h3>
            <p className="text-lg text-gray-600 mb-10">
              Ready to transform your garden? Contact us for a free,
              no-obligation appraisal and quotation. We'll get back to you as
              soon as possible.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    Call or SMS
                  </h4>
                  <a
                    href="tel:+61439646490"
                    className="text-gray-600 hover:text-emerald-600 transition-colors text-lg"
                  >
                    0439 646 490
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    Email Us
                  </h4>
                  <a
                    href="mailto:brenno.gardeningcleanupservice@gmail.com"
                    className="text-gray-600 hover:text-emerald-600 transition-colors break-all"
                  >
                    brenno.gardeningcleanupservice@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    Service Area
                  </h4>
                  <p className="text-gray-600">
                    Nedlands and Western Suburbs, WA
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-3xl p-8 shadow-sm border border-gray-100">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a message
            </h4>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-white"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-white"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-white"
                    placeholder="0400 000 000"
                  />
                </div>
                <div>
                  <label
                    htmlFor="suburb"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Suburb
                  </label>
                  <input
                    type="text"
                    id="suburb"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-white"
                    placeholder="e.g. Nedlands"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Service Required
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-white"
                >
                  <option value="">Select a service...</option>
                  <option value="garden-cleanup">Garden Cleanup</option>
                  <option value="hedge-trimming">
                    Hedge Trimming / Pruning
                  </option>
                  <option value="waste-removal">Green Waste Removal</option>
                  <option value="end-of-lease">End of Lease Cleanup</option>
                  <option value="maintenance">General Yard Maintenance</option>
                  <option value="other">Other / Multiple Services</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-white resize-none"
                  placeholder="Tell us about your garden and what needs to be done..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 text-white px-6 py-4 rounded-xl font-bold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                Request Free Quote
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
