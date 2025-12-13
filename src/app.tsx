import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Public Pages
import { Home } from "@/pages/Home";
import { NotFound } from "@/pages/NotFound";
import { AdminLogin } from "@/pages/AdminLogin";

// Admin Dashboard
import { Admin } from "@/pages/Admin";

// Premium Pages
import CreatePremiumPage from "@/pages/premium/Create";
import ManagePremiumPage from "@/pages/premium/Manage";
import PremiumTagPage from "@/pages/premium/Tags";
import PremiumPlans from "@/pages/PremiumPlans/PremiumPlans";

// Rules Pages ✅
import CreateRule from "@/pages/rules/CreateRule";
import ManageRules from "@/pages/rules/ManageRules";

// Layout
import AdminLayout from "@/layouts/AdminLayout";
import RulesPage from "@/pages/rules/Rules";

function App() {
  return (
    <Router>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/rules" element={<RulesPage />} />

        <Route path="/admin/login" element={<AdminLogin />} />

        {/* ADMIN ROUTES (WITH LAYOUT) */}
        <Route path="/admin" element={<AdminLayout />}>
          {/* Dashboard */}
          <Route path="dashboard" element={<Admin />} />

          {/* PREMIUM MODULE */}
          <Route path="premium/create" element={<CreatePremiumPage />} />
          <Route path="premium/manage" element={<ManagePremiumPage />} />
          <Route path="premium/tags" element={<PremiumTagPage />} />

          {/* RULES MODULE ✅ */}
          <Route path="rules/create" element={<CreateRule />} />
          <Route path="rules/manage" element={<ManageRules />} />
        </Route>

        {/* PUBLIC PREMIUM PLANS */}
        <Route path="/premium-plans" element={<PremiumPlans />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
