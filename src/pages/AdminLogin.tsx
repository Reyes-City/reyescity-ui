import { LoginComponent } from "@/components/LoginComponent";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AdminLogin = () => {
  const navigate = useNavigate();

  // 🔐 If already logged in, go to dashboard
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      navigate("/admin/dashboard", { replace: true });
    }
  }, [navigate]);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-[#05010a] overflow-hidden">

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 bg-purple-500 rounded-full shadow-[0_0_10px_#a855f7]"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.3,
            }}
            animate={{
              y: ["0%", "-120%"],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Login Card */}
      <LoginComponent />
    </div>
  );
};
