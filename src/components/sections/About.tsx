"use client";

import { motion } from "framer-motion";
import { Heart, Star, Target, Users } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Unity",
    description: "We believe in the power of togetherness — no Ghanaian stands alone in our community.",
    color: "bg-green-50 text-ghana-green",
  },
  {
    icon: Star,
    title: "Excellence",
    description: "We hold ourselves to the highest standard in everything we do, honoring the Black Star legacy.",
    color: "bg-yellow-50 text-amber-600",
  },
  {
    icon: Heart,
    title: "Service",
    description: "We give back to our community and to Ghana, because our success is collective.",
    color: "bg-red-50 text-ghana-red",
  },
  {
    icon: Target,
    title: "Purpose",
    description: "Every event, program, and partnership is driven by mission — not just activity.",
    color: "bg-blue-50 text-blue-600",
  },
];

export default function About() {
  return (
    <section className="section-dark" id="about">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Story */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label text-ghana-gold mb-4 block">
              <span className="w-6 h-px bg-ghana-gold inline-block align-middle mr-2" />
              About GNC
            </span>
            <h2 className="section-heading text-white mb-6">
              More Than an Organization.{" "}
              <span className="text-ghana-gold">A Family.</span>
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                The Ghana National Council was founded on a simple but powerful belief: that
                Ghanaians — whether students, professionals, or community members — thrive when
                they come together. GNC is that gathering place.
              </p>
              <p>
                Based in Chicago, we serve as the bridge between Ghanaian heritage and American
                opportunity. We celebrate the richness of our culture, support members in their
                personal and professional journeys, and build the kind of community that lasts
                beyond any single chapter.
              </p>
              <p>
                From our annual cultural galas to academic scholarships, from professional
                networking nights to community service days — GNC is where Ghanaian life in
                Chicago happens.
              </p>
            </div>

            {/* Mission/Vision pills */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl border border-gnc-border bg-gnc-card">
                <div className="text-ghana-gold text-xs font-semibold tracking-widest uppercase mb-2">Our Mission</div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  To unite and empower Ghanaians through culture, education, and community engagement.
                </p>
              </div>
              <div className="p-5 rounded-xl border border-gnc-border bg-gnc-card">
                <div className="text-ghana-green text-xs font-semibold tracking-widest uppercase mb-2">Our Vision</div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  A thriving, connected Ghanaian community that uplifts every member and honors our heritage.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — Values */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-4"
          >
            <h3 className="text-white font-semibold text-lg mb-6">Our Core Values</h3>
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  className="flex gap-4 p-5 rounded-xl border border-gnc-border bg-gnc-card hover:border-ghana-gold/30 transition-colors"
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${v.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">{v.title}</div>
                    <p className="text-sm text-gray-400 leading-relaxed">{v.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
