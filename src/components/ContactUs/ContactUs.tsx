
import { motion } from "framer-motion";
import { JSX } from "react";
import {
  FaDiscord,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

type ContactItem = {
  name: string;
  description: string;
  icon: JSX.Element;
  link: string;
  color: string;
};

const CONTACTS: ContactItem[] = [
  {
    name: "Discord",
    description: "Join our community & get support",
    icon: <FaDiscord size={42} />,
    link: "https://discord.gg/2ZsBGcYCgd",
    color: "from-indigo-500 to-purple-600",
  },
  {
    name: "Instagram",
    description: "Follow updates, events & highlights",
    icon: <FaInstagram size={42} />,
    link:"https://www.instagram.com/reyescityrp/",
    color: "from-pink-500 to-orange-500",
  },
  {
    name: "YouTube",
    description: "Watch trailers, streams & lore",
    icon: <FaYoutube size={42} />,
    link: "https://www.youtube.com/@reyescity",
    color: "from-red-500 to-red-700",
  },
];

export default function ContactUs() {
  return (
    <section className="relative bg-black py-24 text-white">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black opacity-90" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-white/70">
            Stay connected with Reyes City across all platforms
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {CONTACTS.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.08, rotateX: 6, rotateY: -6 }}
              className="
                group
                relative
                rounded-3xl
                bg-white/5
                p-10
                text-center
                backdrop-blur
                transition
                hover:bg-white/10
              "
            >
              {/* Glow */}
              <div
                className={`absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br ${item.color} opacity-0 blur-2xl transition group-hover:opacity-40`}
              />

              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color}`}
                >
                  {item.icon}
                </div>
              </div>

              {/* Text */}
              <h3 className="text-xl font-semibold">
                {item.name}
              </h3>
              <p className="mt-2 text-sm text-white/70">
                {item.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
