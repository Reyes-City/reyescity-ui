import { motion } from "framer-motion";

type Partner = {
  id: string;
  name: string;
  description: string;
  logo: string;
};

type Props = {
  partners: Partner[];
};

export default function Partnerships({ partners }: Props) {
  const isSingle = partners.length === 1;

  return (
    <section className="relative overflow-hidden bg-black py-24 text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            Partnerships
          </h2>
          <p className="mt-4 text-white/70">
            Trusted alliances that strengthen the future of Reyes City
          </p>
        </div>

        {/* Partners Grid */}
        <div
          className={`grid gap-12 ${
            isSingle
              ? "place-items-center"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{
                rotateX: 8,
                rotateY: -8,
                scale: 1.05,
              }}
              className="
                perspective-[1200px]
                relative
                max-w-md
                rounded-3xl
                border border-white/10
                bg-white/5
                p-10
                backdrop-blur-xl
                shadow-2xl
              "
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent opacity-0 transition group-hover:opacity-100" />

              {/* Logo */}
              <div className="mb-8 flex justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="
                    w-48
                    max-w-full
                    object-contain
                    drop-shadow-[0_0_25px_rgba(255,255,255,0.35)]
                    md:w-56
                    lg:w-64
                  "
                />
              </div>

              {/* Text */}
              <div className="text-center">
                <h3 className="text-2xl font-semibold">
                  {partner.name}
                </h3>
                <p className="mt-4 text-white/70 leading-relaxed">
                  {partner.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
