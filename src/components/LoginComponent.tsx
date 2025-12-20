import { motion } from "framer-motion";
import { useState } from "react";

export const LoginComponent = () => {
  const [loading, setLoading] = useState(false);

  const loginWithDiscord = () => {
    setLoading(true);
    window.location.href = "http://localhost:5000/api/auth/discord";
  };

  return (
    <div className="min-h-screen w-full relative flex items-center justify-center bg-gradient-to-br from-black via-[#0a0a0a] to-black overflow-hidden">

      {/* GOLD PARTICLE GLOW EFFECT */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 bg-yellow-500 rounded-full shadow-[0_0_10px_#FFD700]"
            initial={{
              opacity: 0.3,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: ["0%", "-150%"],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* CARD CONTAINER */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="z-[2] flex w-full max-w-5xl rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(255,215,0,0.4)] bg-[#0a0a0a] border border-yellow-700/40"
      >

        {/* LEFT SIDE IMAGE */}
        <div className="hidden md:block w-1/2 relative">
          <img
            src="/img/logo_reyes_city.png"
            alt="Reyes City"
            className="w-full h-full object-contain bg-black p-10 rounded-l-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 px-10 py-12 bg-[#0d0d0d] flex flex-col justify-center">
          <h1 className="text-white text-3xl font-bold mb-1 tracking-widest">
            STAFF LOGIN
          </h1>
          <p className="text-yellow-400/80 text-sm mb-10">
            DISCORD AUTH REQUIRED
          </p>

          {/* DISCORD LOGIN BUTTON */}
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(88,101,242,0.8)",
            }}
            whileTap={{ scale: 0.96 }}
            disabled={loading}
            onClick={loginWithDiscord}
            className="
              w-full py-4 rounded-lg
              bg-[#5865F2] text-white font-semibold tracking-wide
              shadow-[0_0_20px_rgba(88,101,242,0.6)]
              transition
              flex items-center justify-center gap-3
            "
          >
            {loading ? "CONNECTING TO DISCORD..." : "LOGIN WITH DISCORD"}
          </motion.button>

          {/* INFO */}
          <p className="text-xs text-yellow-400/60 mt-6 text-center">
            Only authorized Discord staff can access admin panel
          </p>
        </div>
      </motion.div>
    </div>
  );
};
