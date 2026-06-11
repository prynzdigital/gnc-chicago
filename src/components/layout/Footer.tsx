"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Linkedin, Youtube, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { useState } from "react";

const quickLinks = [
  { label: "About GNC", href: "#about" },
  { label: "Our Groups", href: "#groups" },
  { label: "Upcoming Events", href: "#events" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Donate", href: "#donate" },
];

const getInvolved = [
  { label: "Become a Member", href: "#join" },
  { label: "Volunteer", href: "#join" },
  { label: "Sponsor GNC", href: "#sponsors" },
  { label: "Partner With Us", href: "#sponsors" },
  { label: "Alumni Network", href: "#groups" },
];

const socials = [
  { label: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { label: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { label: "YouTube", icon: Youtube, href: "https://youtube.com" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-gnc-dark text-gray-300">
      {/* Ghana flag accent bar */}
      <div className="flex h-1">
        <div className="flex-1 bg-ghana-red" />
        <div className="flex-1 bg-ghana-gold" />
        <div className="flex-1 bg-ghana-green" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1 — Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/gnc-logo-light.jpeg"
                  alt="Ghana National Council Logo"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <div>
                <div className="font-serif font-bold text-lg text-white leading-none">GNC</div>
                <div className="text-[10px] text-gray-400 tracking-wide">Ghana National Council</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Uniting Ghanaians in Chicago and beyond — through culture, community, and shared purpose since our founding.
            </p>
            <div className="flex gap-3">
              {socials.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-gnc-card border border-gnc-border flex items-center justify-center text-gray-400 hover:text-ghana-gold hover:border-ghana-gold/50 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-ghana-gold transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Get Involved */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Get Involved</h4>
            <ul className="space-y-2.5">
              {getInvolved.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-ghana-gold transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact + Newsletter */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Stay Connected</h4>
            <div className="space-y-3 mb-6">
              <a href="mailto:info@gncchicago.org" className="flex items-center gap-3 text-sm text-gray-400 hover:text-ghana-gold transition-colors">
                <Mail className="w-4 h-4 text-ghana-gold flex-shrink-0" />
                info@gncchicago.org
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-ghana-gold flex-shrink-0 mt-0.5" />
                Chicago, Illinois
              </div>
              <a href="tel:+13125550100" className="flex items-center gap-3 text-sm text-gray-400 hover:text-ghana-gold transition-colors">
                <Phone className="w-4 h-4 text-ghana-gold flex-shrink-0" />
                (312) 555-0100
              </a>
            </div>

            <p className="text-xs text-gray-500 mb-3">Get GNC news and updates in your inbox.</p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-ghana-green text-sm">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                You&apos;re subscribed!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="flex-1 px-3 py-2 bg-gnc-card border border-gnc-border rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-ghana-gold/50 transition-colors min-w-0"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="px-3 py-2 bg-ghana-red hover:bg-red-700 text-white rounded-lg transition-colors flex-shrink-0"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gnc-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} Ghana National Council. All rights reserved. A registered nonprofit organization.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
