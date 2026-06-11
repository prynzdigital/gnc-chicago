"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Music, DollarSign, Megaphone, Handshake, Heart, Trophy, GraduationCap } from "lucide-react";
import Link from "next/link";

const groups = [
  {
    icon: Trophy,
    name: "Executive Board",
    description:
      "The governing body of GNC. Sets strategic direction, manages operations, and represents the organization at all levels.",
    members: 12,
    color: "from-yellow-500/10 to-yellow-600/5 border-yellow-500/20",
    iconColor: "text-ghana-gold bg-yellow-50",
    tag: "Leadership",
  },
  {
    icon: GraduationCap,
    name: "Student Affairs",
    description:
      "Advocates for student success — from academic support and tutoring circles to career workshops and mentorship pairing.",
    members: 85,
    color: "from-blue-500/10 to-blue-600/5 border-blue-500/20",
    iconColor: "text-blue-600 bg-blue-50",
    tag: "Academics",
  },
  {
    icon: Music,
    name: "Cultural Committee",
    description:
      "Celebrates and preserves Ghanaian culture through dance, music, art, and storytelling. Brings heritage to life in Chicago.",
    members: 60,
    color: "from-ghana-red/10 to-ghana-red/5 border-ghana-red/20",
    iconColor: "text-ghana-red bg-red-50",
    tag: "Culture",
  },
  {
    icon: Heart,
    name: "Community Outreach",
    description:
      "Connects GNC to the broader Chicago community through volunteering, drives, and partnerships with local organizations.",
    members: 45,
    color: "from-ghana-green/10 to-ghana-green/5 border-ghana-green/20",
    iconColor: "text-ghana-green bg-green-50",
    tag: "Service",
  },
  {
    icon: Handshake,
    name: "Events & Entertainment",
    description:
      "Produces GNC's signature events — from intimate mixers to the annual cultural gala. Creates unforgettable experiences.",
    members: 40,
    color: "from-purple-500/10 to-purple-600/5 border-purple-500/20",
    iconColor: "text-purple-600 bg-purple-50",
    tag: "Events",
  },
  {
    icon: DollarSign,
    name: "Finance Committee",
    description:
      "Stewards GNC's financial health through responsible budgeting, fundraising campaigns, and transparent reporting.",
    members: 15,
    color: "from-emerald-500/10 to-emerald-600/5 border-emerald-500/20",
    iconColor: "text-emerald-600 bg-emerald-50",
    tag: "Finance",
  },
  {
    icon: Megaphone,
    name: "Communications & PR",
    description:
      "Amplifies GNC's voice across digital and traditional channels. Manages social media, newsletter, and public relations.",
    members: 25,
    color: "from-orange-500/10 to-orange-600/5 border-orange-500/20",
    iconColor: "text-orange-600 bg-orange-50",
    tag: "Media",
  },
  {
    icon: BookOpen,
    name: "Alumni Relations",
    description:
      "Bridges current members with a growing network of Ghanaian professionals and alumni committed to giving back.",
    members: 120,
    color: "from-indigo-500/10 to-indigo-600/5 border-indigo-500/20",
    iconColor: "text-indigo-600 bg-indigo-50",
    tag: "Alumni",
  },
];

export default function Groups() {
  return (
    <section className="section-off" id="groups">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="section-label text-ghana-red mb-3 block">
            <span className="w-6 h-px bg-ghana-red inline-block align-middle mr-2" />
            Our Groups
            <span className="w-6 h-px bg-ghana-red inline-block align-middle ml-2" />
          </span>
          <h2 className="section-heading text-gray-900 mb-4">
            Find Your Place{" "}
            <span className="text-ghana-red">Within GNC</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            GNC is made up of dedicated departments, each with its own mission, leadership, and community.
            Find the group that speaks to your passion.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((group, i) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`group relative p-6 rounded-2xl border bg-gradient-to-br ${group.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
              >
                {/* Tag */}
                <span className="absolute top-4 right-4 text-[10px] font-semibold text-gray-400 tracking-wider uppercase">
                  {group.tag}
                </span>

                <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl mb-4 ${group.iconColor}`}>
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="font-semibold text-gray-900 mb-2 text-sm leading-snug pr-8">
                  {group.name}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  {group.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">
                    <span className="font-semibold text-gray-600">{group.members}</span> members
                  </span>
                  <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-ghana-red group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-3 h-3 text-gray-400 group-hover:text-white" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 mb-4">
            Not sure where you fit? Every GNC member is welcome everywhere.
          </p>
          <Link href="#join" className="btn-primary inline-flex">
            Join GNC Today
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
