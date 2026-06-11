"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, ArrowRight, BookOpen, Users, Music, Globe } from "lucide-react";

const presets = [10, 25, 50, 100, 250];

const impactItems = [
  {
    icon: BookOpen,
    amount: "$25",
    label: "Covers study materials for one student",
  },
  {
    icon: Music,
    amount: "$50",
    label: "Sponsors a student's ticket to our Annual Gala",
  },
  {
    icon: Users,
    amount: "$100",
    label: "Funds a community networking event",
  },
  {
    icon: Globe,
    amount: "$250",
    label: "Contributes to a scholarship fund",
  },
];

export default function Donate() {
  const [selected, setSelected] = useState<number | null>(50);
  const [custom, setCustom] = useState("");

  const activeAmount = custom ? parseInt(custom) || 0 : (selected ?? 0);

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gnc-dark" id="donate">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-hero-gradient opacity-70" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Impact messaging */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label text-ghana-gold mb-4 block">
              <span className="w-6 h-px bg-ghana-gold inline-block align-middle mr-2" />
              Support Our Mission
            </span>
            <h2 className="section-heading text-white mb-6">
              Your Gift Changes{" "}
              <span className="text-ghana-gold">Lives.</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              GNC is a nonprofit organization powered by the generosity of people who believe in
              the Ghanaian community. Every contribution — no matter the size — goes directly to
              programs, scholarships, and events that uplift our members.
            </p>

            {/* Impact breakdown */}
            <div className="space-y-4">
              {impactItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                    className="flex items-center gap-4 p-4 rounded-xl border border-gnc-border bg-gnc-card/60"
                  >
                    <div className="w-9 h-9 rounded-lg bg-ghana-gold/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-ghana-gold" />
                    </div>
                    <div>
                      <span className="text-ghana-gold font-bold text-sm">{item.amount}</span>
                      <span className="text-gray-400 text-sm ml-2">{item.label}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right — Donation form */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-white rounded-3xl p-8 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                <Heart className="w-5 h-5 text-ghana-red" fill="currentColor" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Make a Donation</div>
                <div className="text-xs text-gray-400">100% goes to GNC programs</div>
              </div>
            </div>

            {/* Preset amounts */}
            <div className="mb-5">
              <label className="text-sm font-semibold text-gray-700 mb-3 block">
                Choose an amount
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-3">
                {presets.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => { setSelected(amount); setCustom(""); }}
                    className={`py-2.5 rounded-xl text-sm font-semibold border-2 transition-all duration-200 ${
                      selected === amount && !custom
                        ? "border-ghana-red bg-ghana-red text-white"
                        : "border-gray-200 text-gray-600 hover:border-ghana-red/50 hover:text-ghana-red"
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">$</span>
                <input
                  type="number"
                  placeholder="Custom amount"
                  value={custom}
                  onChange={(e) => { setCustom(e.target.value); setSelected(null); }}
                  className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-ghana-red transition-colors"
                  min="1"
                />
              </div>
            </div>

            {/* Frequency toggle */}
            <div className="mb-6">
              <label className="text-sm font-semibold text-gray-700 mb-3 block">
                Frequency
              </label>
              <div className="grid grid-cols-2 gap-2">
                {["One-time", "Monthly"].map((freq) => (
                  <button
                    key={freq}
                    className="py-3 rounded-xl text-sm font-semibold border-2 border-gray-200 text-gray-500 hover:border-ghana-green hover:text-ghana-green transition-all duration-200 first:border-ghana-green first:text-ghana-green first:bg-ghana-green/5"
                  >
                    {freq}
                  </button>
                ))}
              </div>
            </div>

            {/* Summary */}
            {activeAmount > 0 && (
              <div className="mb-5 p-3 rounded-xl bg-gray-50 border border-gray-100">
                <p className="text-xs text-gray-500 text-center">
                  Your <span className="font-bold text-gray-700">${activeAmount}</span> donation helps GNC
                  make a real difference in our community.
                </p>
              </div>
            )}

            <button className="w-full py-4 bg-ghana-red text-white font-bold rounded-2xl hover:bg-red-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
              <Heart className="w-4 h-4" fill="currentColor" />
              Donate {activeAmount ? `$${activeAmount}` : "Now"}
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-center text-xs text-gray-400 mt-4">
              Secure payment · GNC is a registered 501(c)(3) nonprofit
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
