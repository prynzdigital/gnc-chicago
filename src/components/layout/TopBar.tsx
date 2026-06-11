"use client";

import { MapPin, Mail, Phone } from "lucide-react";

const upcomingEvents = [
  "🇬🇭 Flag Raising Ceremony — Jul 1 · Daley Plaza, 50 W Washington St",
  "🥁 37th Annual Chicago GHANAFEST — Jul 25 · Washington Park, 5600 S Russell Dr",
  "🎉 GNC Annual Cultural Gala — Aug 16, 2025",
  "🤝 Professional Networking Mixer — Jul 11, 2025",
  "🎓 Back to School Community Mixer — Sep 6, 2025",
  "❤️ Community Service Day — Oct 18, 2025",
  "🇬🇭 Ghana Independence Day Celebration — Mar 6, 2025",
];

const ticker = [...upcomingEvents, ...upcomingEvents];

export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gnc-dark border-b border-gnc-border text-xs text-gray-400 hidden sm:flex items-stretch h-9 overflow-hidden">
      {/* Left — contact info */}
      <div className="flex items-center gap-5 px-5 flex-shrink-0 border-r border-gnc-border">
        <a
          href="https://maps.google.com/?q=Chicago,IL"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-ghana-gold transition-colors whitespace-nowrap"
        >
          <MapPin className="w-3 h-3 text-ghana-gold flex-shrink-0" />
          Chicago, Illinois
        </a>
        <a
          href="mailto:info@gncchicago.org"
          className="flex items-center gap-1.5 hover:text-ghana-gold transition-colors whitespace-nowrap"
        >
          <Mail className="w-3 h-3 text-ghana-gold flex-shrink-0" />
          info@gncchicago.org
        </a>
        <a
          href="tel:+13125550100"
          className="flex items-center gap-1.5 hover:text-ghana-gold transition-colors whitespace-nowrap"
        >
          <Phone className="w-3 h-3 text-ghana-gold flex-shrink-0" />
          (312) 555-0100
        </a>
      </div>

      {/* Right — scrolling events ticker */}
      <div className="flex-1 flex items-center overflow-hidden relative">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gnc-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gnc-dark to-transparent z-10 pointer-events-none" />

        <div className="flex items-center gap-0 animate-scroll whitespace-nowrap">
          {ticker.map((event, i) => (
            <span key={i} className="inline-flex items-center">
              <span className="hover:text-ghana-gold transition-colors cursor-default px-2">
                {event}
              </span>
              <span className="text-gnc-border px-1">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
