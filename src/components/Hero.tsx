import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558904541-efa843a96f0f?q=80&w=2070&auto=format&fit=crop"
          alt="Beautiful landscaped garden"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400"></span>
            <span className="text-sm font-medium uppercase tracking-wider">
              Nedlands & Western Suburbs
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Professional Gardening &{" "}
            <span className="text-emerald-400">Clean Up Services</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
            Transform your outdoor space with Brenno's expert gardening, hedge
            trimming, and property clean-up services. Fast, reliable, and
            affordable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="#contact"
              className="inline-flex justify-center items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-600/30"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+61439646490"
              className="inline-flex justify-center items-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors"
            >
              <Phone className="w-5 h-5" />
              0439 646 490
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-medium">Free Appraisals</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-medium">Fully Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-medium">Local Experts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
