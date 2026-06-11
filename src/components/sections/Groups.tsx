"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const affiliates = [
  {
    name: "Asanteman Association",
    tag: "Ashanti Region",
    photo: "/WhatsApp Image 2026-06-08 at 11.33.40 AM.jpeg",
    gridClass: "col-span-2 md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3",
    mobileH: "h-52",
    textSize: "text-xl",
    featured: true,
  },
  {
    name: "Brong-Ahafo Association",
    tag: "Brong-Ahafo Region",
    photo: "/WhatsApp Image 2026-06-08 at 11.33.41 AM.jpeg",
    gridClass: "md:col-start-3 md:row-start-1",
    mobileH: "h-40",
    textSize: "text-sm",
  },
  {
    name: "Fante Benevolent Society",
    tag: "Central Region",
    photo: "/WhatsApp Image 2026-06-08 at 11.33.43 AM.jpeg",
    gridClass: "md:col-start-4 md:row-start-1",
    mobileH: "h-40",
    textSize: "text-sm",
  },
  {
    name: "Gadangme Organization",
    tag: "Greater Accra",
    photo: "/WhatsApp Image 2026-06-08 at 11.33.44 AM.jpeg",
    gridClass: "md:col-start-3 md:row-start-2",
    mobileH: "h-40",
    textSize: "text-sm",
  },
  {
    name: "Ghana Northern Union",
    tag: "Northern Regions",
    photo: "/WhatsApp Image 2026-06-08 at 11.33.45 AM.jpeg",
    gridClass: "md:col-start-4 md:row-start-2",
    mobileH: "h-40",
    textSize: "text-sm",
  },
  {
    name: "Ewe Association",
    tag: "Volta Region",
    photo: "/WhatsApp Image 2026-06-08 at 11.33.46 AM.jpeg",
    gridClass: "md:col-start-1 md:row-start-3",
    mobileH: "h-40",
    textSize: "text-sm",
  },
  {
    name: "Haske Society",
    tag: "Community Service",
    photo: "/WhatsApp Image 2026-06-08 at 11.33.47 AM.jpeg",
    gridClass: "md:col-start-2 md:row-start-3",
    mobileH: "h-40",
    textSize: "text-sm",
  },
  {
    name: "Kwahu United",
    tag: "Eastern Region",
    photo: "/WhatsApp Image 2026-06-08 at 11.33.49 AM.jpeg",
    gridClass: "md:col-start-3 md:row-start-3",
    mobileH: "h-40",
    textSize: "text-sm",
  },
  {
    name: "Mmrantie Kuo",
    tag: "Youth & Culture",
    photo: "/WhatsApp Image 2026-06-08 at 11.33.50 AM.jpeg",
    gridClass: "md:col-start-4 md:row-start-3",
    mobileH: "h-40",
    textSize: "text-sm",
  },
  {
    name: "Okuapeman Fekuw",
    tag: "Eastern Region",
    photo: "/WhatsApp Image 2026-06-08 at 11.33.52 AM.jpeg",
    gridClass: "col-span-2 md:col-start-1 md:col-end-3 md:row-start-4",
    mobileH: "h-40",
    textSize: "text-base",
  },
  {
    name: "Okyeman Association",
    tag: "Eastern Region",
    photo: "/WhatsApp Image 2026-06-08 at 11.33.52 AM (1).jpeg",
    gridClass: "col-span-2 md:col-start-3 md:col-end-5 md:row-start-4",
    mobileH: "h-40",
    textSize: "text-base",
  },
];

export default function Groups() {
  return (
    <section className="section-off" id="affiliates">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="section-label text-ghana-red mb-3 block">
            <span className="w-6 h-px bg-ghana-red inline-block align-middle mr-2" />
            Our Affiliates
            <span className="w-6 h-px bg-ghana-red inline-block align-middle ml-2" />
          </span>
          <h2 className="section-heading text-gray-900 mb-4">
            United by Heritage,{" "}
            <span className="text-ghana-red">Stronger Together</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            GNC brings together eleven proud Ghanaian associations across Metropolitan Chicago,
            each celebrating its own culture, traditions, and community.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-[200px_200px_160px_160px] gap-3 md:gap-4"
        >
          {affiliates.map((affiliate, i) => (
            <motion.div
              key={affiliate.name}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${affiliate.gridClass} ${affiliate.mobileH} md:h-full`}
            >
              {/* Photo */}
              <Image
                src={affiliate.photo}
                alt={affiliate.name}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />

              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-ghana-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Tag top-left */}
              <div className="absolute top-3 left-3">
                <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-white/80 bg-black/30 backdrop-blur-sm border border-white/10 rounded-full px-2.5 py-1">
                  {affiliate.tag}
                </span>
              </div>

              {/* Ghana flag accent dot top-right */}
              <div className="absolute top-3 right-3 flex gap-1">
                <span className="w-2 h-2 rounded-full bg-ghana-red" />
                <span className="w-2 h-2 rounded-full bg-ghana-gold" />
                <span className="w-2 h-2 rounded-full bg-ghana-green" />
              </div>

              {/* Name bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className={`font-bold text-white leading-tight ${affiliate.textSize} drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]`}>
                  {affiliate.name}
                </h3>
                <div className="mt-1 w-0 group-hover:w-8 h-0.5 bg-ghana-gold transition-all duration-300 rounded-full" />
              </div>

              {/* Hover border glow */}
              <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 ring-ghana-gold/40 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 mb-5 text-base">
            Each affiliate is a family. Together, we are the Ghana National Council.
          </p>
          <Link href="#join" className="btn-primary inline-flex">
            Join Our Community
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
