"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "500+", label: "Members Served" },
  { value: "50+", label: "Events Hosted" },
  { value: "12+", label: "Scholarships Awarded" },
  { value: "200+", label: "Alumni Network" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94], delay },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-gnc-dark">
      {/* Ghana tricolor top bar */}
      <div className="absolute top-0 left-0 right-0 z-10 flex h-1">
        <div className="flex-1 bg-ghana-red" />
        <div className="flex-1 bg-ghana-gold" />
        <div className="flex-1 bg-ghana-green" />
      </div>

      {/* Background: Ghana-color radial glows */}
      <div className="absolute inset-0 bg-hero-gradient" />

      {/* Decorative Black Star watermark */}
      <div className="absolute inset-0 flex items-center justify-end pr-8 lg:pr-24 pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[420px] h-[420px] opacity-[0.04]"
          aria-hidden="true"
        >
          <path
            d="M100 10L120.7 74.3H189.5L134.4 113.1L155.1 177.3L100 138.6L44.9 177.3L65.6 113.1L10.5 74.3H79.3L100 10Z"
            fill="#FCD116"
          />
        </svg>
      </div>

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 pb-8">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mb-7"
          >
            <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-ghana-gold/10 border border-ghana-gold/20 text-ghana-gold text-xs font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-ghana-gold animate-pulse" />
              Ghana National Council — Chicago Chapter
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={0.15}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-7 tracking-tight"
          >
            Connecting{" "}
            <span className="text-ghana-gold">Ghanaians.</span>
            <br />
            Empowering{" "}
            <span className="text-ghana-green">Leaders.</span>
            <br />
            Building{" "}
            <span className="text-ghana-red">Community.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            custom={0.3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed mb-10"
          >
            GNC is the heartbeat of the Ghanaian community — uniting students, alumni, and
            professionals through culture, education, and shared purpose. Every voice matters.
            Every story counts.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={0.45}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-4"
          >
            <Link href="#join" className="btn-primary group">
              Become a Member
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#about" className="btn-secondary">
              Explore Our Community
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="relative z-10 border-t border-white/10 bg-white/5 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
                className="text-center"
              >
                <div className="font-serif text-3xl sm:text-4xl font-bold text-ghana-gold">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400 mt-1 tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500"
        aria-hidden="true"
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.div>
    </section>
  );
}
