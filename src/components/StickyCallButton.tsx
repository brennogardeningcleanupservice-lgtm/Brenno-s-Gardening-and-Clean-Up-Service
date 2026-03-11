import { Phone } from "lucide-react";

export default function StickyCallButton() {
  return (
    <a
      href="tel:+61439646490"
      className="fixed bottom-6 right-6 z-50 bg-emerald-600 text-white p-4 rounded-full shadow-lg shadow-emerald-600/30 hover:bg-emerald-500 transition-transform hover:scale-110 flex items-center justify-center group"
      aria-label="Call us now"
    >
      <Phone className="w-6 h-6 animate-pulse" />

      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-gray-900 text-white text-sm font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Call 0439 646 490
      </span>
    </a>
  );
}
