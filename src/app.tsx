import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "@/pages/Home";
import { NotFound } from "@/pages/NotFound";
import { AdminLogin } from "@/pages/AdminLogin";
import { Admin } from "@/pages/Admin";
import CreatePremiumPage from "@/pages/premium/Create";
import ManagePremiumPage from "@/pages/premium/Manage";
import PremiumTagPage from "@/pages/premium/Tags";
import CreateRule from "@/pages/rules/CreateRule";
import ManageRules from "@/pages/rules/ManageRules";
import AdminLayout from "@/layouts/AdminLayout";
import RulesPage from "@/pages/rules/Rules";
import Premium from "./pages/PremiumPlans/Premium";
import { AboutUsPage } from "./pages/AboutUsPage";
import { ContactUsPage } from "./pages/ContactUsPage";
import AdminProtectedRoute from "./routes/AdminProtectedRoute";
import CreateUser from "@/pages/Users/CreateUser";
import ManageUsersPage from "./components/users/ManageUsersPage";
import DiscordBoosterPlans from "./components/DiscordBoosterPlans/DiscordBoosterPlans";
import DutyDashboard from "./pages/DutyDashboard";


function App() {
  return (
    <Router>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/rules" element={<RulesPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/premium-plans" element={<Premium />} />
        <Route path="/DiscordBoosterPlans" element={<DiscordBoosterPlans />} />

        {/* PUBLIC ADMIN LOGIN */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* ADMIN AREA */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route element={<AdminProtectedRoute />}>
            <Route path="dashboard" element={<Admin />} />

            <Route path="premium/create" element={<CreatePremiumPage />} />
            <Route path="premium/manage" element={<ManagePremiumPage />} />
            <Route path="premium/tags" element={<PremiumTagPage />} />

            <Route path="rules/create" element={<CreateRule />} />
            <Route path="rules/manage" element={<ManageRules />} />

            <Route path="staff/add" element={<CreateUser />} />
            <Route path="staff" element={<ManageUsersPage />} />
            <Route path="duty-dashboard" element={<DutyDashboard />} />

          </Route>
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
