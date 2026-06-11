"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

type DirectoryItem = {
  type: "Affiliate" | "Group";
  name: string;
  photo: string;
  description: string;
  region?: string;
};

const affiliates: DirectoryItem[] = [
  {
    type: "Affiliate",
    name: "Asanteman Association",
    photo: "/WhatsApp Image 2026-06-08 at 11.33.40 AM.jpeg",
    description:
      "Representing the proud traditions of the Ashanti people, uniting Asante families across Chicagoland through culture and fellowship.",
    region: "Ashanti Region",
  },
  {
    type: "Affiliate",
    name: "Brong-Ahafo Association",
    photo: "/WhatsApp Image 2026-06-08 at 11.33.41 AM.jpeg",
    description:
      "Celebrating the rich traditions of the Brong-Ahafo region, fostering bonds of unity among its members in Metropolitan Chicago.",
    region: "Brong-Ahafo Region",
  },
  {
    type: "Affiliate",
    name: "Fante Benevolent Society",
    photo: "/WhatsApp Image 2026-06-08 at 11.33.43 AM.jpeg",
    description:
      "Dedicated to the welfare of Fante communities, promoting education, charitable giving, and cultural preservation in the diaspora.",
    region: "Central Region",
  },
  {
    type: "Affiliate",
    name: "Gadangme Organization",
    photo: "/WhatsApp Image 2026-06-08 at 11.33.44 AM.jpeg",
    description:
      "Connecting Ga-Dangme communities across Chicago, preserving language, customs, and fostering community development.",
    region: "Greater Accra",
  },
  {
    type: "Affiliate",
    name: "Ghana Northern Union",
    photo: "/WhatsApp Image 2026-06-08 at 11.33.45 AM.jpeg",
    description:
      "Uniting communities from Ghana's Northern regions, honoring diverse traditions while building a strong support network.",
    region: "Northern Regions",
  },
  {
    type: "Affiliate",
    name: "Ewe Association",
    photo: "/WhatsApp Image 2026-06-08 at 11.33.46 AM.jpeg",
    description:
      "Preserving the vibrant Ewe culture and language, bringing together families from the Volta region across Chicagoland.",
    region: "Volta Region",
  },
  {
    type: "Affiliate",
    name: "Haske Society",
    photo: "/WhatsApp Image 2026-06-08 at 11.33.47 AM.jpeg",
    description:
      "Committed to community service, youth development, and inter-ethnic harmony among Ghanaians throughout Chicago.",
    region: "Community Service",
  },
  {
    type: "Affiliate",
    name: "Kwahu United",
    photo: "/WhatsApp Image 2026-06-08 at 11.33.49 AM.jpeg",
    description:
      "Bringing together the resilient Kwahu people, known for their entrepreneurial spirit and strong community ties in the diaspora.",
    region: "Eastern Region",
  },
  {
    type: "Affiliate",
    name: "Mmrantie Kuo",
    photo: "/WhatsApp Image 2026-06-08 at 11.33.50 AM.jpeg",
    description:
      "A dynamic organization dedicated to preserving Ghanaian heritage and developing the next generation of community leaders.",
    region: "Youth & Culture",
  },
  {
    type: "Affiliate",
    name: "Okuapeman Fekuw",
    photo: "/WhatsApp Image 2026-06-08 at 11.33.52 AM.jpeg",
    description:
      "Strengthening bonds among the Okuapeman people in the diaspora, upholding shared values, culture, and mutual support.",
    region: "Eastern Region",
  },
  {
    type: "Affiliate",
    name: "Okyeman Association",
    photo: "/WhatsApp Image 2026-06-08 at 11.33.52 AM (1).jpeg",
    description:
      "Representing the historic Okyeman community and honoring the legacy of Akyem traditions across Metropolitan Chicago.",
    region: "Eastern Region",
  },
];

const groups: DirectoryItem[] = [
  {
    type: "Group",
    name: "Executive Board",
    photo: "/Mr President.jpeg",
    description:
      "The governing body of GNC — setting strategic direction, managing operations, and representing the organization at all levels.",
    region: "Leadership",
  },
  {
    type: "Group",
    name: "Student Affairs",
    photo: "/WhatsApp Image 2026-06-08 at 11.35.10 AM.jpeg",
    description:
      "Advocating for Ghanaian student success through academic support, mentorship, scholarships, and career development programs.",
    region: "Academics",
  },
  {
    type: "Group",
    name: "Cultural Committee",
    photo: "/WhatsApp Image 2026-06-08 at 11.35.11 AM.jpeg",
    description:
      "Celebrating and preserving Ghanaian heritage through dance, music, art, and storytelling across the Chicago community.",
    region: "Culture & Arts",
  },
  {
    type: "Group",
    name: "Community Outreach",
    photo: "/WhatsApp Image 2026-06-08 at 11.35.12 AM.jpeg",
    description:
      "Connecting GNC to the broader Chicago community through volunteering, charity drives, and civic engagement initiatives.",
    region: "Service",
  },
  {
    type: "Group",
    name: "Events & Entertainment",
    photo: "/WhatsApp Image 2026-06-08 at 11.35.14 AM.jpeg",
    description:
      "Producing GNC's signature events — from intimate networking mixers to the beloved Annual Cultural Gala and GHANAFEST.",
    region: "Events",
  },
  {
    type: "Group",
    name: "Finance Committee",
    photo: "/WhatsApp Image 2026-06-08 at 11.35.17 AM.jpeg",
    description:
      "Stewarding GNC's financial health through responsible budgeting, fundraising campaigns, and transparent reporting.",
    region: "Finance",
  },
  {
    type: "Group",
    name: "Communications & PR",
    photo: "/WhatsApp Image 2026-06-08 at 11.35.18 AM.jpeg",
    description:
      "Amplifying GNC's voice across social media, newsletters, press releases, and public relations channels.",
    region: "Media",
  },
  {
    type: "Group",
    name: "Alumni Relations",
    photo: "/WhatsApp Image 2026-06-08 at 11.35.21 AM.jpeg",
    description:
      "Bridging current members with a growing network of Ghanaian professionals and alumni committed to giving back.",
    region: "Alumni",
  },
];

const allItems: DirectoryItem[] = [...affiliates, ...groups];
const ITEMS_PER_PAGE = 8;

const typeColors = {
  Affiliate: { badge: "bg-ghana-red/10 text-ghana-red border-ghana-red/20", dot: "bg-ghana-red" },
  Group: { badge: "bg-ghana-green/10 text-ghana-green border-ghana-green/20", dot: "bg-ghana-green" },
};

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "6%" : "-6%",
    opacity: 0,
  }),
  center: {
    x: "0%",
    opacity: 1,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? "-6%" : "6%",
    opacity: 0,
    transition: { duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

function DirectoryCard({ item, index }: { item: DirectoryItem; index: number }) {
  const colors = typeColors[item.type];
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
    >
      {/* Photo */}
      <div className="relative h-44 overflow-hidden flex-shrink-0">
        <Image
          src={item.photo}
          alt={item.name}
          fill
          className="object-cover object-center transition-transform duration-600 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        {/* Region tag bottom-left */}
        {item.region && (
          <span className="absolute bottom-3 left-3 text-[10px] text-white/90 bg-black/30 backdrop-blur-sm rounded-full px-2 py-0.5 font-medium">
            {item.region}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        {/* Type badge */}
        <span className={`inline-flex items-center gap-1.5 self-start text-[10px] font-bold uppercase tracking-widest border rounded-full px-2.5 py-1 mb-3 ${colors.badge}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
          {item.type}
        </span>

        <h3 className="font-bold text-gray-900 text-sm leading-snug mb-2 group-hover:text-ghana-red transition-colors">
          {item.name}
        </h3>
        <p className="text-xs text-gray-500 leading-relaxed flex-1 mb-4">
          {item.description}
        </p>

        {/* CTA */}
        <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-ghana-green hover:text-ghana-red transition-colors group/cta self-start">
          Learn More
          <ArrowRight className="w-3.5 h-3.5 group-hover/cta:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}

export default function Directory() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const totalPages = Math.ceil(allItems.length / ITEMS_PER_PAGE);
  const visibleItems = allItems.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

  const goNext = () => {
    if (page < totalPages - 1) {
      setDirection(1);
      setPage((p) => p + 1);
    }
  };

  const goPrev = () => {
    if (page > 0) {
      setDirection(-1);
      setPage((p) => p - 1);
    }
  };

  const goTo = (p: number) => {
    setDirection(p > page ? 1 : -1);
    setPage(p);
  };

  return (
    <section className="section-light" id="directory">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="section-label text-ghana-green mb-3 block">
            <span className="w-6 h-px bg-ghana-green inline-block align-middle mr-2" />
            Community Directory
            <span className="w-6 h-px bg-ghana-green inline-block align-middle ml-2" />
          </span>
          <h2 className="section-heading text-gray-900 mb-4">
            Affiliates &{" "}
            <span className="text-ghana-green">Groups</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Explore the organizations and committees that make up the Ghana National Council
            of Metropolitan Chicago. Every group has a home here.
          </p>

          {/* Legend */}
          <div className="flex items-center justify-center gap-6 mt-5">
            <span className="flex items-center gap-2 text-xs text-gray-500">
              <span className="w-2.5 h-2.5 rounded-full bg-ghana-red" />
              Affiliate Organization
            </span>
            <span className="flex items-center gap-2 text-xs text-gray-500">
              <span className="w-2.5 h-2.5 rounded-full bg-ghana-green" />
              GNC Group / Committee
            </span>
          </div>
        </motion.div>

        {/* Carousel wrapper */}
        <div className="relative">
          {/* Prev Arrow */}
          <button
            onClick={goPrev}
            disabled={page === 0}
            aria-label="Previous page"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-700 hover:bg-ghana-red hover:text-white hover:border-ghana-red transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-700 disabled:hover:border-gray-200 hidden sm:flex"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={goNext}
            disabled={page === totalPages - 1}
            aria-label="Next page"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-700 hover:bg-ghana-red hover:text-white hover:border-ghana-red transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-700 disabled:hover:border-gray-200 hidden sm:flex"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Cards grid */}
          <div className="overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
              >
                {visibleItems.map((item, i) => (
                  <DirectoryCard key={item.name} item={item} index={i} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom controls: mobile arrows + page dots */}
        <div className="flex items-center justify-center gap-4 mt-10">
          {/* Mobile prev */}
          <button
            onClick={goPrev}
            disabled={page === 0}
            aria-label="Previous page"
            className="sm:hidden w-10 h-10 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center text-gray-700 hover:bg-ghana-red hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to page ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === page
                    ? "w-6 h-2.5 bg-ghana-red"
                    : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Mobile next */}
          <button
            onClick={goNext}
            disabled={page === totalPages - 1}
            aria-label="Next page"
            className="sm:hidden w-10 h-10 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center text-gray-700 hover:bg-ghana-red hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Item count */}
        <p className="text-center text-xs text-gray-400 mt-3">
          Showing {page * ITEMS_PER_PAGE + 1}–{Math.min((page + 1) * ITEMS_PER_PAGE, allItems.length)} of {allItems.length} organizations
        </p>
      </div>
    </section>
  );
}
