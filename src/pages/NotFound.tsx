import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const NotFound = () => {
  return (
    <div className="relative h-screen w-full bg-[#05010a] overflow-hidden flex items-center justify-center">
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 bg-purple-500 rounded-full shadow-[0_0_8px_#a855f7]"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.3,
              scale: 0.8,
            }}
            animate={{
              y: ["0%", "-120%"],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          ></motion.span>
        ))}
      </div>

      {/* Center Content */}
      <div className="relative z-10 text-center text-purple-300">
        <motion.h1
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-bold text-[100px] md:text-[150px] tracking-widest drop-shadow-[0_0_20px_#a855f7] glitch"
        >
          404
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-2xl opacity-80"
        >
          You wandered into the <span className="text-purple-400">void</span>…
        </motion.p>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-8"
        >
          <Link
            to="/"
            className="px-8 py-3 text-lg font-semibold bg-purple-600 hover:bg-purple-700 text-white rounded-xl shadow-[0_0_15px_#a855f7] transition-all duration-300 hover:shadow-[0_0_30px_#a855f7]"
          >
            Return to Base
          </Link>
        </motion.div>
      </div>

      <style>{`
        /* Glitch animation */
        .glitch {
          position: relative;
          color: #a855f7;
        }

        .glitch:before,
        .glitch:after {
          content: "404";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          mix-blend-mode: lighten;
        }

        .glitch:before {
          left: 3px;
          text-shadow: -2px 0 magenta;
          animation: glitch-1 1s infinite linear alternate-reverse;
        }

        .glitch:after {
          left: -3px;
          text-shadow: -2px 0 cyan;
          animation: glitch-2 1.2s infinite linear alternate-reverse;
        }

        @keyframes glitch-1 {
          0% { clip-path: inset(0 0 80% 0); }
          20% { clip-path: inset(15% 0 55% 0); }
          40% { clip-path: inset(33% 0 5% 0); }
          60% { clip-path: inset(60% 0 50% 0); }
          80% { clip-path: inset(80% 0 10% 0); }
          100% { clip-path: inset(0 0 80% 0); }
        }

        @keyframes glitch-2 {
          0% { clip-path: inset(80% 0 0 0); }
          20% { clip-path: inset(50% 0 15% 0); }
          40% { clip-path: inset(5% 0 33% 0); }
          60% { clip-path: inset(10% 0 65% 0); }
          80% { clip-path: inset(10% 0 80% 0); }
          100% { clip-path: inset(80% 0 0 0); }
        }
      `}</style>
    </div>
  );
};


