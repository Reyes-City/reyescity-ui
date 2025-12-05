import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "@/pages/Home";
import { Admin } from "@/pages/Admin";
import { NotFound } from "@/pages/NotFound";
import { AdminLogin } from "@/pages/AdminLogin";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default Route → Home */}
        <Route path="/" element={<Home />} />

        {/* SHOW LOGIN ON /admin */}
        <Route path="/admin" element={<AdminLogin />} />

        {/* Actual dashboard */}
        <Route path="/admin/dashboard" element={<Admin />} />

        {/* 404 Fallback */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
  );
}

export default App;
