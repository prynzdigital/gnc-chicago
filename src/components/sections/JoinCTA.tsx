"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const perks = [
  "Access to all GNC events at member pricing",
  "Join any of our 8 community groups",
  "Scholarship and funding opportunities",
  "Professional mentorship network",
  "Alumni connections across industries",
  "Monthly newsletter and announcements",
];

export default function JoinCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", school: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email) setSubmitted(true);
  };

  return (
    <section className="relative section-off overflow-hidden" id="join">
      {/* Ghana tricolor strip */}
      <div className="absolute top-0 left-0 right-0 flex h-1">
        <div className="flex-1 bg-ghana-red" />
        <div className="flex-1 bg-ghana-gold" />
        <div className="flex-1 bg-ghana-green" />
      </div>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label text-ghana-green mb-4 block">
              <span className="w-6 h-px bg-ghana-green inline-block align-middle mr-2" />
              Become a Member
            </span>
            <h2 className="section-heading text-gray-900 mb-4">
              Your Community{" "}
              <span className="text-ghana-green">Is Waiting.</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Whether you&apos;re a student just arriving in Chicago or an established
              professional looking to reconnect with your roots — GNC is your home. Membership
              is free and open to all Ghanaians and friends of Ghana.
            </p>

            <ul className="space-y-3">
              {perks.map((perk, i) => (
                <motion.li
                  key={perk}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-3 text-sm text-gray-600"
                >
                  <CheckCircle2 className="w-5 h-5 text-ghana-green flex-shrink-0" />
                  {perk}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
          >
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-ghana-green" />
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
                  Welcome to GNC! 🎉
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Thank you, {form.name}! Our team will reach out to you at{" "}
                  <span className="font-semibold text-gray-700">{form.email}</span> within 24
                  hours with your membership details and next steps.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-1">
                    Express Your Interest
                  </h3>
                  <p className="text-sm text-gray-400">
                    Fill out the form and we&apos;ll be in touch within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="join-name" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="join-name"
                      type="text"
                      required
                      placeholder="e.g. Akosua Mensah"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-ghana-green transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="join-email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="join-email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-ghana-green transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="join-school" className="block text-sm font-medium text-gray-700 mb-1.5">
                      School / Organization
                    </label>
                    <input
                      id="join-school"
                      type="text"
                      placeholder="e.g. University of Illinois Chicago"
                      value={form.school}
                      onChange={(e) => setForm({ ...form, school: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-ghana-green transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-ghana-green text-white font-bold rounded-2xl hover:bg-green-800 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl mt-2"
                  >
                    Join GNC — It&apos;s Free
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    Free membership · No spam · Unsubscribe anytime
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
