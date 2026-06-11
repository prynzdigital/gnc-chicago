"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Calendar, Award, GraduationCap } from "lucide-react";

/* ── Animated counter ─────────────────────────────────────── */
function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ── Data ─────────────────────────────────────────────────── */
const stats = [
  { icon: Users,        value: 500, suffix: "+", label: "Members",      color: "text-ghana-green" },
  { icon: Calendar,     value: 50,  suffix: "+", label: "Events",        color: "text-ghana-red"   },
  { icon: Award,        value: 12,  suffix: "+", label: "Scholarships",  color: "text-ghana-gold"  },
  { icon: GraduationCap,value: 200, suffix: "+", label: "Alumni",        color: "text-blue-400"    },
];

// Bento grid — 7 photos + 1 stats card (index 5)
const bentoPhotos = [
  { src: "/WhatsApp Image 2026-06-08 at 11.33.40 AM.jpeg",  alt: "GNC Annual Gala",         label: "Annual Cultural Gala",  tag: "✦ Flagship Event" },
  { src: "/WhatsApp Image 2026-06-08 at 11.33.41 AM.jpeg",  alt: "GNC Community",           label: "Our Community",         tag: "Members"          },
  { src: "/WhatsApp Image 2026-06-08 at 11.33.43 AM.jpeg",  alt: "Cultural Celebrations",   label: "Cultural Celebrations", tag: "Culture"          },
  { src: "/WhatsApp Image 2026-06-08 at 1.34.09 PM.jpeg",   alt: "GNC Event",               label: "Community Events",      tag: "Together"         },
  { src: "/WhatsApp Image 2026-06-08 at 11.33.44 AM.jpeg",  alt: "GNC Members",             label: "GNC Leadership",        tag: "Excellence"       },
  { src: "/Mr President.jpeg",                              alt: "GNC President",           label: "Our President",         tag: "Leadership"       },
  { src: "/WhatsApp Image 2026-06-08 at 11.33.45 AM.jpeg",  alt: "Making Impact",           label: "Making Impact",         tag: "Service"          },
];

// Auto-scrolling strip — duplicated for seamless loop
const stripSrcs = [
  "/WhatsApp Image 2026-06-08 at 11.33.46 AM.jpeg",
  "/WhatsApp Image 2026-06-08 at 11.33.47 AM.jpeg",
  "/WhatsApp Image 2026-06-08 at 11.33.50 AM.jpeg",
  "/WhatsApp Image 2026-06-08 at 11.35.10 AM.jpeg",
  "/WhatsApp Image 2026-06-08 at 11.35.11 AM.jpeg",
  "/WhatsApp Image 2026-06-08 at 11.35.12 AM.jpeg",
  "/WhatsApp Image 2026-06-08 at 11.39.19 AM.jpeg",
  "/WhatsApp Image 2026-06-08 at 11.39.29 AM.jpeg",
  "/Nkrumah.jpeg",
  "/1.jpeg",
];
const strip = [...stripSrcs, ...stripSrcs];

/* ── Photo card ───────────────────────────────────────────── */
function PhotoCard({
  photo,
  className,
}: {
  photo: typeof bentoPhotos[number];
  className?: string;
}) {
  return (
    <div className={`relative rounded-2xl overflow-hidden group ${className ?? ""}`}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 50vw, 25vw"
      />
      {/* persistent bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
      {/* tag */}
      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-[10px] font-semibold tracking-wide">
        {photo.tag}
      </span>
      {/* label */}
      <p className="absolute bottom-3 left-3 right-3 text-white font-semibold text-sm leading-tight">
        {photo.label}
      </p>
    </div>
  );
}

/* ── Main component ───────────────────────────────────────── */
export default function Impact() {
  return (
    <section className="section-light overflow-hidden" id="impact">
      <div className="container-custom">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="section-label text-ghana-green mb-3 block">
            <span className="w-6 h-px bg-ghana-green inline-block align-middle mr-2" />
            Our Impact
            <span className="w-6 h-px bg-ghana-green inline-block align-middle ml-2" />
          </span>
          <h2 className="section-heading text-gray-900 mb-4">
            Stories in{" "}
            <span className="text-ghana-red">Every Frame</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            From annual galas to community service days — every photo is a chapter in the GNC story.
          </p>
        </motion.div>

        {/* ── Bento grid ── */}
        {/*
          Desktop (md, 4 cols, 3 explicit rows):
            Row 1 (192px): Photo0 (col-span-2, row-span-2)  | Photo1 | Photo2
            Row 2 (192px): Photo0 continued                 | Photo3 | Photo4
            Row 3 (130px): Stats card (col-span-2)          | Photo5 | Photo6

          Mobile (2 cols, auto rows — explicit h-* on each item):
            [Photo0 full-width 200px]
            [Photo1 h-40][Photo2 h-40]
            [Photo3 h-40][Photo4 h-40]
            [Stats full-width auto]
            [Photo5 h-32][Photo6 h-32]
        */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-[192px_192px_130px] gap-3 mb-3"
        >
          {/* 0 — large featured */}
          <PhotoCard
            photo={bentoPhotos[0]}
            className="col-span-2 md:col-span-2 md:row-span-2 h-[200px] md:h-full"
          />

          {/* 1, 2 — top-right pair */}
          <PhotoCard photo={bentoPhotos[1]} className="col-span-1 h-40 md:h-full" />
          <PhotoCard photo={bentoPhotos[2]} className="col-span-1 h-40 md:h-full" />

          {/* 3, 4 — middle-right pair */}
          <PhotoCard photo={bentoPhotos[3]} className="col-span-1 h-40 md:h-full" />
          <PhotoCard photo={bentoPhotos[4]} className="col-span-1 h-40 md:h-full" />

          {/* Stats card — col-span-2 in row 3 */}
          <div className="col-span-2 md:col-span-2 rounded-2xl bg-gnc-dark px-6 py-5 flex items-center">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-3 w-full">
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                      <Icon className={`w-4 h-4 ${s.color}`} />
                    </div>
                    <div>
                      <div className={`font-serif text-xl font-bold leading-none ${s.color}`}>
                        <AnimatedNumber target={s.value} suffix={s.suffix} />
                      </div>
                      <div className="text-gray-400 text-[11px] mt-0.5">{s.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 5, 6 — bottom-right pair */}
          <PhotoCard photo={bentoPhotos[5]} className="col-span-1 h-32 md:h-full" />
          <PhotoCard photo={bentoPhotos[6]} className="col-span-1 h-32 md:h-full" />
        </motion.div>

        {/* ── Auto-scrolling photo strip ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="relative overflow-hidden rounded-2xl"
        >
          {/* fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex gap-3 animate-scroll py-0.5">
            {strip.map((src, i) => (
              <div
                key={i}
                className="relative w-44 h-28 flex-shrink-0 rounded-xl overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`GNC moment ${(i % stripSrcs.length) + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="176px"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Closing quote ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <blockquote className="text-xl sm:text-2xl font-serif text-gray-400 italic max-w-xl mx-auto">
            &ldquo;We rise by lifting others.&rdquo;
          </blockquote>
          <p className="text-sm text-gray-400 mt-2">— The GNC Community</p>
        </motion.div>

      </div>
    </section>
  );
}
