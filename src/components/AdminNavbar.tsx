import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { IoChevronDown } from "react-icons/io5";
import { FaUserShield, FaBell } from "react-icons/fa";

export const AdminNavbar = () => {
  const navRef = useRef<HTMLElement | null>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (key: string) =>
    setOpenMenu((prev) => (prev === key ? null : key));
  const closeMenu = () => setOpenMenu(null);

  /* Dropdown animation */
  useEffect(() => {
    if (!openMenu) return;
    gsap.fromTo(
      `.menu-${openMenu}`,
      { y: -10, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.25, ease: "power2.out" }
    );
  }, [openMenu]);

  /* Close on outside click */
  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 z-50 w-full bg-black/90 backdrop-blur border-b border-yellow-600/40"
    >
      <nav className="flex items-center justify-between px-8 py-4 text-yellow-400">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img src="/img/logo_reyes_city.png" className="w-10" />
          <span className="font-semibold tracking-wide">
            Admin Panel
          </span>
        </div>

        {/* MAIN NAV */}
        <div className="flex items-center gap-10 text-sm font-medium">
          <Menu label="Dashboard" />

          {/* CREATE */}
          <Menu
            label="Create"
            open={openMenu === "create"}
            onClick={() => toggleMenu("create")}
          >
            <NavItem to="/admin/staff/add" onClick={closeMenu}>👤 Add Staff</NavItem>
            <NavItem to="/admin/rules/create" onClick={closeMenu}>📕 Create Rule</NavItem>
            <NavItem to="/admin/premium/create" onClick={closeMenu}>💎 Create Plan</NavItem>
            <NavItem to="/admin/announcements/create" onClick={closeMenu}>📢 Create Announcement</NavItem>
            <NavItem to="/admin/forms/custom" onClick={closeMenu}>📝 Create Form</NavItem>
          </Menu>

          {/* MANAGE */}
          <Menu
            label="Manage"
            open={openMenu === "manage"}
            onClick={() => toggleMenu("manage")}
          >
            <NavItem to="/admin/staff" onClick={closeMenu}>👥 Manage Staff</NavItem>
            <NavItem to="/admin/rules/manage" onClick={closeMenu}>📋 Manage Rules</NavItem>
            <NavItem to="/admin/premium/manage" onClick={closeMenu}>💰 Manage Plans</NavItem>
            <NavItem to="/admin/tools/reports" onClick={closeMenu}>📝 Player Reports</NavItem>
            <NavItem to="/admin/tools/punishments" onClick={closeMenu}>🚫 Punishments</NavItem>
          </Menu>

          {/* CONTENT */}
          <Menu
            label="Content"
            open={openMenu === "content"}
            onClick={() => toggleMenu("content")}
          >
            <NavItem to="/admin/announcements/manage" onClick={closeMenu}>
              Announcements
            </NavItem>
            <NavItem to="/admin/media/gallery" onClick={closeMenu}>
              Media Gallery
            </NavItem>
          </Menu>

          {/* COMMUNITY */}
          <Menu
            label="Community"
            open={openMenu === "community"}
            onClick={() => toggleMenu("community")}
          >
            <NavItem to="/admin/streamer/applications" onClick={closeMenu}>
              Streamer Applications
            </NavItem>
            <NavItem to="/admin/forms/whitelist" onClick={closeMenu}>
              Whitelist Forms
            </NavItem>
          </Menu>

          {/* SYSTEM */}
          <Menu
            label="System"
            open={openMenu === "system"}
            onClick={() => toggleMenu("system")}
          >
            <NavItem to="/admin/server/players" onClick={closeMenu}>
              Live Players
            </NavItem>
            <NavItem to="/admin/server/logs" onClick={closeMenu}>
              Server Logs
            </NavItem>
            <NavItem to="/admin/tools/audit" onClick={closeMenu}>
              Audit Logs
            </NavItem>
          </Menu>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-6">
          <FaBell className="cursor-pointer hover:text-yellow-300" />

          <Menu
            icon={<FaUserShield />}
            open={openMenu === "profile"}
            onClick={() => toggleMenu("profile")}
            align="right"
          >
            <NavItem to="/admin/profile" onClick={closeMenu}>
              Profile
            </NavItem>
            <NavItem to="/admin/settings" onClick={closeMenu}>
              Settings
            </NavItem>

            <div className="my-1 h-px bg-yellow-600/20" />

            <NavItem to="/logout" danger onClick={closeMenu}>
              Logout
            </NavItem>
          </Menu>
        </div>
      </nav>
    </header>
  );
};

/* ---------- Helpers ---------- */

const Menu = ({ label, icon, open, onClick, children, align }: any) => (
  <div className="relative">
    <button
      onClick={onClick}
      className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition"
    >
      {icon}
      {label}
      {children && (
        <IoChevronDown className={`transition ${open ? "rotate-180" : ""}`} />
      )}
    </button>

    {open && (
      <div
        className={`
          menu-${label?.toLowerCase()}
          absolute
          ${align === "right" ? "right-0" : "left-0"}
          mt-3
          min-w-[200px]
          rounded-xl
          bg-black
          border
          border-yellow-600/40
          shadow-[0_10px_30px_rgba(0,0,0,0.8)]
          overflow-hidden
        `}
      >
        {children}
      </div>
    )}
  </div>
);

const NavItem = ({ to, children, danger, onClick }: any) => (
  <Link
    to={to}
    onClick={onClick}
    className={`
      block
      px-4
      py-2.5
      text-sm
      transition
      ${
        danger
          ? "text-red-400 hover:bg-red-500/10"
          : "text-yellow-300 hover:bg-yellow-600/10"
      }
    `}
  >
    {children}
  </Link>
);
