"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "GNC gave me my people in Chicago. I came not knowing anyone, and within a month I had a community that felt like home. Three years later, some of my closest friendships started at a GNC event.",
    name: "Abena Mensah",
    role: "Graduate Student, UIC",
    initials: "AM",
    color: "bg-ghana-green text-white",
  },
  {
    id: 2,
    quote:
      "As an alumni, giving back through GNC has been one of the most fulfilling things I've done. Mentoring younger Ghanaians and watching them grow — that's the legacy I want to leave.",
    name: "Kwame Asante",
    role: "Software Engineer & GNC Alumni",
    initials: "KA",
    color: "bg-ghana-red text-white",
  },
  {
    id: 3,
    quote:
      "The GNC Gala is the event of the year. The energy, the fashion, the food — it's like a piece of Ghana right here in Chicago. I bring my friends every year because everyone deserves to experience it.",
    name: "Ama Boateng",
    role: "Event Volunteer & Member",
    initials: "AB",
    color: "bg-ghana-gold text-gray-900",
  },
  {
    id: 4,
    quote:
      "Sponsoring GNC was one of our best decisions. The organization is run with incredible professionalism and heart. Our brand reached exactly the audience we wanted — educated, ambitious Ghanaian professionals.",
    name: "David Chen",
    role: "CEO, Chicago Impact Group",
    initials: "DC",
    color: "bg-blue-600 text-white",
  },
  {
    id: 5,
    quote:
      "I applied for the GNC scholarship and it covered my summer course fees. But more than the money, the mentorship I received through GNC shaped how I think about my career and my roots.",
    name: "Nana Osei",
    role: "Scholarship Recipient, DePaul University",
    initials: "NO",
    color: "bg-purple-600 text-white",
  },
  {
    id: 6,
    quote:
      "What I love about GNC is the mix — students, professionals, alumni, parents — all under one roof. It's rare to find an organization that bridges so many life stages with so much genuine warmth.",
    name: "Efua Darko",
    role: "GNC Board Member",
    initials: "ED",
    color: "bg-gnc-dark text-white",
  },
];

// Duplicate for seamless loop
const allTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section className="section-off overflow-hidden" id="testimonials">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="section-label text-ghana-gold mb-3 block">
            <span className="w-6 h-px bg-ghana-gold inline-block align-middle mr-2" />
            Testimonials
            <span className="w-6 h-px bg-ghana-gold inline-block align-middle ml-2" />
          </span>
          <h2 className="section-heading text-gray-900 mb-4">
            Voices of Our{" "}
            <span className="text-ghana-gold">Community</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            The real measure of GNC is the impact felt by every member, alumni, and partner who
            has been part of our journey.
          </p>
        </motion.div>
      </div>

      {/* Scrolling carousel — extends past container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-5 animate-scroll w-max">
          {allTestimonials.map((t, i) => (
            <div
              key={`${t.id}-${i}`}
              className="w-[340px] flex-shrink-0 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm flex flex-col"
            >
              <Quote className="w-6 h-6 text-gray-200 mb-4" />
              <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${t.color}`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
