import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import {
  FaBell,
  FaUserShield,
  FaUsersCog,
  FaBullhorn,
  FaImage,
  FaServer,
} from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";

export const AdminNavbar = () => {
  const navRef = useRef<HTMLElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    if (!navRef.current) return;
  }, []);

  const animateDropdown = () => {
    if (dropdownRef.current) {
      gsap.fromTo(
        dropdownRef.current,
        { y: -12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" }
      );
    }
  };

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
    setTimeout(animateDropdown, 10);
  };

  return (
    <header
      ref={navRef}
      className="fixed left-0 top-0 z-[9999] w-full border-b border-yellow-600/40 bg-black/80 shadow-[0_0_20px_rgba(255,210,0,0.3)] backdrop-blur-xl"
    >
      <nav className="flex items-center justify-between px-10 py-4">
        <div className="flex items-center gap-5">
          <img
            src="/img/logo_reyes_city.png"
            className="w-12 drop-shadow-[0_0_15px_#FFD700]"
          />
          <h1 className="text-lg font-bold tracking-widest text-yellow-400">
            ADMIN PANEL
          </h1>
        </div>

        <div className="flex items-center gap-8 font-medium text-yellow-300">
          <div className="relative">
            <button onClick={() => toggleMenu("staff")} className="nav-btn">
              <FaUsersCog /> Staff <IoChevronDown />
            </button>

            {openMenu === "staff" && (
              <div ref={dropdownRef} className="dropdown-box">
                <Link className="dropdown-row" to="/admin/staff/admins">
                  Admins
                </Link>
                <Link className="dropdown-row" to="/admin/staff/moderators">
                  Moderators
                </Link>
                <Link className="dropdown-row" to="/admin/staff/helpers">
                  Helpers
                </Link>
                <Link className="dropdown-row" to="/admin/staff/add">
                  ➕ Add Staff
                </Link>
              </div>
            )}
          </div>

          <div className="relative">
            <button onClick={() => toggleMenu("announce")} className="nav-btn">
              <FaBullhorn /> Announce <IoChevronDown />
            </button>

            {openMenu === "announce" && (
              <div ref={dropdownRef} className="dropdown-box">
                <Link className="dropdown-row" to="/admin/announcements/create">
                  Create
                </Link>
                <Link className="dropdown-row" to="/admin/announcements/manage">
                  Manage
                </Link>
                <Link className="dropdown-row" to="/admin/announcements/popup">
                  Popup Alerts
                </Link>
                <Link
                  className="dropdown-row"
                  to="/admin/announcements/broadcast"
                >
                  Broadcast
                </Link>
              </div>
            )}
          </div>
          <div className="relative">
            <button onClick={() => toggleMenu("Rules")} className="nav-btn">
              📕 Rules <IoChevronDown />
            </button>

            {openMenu === "Rules" && (
              <div ref={dropdownRef} className="dropdown-box">
                <Link className="dropdown-row" to="/admin/rules/create">
                  Create Rule
                </Link>
                <Link className="dropdown-row" to="/admin/rules/manage">
                  Manage Plans
                </Link>
              </div>
            )}
          </div>

          <div className="relative">
            <button onClick={() => toggleMenu("premium")} className="nav-btn">
              💎 Premium <IoChevronDown />
            </button>

            {openMenu === "premium" && (
              <div ref={dropdownRef} className="dropdown-box">
                <Link className="dropdown-row" to="/admin/premium/create">
                  Create Plan
                </Link>
                <Link className="dropdown-row" to="/admin/premium/manage">
                  Manage Plans
                </Link>
                <Link className="dropdown-row" to="/admin/premium/tags">
                  Tags & Filters
                </Link>
              </div>
            )}
          </div>

          <div className="relative">
            <button onClick={() => toggleMenu("banners")} className="nav-btn">
              <FaImage /> Banners <IoChevronDown />
            </button>

            {openMenu === "banners" && (
              <div ref={dropdownRef} className="dropdown-box">
                <Link className="dropdown-row" to="/admin/banner/home">
                  Homepage Banner
                </Link>
                <Link className="dropdown-row" to="/admin/banner/events">
                  Event Banners
                </Link>
                <Link className="dropdown-row" to="/admin/banner/server">
                  Server Banner
                </Link>
              </div>
            )}
          </div>

          <div className="relative">
            <button onClick={() => toggleMenu("server")} className="nav-btn">
              <FaServer /> Server <IoChevronDown />
            </button>

            {openMenu === "server" && (
              <div ref={dropdownRef} className="dropdown-box">
                <Link className="dropdown-row" to="/admin/server/players">
                  Live Players
                </Link>
                <Link className="dropdown-row" to="/admin/server/resources">
                  Resources
                </Link>
                <Link className="dropdown-row" to="/admin/server/logs">
                  Logs
                </Link>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => toggleMenu("notif")}
              className="relative transition hover:text-yellow-400"
            >
              <FaBell size={19} />
              <span className="absolute right-0 top-0 h-2 w-2 animate-ping rounded-full bg-red-500"></span>
            </button>

            {openMenu === "notif" && (
              <div ref={dropdownRef} className="dropdown-box w-64">
                <p className="text-yellow-200 opacity-70">
                  No new notifications.
                </p>
              </div>
            )}
          </div>

          <div className="relative">
            <button onClick={() => toggleMenu("profile")} className="nav-btn">
              <FaUserShield size={20} /> <IoChevronDown />
            </button>

            {openMenu === "profile" && (
              <div ref={dropdownRef} className="dropdown-box w-56">
                <Link className="dropdown-row" to="/admin/profile">
                  My Profile
                </Link>
                <Link className="dropdown-row" to="/admin/settings">
                  Settings
                </Link>
                <Link className="dropdown-row text-red-400" to="/logout">
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};
