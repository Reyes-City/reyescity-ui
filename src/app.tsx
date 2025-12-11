import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Public Pages
import { Home } from "@/pages/Home";
import { NotFound } from "@/pages/NotFound";
import { AdminLogin } from "@/pages/AdminLogin";

// Admin Main Page
import { Admin } from "@/pages/Admin";

// Premium Pages
import CreatePremiumPage from "@/pages/premium/Create";
import ManagePremiumPage from "@/pages/premium/Manage";
import PremiumTagPage from "@/pages/premium/Tags";
import PremiumPlans from "./pages/PremiumPlans/PremiumPlans";

// Layout
import AdminLayout from "@/layouts/AdminLayout";

function App() {
  return (
    <Router>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminLogin />} />

        {/* ADMIN LAYOUT WRAPPER - Navbar will always show inside these */}
        <Route path="/admin" element={<AdminLayout />}>
          {/* Dashboard */}
          <Route path="dashboard" element={<Admin />} />

          {/* PREMIUM MODULE */}
          <Route path="premium/create" element={<CreatePremiumPage />} />
          <Route path="premium/manage" element={<ManagePremiumPage />} />
          <Route path="premium/tags" element={<PremiumTagPage />} />

          
        </Route>
<Route path="/premium-plans" element={<PremiumPlans />} />
        {/* 404 PAGE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
