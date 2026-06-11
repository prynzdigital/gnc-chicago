"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Users, Calendar, Award, GraduationCap } from "lucide-react";

interface Stat {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  description: string;
  color: string;
}

const stats: Stat[] = [
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Members Served",
    description: "Active members across all chapters and programs",
    color: "text-ghana-green",
  },
  {
    icon: Calendar,
    value: 50,
    suffix: "+",
    label: "Events Hosted",
    description: "Cultural, educational, and networking events per year",
    color: "text-ghana-red",
  },
  {
    icon: Award,
    value: 12,
    suffix: "+",
    label: "Scholarships Awarded",
    description: "Students supported through academic excellence",
    color: "text-ghana-gold",
  },
  {
    icon: GraduationCap,
    value: 200,
    suffix: "+",
    label: "Alumni Network",
    description: "Ghanaian professionals staying connected",
    color: "text-blue-500",
  },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Impact() {
  return (
    <section className="section-light" id="impact">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="section-label text-ghana-green mb-3 block">
            <span className="w-6 h-px bg-ghana-green inline-block align-middle mr-2" />
            Our Impact
            <span className="w-6 h-px bg-ghana-green inline-block align-middle ml-2" />
          </span>
          <h2 className="section-heading text-gray-900 mb-4">
            Numbers That Tell{" "}
            <span className="text-ghana-red">Our Story</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Behind every number is a life changed, a connection made, a dream pursued. This is
            what GNC means to our community.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative p-8 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-xl transition-all duration-300 text-center"
              >
                {/* Subtle top accent */}
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-12 h-0.5 rounded-full ${
                  i === 0 ? "bg-ghana-green" : i === 1 ? "bg-ghana-red" : i === 2 ? "bg-ghana-gold" : "bg-blue-400"
                }`} />

                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 ${
                  i === 0 ? "bg-green-50" : i === 1 ? "bg-red-50" : i === 2 ? "bg-yellow-50" : "bg-blue-50"
                }`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>

                <div className={`font-serif text-5xl font-bold mb-2 ${stat.color}`}>
                  <AnimatedNumber target={stat.value} suffix={stat.suffix} />
                </div>

                <div className="font-semibold text-gray-900 mb-2">{stat.label}</div>
                <p className="text-sm text-gray-400 leading-relaxed">{stat.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <blockquote className="text-2xl font-serif text-gray-400 italic max-w-2xl mx-auto">
            &ldquo;We rise by lifting others.&rdquo;
          </blockquote>
          <p className="text-sm text-gray-400 mt-2">— The GNC Community</p>
        </motion.div>
      </div>
    </section>
  );
}
