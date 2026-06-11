"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

const events = [
  {
    id: 1,
    featured: true,
    title: "GNC Annual Cultural Gala 2025",
    description:
      "The premier Ghanaian event of the year. A night of traditional music, fashion, food, and community. Join us for an unforgettable evening celebrating the best of Ghanaian culture in Chicago.",
    date: "Saturday, August 16, 2025",
    time: "6:00 PM – 11:00 PM",
    location: "Chicago Marriott Downtown",
    category: "Cultural",
    categoryColor: "bg-ghana-gold/20 text-amber-700",
    spotsLeft: 40,
  },
  {
    id: 2,
    featured: false,
    title: "Ghana Independence Day Celebration",
    description:
      "Commemorate Ghana's historic independence with performances, food, and community pride.",
    date: "Thursday, March 6, 2025",
    time: "5:00 PM – 9:00 PM",
    location: "Harold Washington Library, Chicago",
    category: "Heritage",
    categoryColor: "bg-green-100 text-ghana-green",
    spotsLeft: null,
  },
  {
    id: 3,
    featured: false,
    title: "Professional Networking Mixer",
    description:
      "Connect with Ghanaian professionals and alumni across industries. Grow your network, find mentors, and build lasting relationships.",
    date: "Friday, July 11, 2025",
    time: "7:00 PM – 9:30 PM",
    location: "The Godfrey Hotel Chicago",
    category: "Networking",
    categoryColor: "bg-blue-100 text-blue-700",
    spotsLeft: 25,
  },
  {
    id: 4,
    featured: false,
    title: "Back to School Community Mixer",
    description:
      "Welcome new students and returning members. Free food, activities, and an intro to everything GNC has to offer.",
    date: "Saturday, September 6, 2025",
    time: "2:00 PM – 6:00 PM",
    location: "UIC Student Union, Chicago",
    category: "Social",
    categoryColor: "bg-purple-100 text-purple-700",
    spotsLeft: 80,
  },
  {
    id: 5,
    featured: false,
    title: "Community Service Day",
    description:
      "Give back to Chicago together. Volunteer at local food banks, schools, and community centers as one unified GNC family.",
    date: "Saturday, October 18, 2025",
    time: "9:00 AM – 2:00 PM",
    location: "Various Chicago Locations",
    category: "Service",
    categoryColor: "bg-red-100 text-ghana-red",
    spotsLeft: 50,
  },
];

const featured = events.find((e) => e.featured)!;
const upcoming = events.filter((e) => !e.featured);

export default function Events() {
  return (
    <section className="section-light" id="events">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <span className="section-label text-ghana-green mb-3 block">
              <span className="w-6 h-px bg-ghana-green inline-block align-middle mr-2" />
              Events
            </span>
            <h2 className="section-heading text-gray-900">
              What&apos;s{" "}
              <span className="text-ghana-green">Happening</span>
            </h2>
          </div>
          <Link
            href="#"
            className="text-sm font-semibold text-ghana-red flex items-center gap-1.5 hover:gap-2.5 transition-all"
          >
            View full calendar <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Featured event */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative rounded-3xl overflow-hidden mb-8 bg-gnc-dark p-8 sm:p-10 lg:p-12"
        >
          {/* Ghana colors stripe */}
          <div className="absolute top-0 left-0 right-0 flex h-1">
            <div className="flex-1 bg-ghana-red" />
            <div className="flex-1 bg-ghana-gold" />
            <div className="flex-1 bg-ghana-green" />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
            <div className="flex-1">
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-ghana-gold/20 text-ghana-gold text-xs font-semibold">
                  ★ Featured Event
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${featured.categoryColor}`}>
                  {featured.category}
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
                {featured.title}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-xl">
                {featured.description}
              </p>
              <div className="flex flex-wrap gap-5 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-ghana-gold" />
                  {featured.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-ghana-gold" />
                  {featured.time}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-ghana-gold" />
                  {featured.location}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0 w-full lg:w-auto">
              {featured.spotsLeft && (
                <p className="text-xs text-amber-400 text-center">
                  Only <span className="font-bold">{featured.spotsLeft}</span> spots remaining
                </p>
              )}
              <button className="btn-primary w-full lg:w-auto">
                Register Now <ArrowRight className="w-4 h-4" />
              </button>
              <button className="btn-secondary w-full lg:w-auto text-gray-300 border-gray-600 hover:border-gray-400">
                Add to Calendar
              </button>
            </div>
          </div>
        </motion.div>

        {/* Upcoming events grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {upcoming.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-5 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${event.categoryColor}`}>
                  {event.category}
                </span>
                {event.spotsLeft && (
                  <span className="text-[10px] text-gray-400">
                    {event.spotsLeft} spots left
                  </span>
                )}
              </div>

              <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-2">
                {event.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-4 flex-1">
                {event.description}
              </p>

              <div className="space-y-1.5 mb-4">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
                  {event.date}
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                  {event.location}
                </div>
              </div>

              <button className="w-full py-2.5 text-xs font-semibold text-ghana-red border border-ghana-red/30 rounded-xl hover:bg-ghana-red hover:text-white transition-all duration-200">
                RSVP
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
