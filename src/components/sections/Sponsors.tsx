"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const tiers = [
  {
    name: "Platinum Partner",
    color: "border-ghana-gold bg-ghana-gold/5",
    headerColor: "bg-ghana-gold text-gray-900",
    badge: "⭐ Premier",
    benefits: [
      "Logo on all event materials",
      "Speaking opportunity at Annual Gala",
      "Featured in monthly newsletter",
      "Social media spotlight (4x/year)",
      "VIP table at Annual Gala (8 seats)",
      "Dedicated sponsor page on website",
    ],
    price: "$5,000+",
  },
  {
    name: "Gold Sponsor",
    color: "border-yellow-300 bg-yellow-50/50",
    headerColor: "bg-yellow-400 text-gray-900",
    badge: "🏆 Gold",
    benefits: [
      "Logo on event materials",
      "Feature in 2 newsletters",
      "Social media spotlight (2x/year)",
      "4 tickets to Annual Gala",
      "Website logo listing",
    ],
    price: "$2,500+",
  },
  {
    name: "Silver Supporter",
    color: "border-gray-200 bg-gray-50/50",
    headerColor: "bg-gray-300 text-gray-800",
    badge: "🥈 Silver",
    benefits: [
      "Logo on select materials",
      "Newsletter mention",
      "Social media mention (1x/year)",
      "2 tickets to Annual Gala",
    ],
    price: "$1,000+",
  },
];

const currentSponsors = [
  { name: "Sponsor A", abbr: "SA" },
  { name: "Sponsor B", abbr: "SB" },
  { name: "Sponsor C", abbr: "SC" },
  { name: "Sponsor D", abbr: "SD" },
  { name: "Sponsor E", abbr: "SE" },
  { name: "Sponsor F", abbr: "SF" },
];

export default function Sponsors() {
  return (
    <section className="section-light" id="sponsors">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="section-label text-ghana-red mb-3 block">
            <span className="w-6 h-px bg-ghana-red inline-block align-middle mr-2" />
            Partners & Sponsors
            <span className="w-6 h-px bg-ghana-red inline-block align-middle ml-2" />
          </span>
          <h2 className="section-heading text-gray-900 mb-4">
            Organizations That{" "}
            <span className="text-ghana-red">Believe in Us</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Our sponsors don&apos;t just fund events — they invest in the futures of Ghanaian
            students and professionals across Chicago.
          </p>
        </motion.div>

        {/* Current sponsors logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-center text-xs font-semibold tracking-widest text-gray-400 uppercase mb-8">
            Our Current Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {currentSponsors.map((s) => (
              <div
                key={s.name}
                className="w-32 h-16 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-300 text-sm font-medium hover:border-ghana-gold/40 hover:text-ghana-gold/60 transition-colors"
              >
                {s.name}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Sponsorship tiers */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Become a Sponsor</h3>
          <p className="text-gray-500">
            Partner with GNC and connect with an engaged, educated, and growing Ghanaian community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-2xl border-2 overflow-hidden ${tier.color}`}
            >
              <div className={`px-6 py-4 ${tier.headerColor} flex items-center justify-between`}>
                <span className="font-bold text-sm">{tier.name}</span>
                <span className="text-xs font-semibold">{tier.badge}</span>
              </div>
              <div className="p-6">
                <div className="text-2xl font-bold text-gray-900 mb-1">{tier.price}</div>
                <div className="text-xs text-gray-500 mb-5">annual partnership</div>
                <ul className="space-y-2.5 mb-6">
                  {tier.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-ghana-green flex-shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 rounded-xl border-2 border-gray-300 text-sm font-semibold text-gray-700 hover:border-ghana-red hover:text-ghana-red hover:bg-ghana-red/5 transition-all duration-200">
                  Inquire Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-100"
        >
          <p className="text-gray-700 font-medium mb-2">
            Interested in a custom partnership package?
          </p>
          <p className="text-gray-400 text-sm mb-5">
            We&apos;re open to creative partnerships that align with GNC&apos;s mission.
          </p>
          <a
            href="mailto:sponsorship@gncchicago.org"
            className="btn-primary inline-flex"
          >
            Contact Our Sponsorship Team <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
