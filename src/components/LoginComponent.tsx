import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, FormEvent } from "react";

export const LoginComponent = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/admin/dashboard");
    }, 1500);
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
            alt="Gaming"
            className="w-full h-full object-contain bg-black p-10 rounded-l-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="w-full md:w-1/2 px-10 py-12 bg-[#0d0d0d]">
          <h1 className="text-white text-3xl font-bold mb-1 tracking-widest">
            LOG IN ACCOUNT
          </h1>
          <p className="text-yellow-400/80 text-sm mb-8">WELCOME BACK</p>

          <form onSubmit={handleLogin} className="space-y-8">

            {/* EMAIL INPUT (UPDATED) */}
            <div className="relative group">
              <input
                type="email"
                placeholder="ENTER EMAIL"
                required
                className="
                  w-full px-4 py-3 bg-black/40 border border-yellow-700 rounded-lg 
                  text-white placeholder-yellow-400/60 outline-none transition duration-300
                  focus:border-yellow-400 
                  focus:shadow-[0_0_18px_rgba(255,215,0,0.55)]
                  group-hover:border-yellow-500
                "
              />

              {/* Underline shimmer */}
              <span className="
                absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r 
                from-yellow-300 to-yellow-500 
                group-hover:w-full transition-all duration-500
              "></span>
            </div>

            {/* PASSWORD INPUT (UPDATED) */}
            <div>
              <div className="relative group">
                <input
                  type="password"
                  placeholder="ENTER PASSWORD"
                  required
                  className="
                    w-full px-4 py-3 bg-black/40 border border-yellow-700 rounded-lg 
                    text-white placeholder-yellow-400/60 outline-none transition duration-300
                    focus:border-yellow-400 
                    focus:shadow-[0_0_18px_rgba(255,215,0,0.55)]
                    group-hover:border-yellow-500
                  "
                />

                {/* Underline shimmer */}
                <span className="
                  absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r 
                  from-yellow-300 to-yellow-500 
                  group-hover:w-full transition-all duration-500
                "></span>
              </div>

              <p className="text-yellow-400/70 text-xs mt-1 cursor-pointer hover:text-yellow-300">
                FORGOT PASSWORD?
              </p>
            </div>

            {/* LOGIN BUTTON */}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(255,215,0,0.7)",
              }}
              whileTap={{ scale: 0.96 }}
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-semibold tracking-wide shadow-[0_0_15px_rgba(255,215,0,0.4)] transition"
            >
              {loading ? "ACCESSING..." : "LOG IN"}
            </motion.button>

            {/* SIGN UP */}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255,215,0,0.4)",
              }}
              whileTap={{ scale: 0.96 }}
              type="button"
              className="w-full py-3 border border-yellow-600 text-yellow-400 rounded-lg 
              font-semibold hover:bg-yellow-500 hover:text-black transition shadow-[0_0_15px_rgba(255,215,0,0.3)]"
            >
              SIGN UP
            </motion.button>

          </form>
        </div>
      </motion.div>
    </div>
  );
};
