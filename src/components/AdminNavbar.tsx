import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import {
  FaBell,
  FaUserShield,
  FaUsersCog,
  FaBullhorn,
  FaImage,
  FaServer
} from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";

export const AdminNavbar = () => {
  const navRef = useRef<HTMLDivElement>(null);

  // Dropdown states
  const [showStaffMenu, setShowStaffMenu] = useState(false);
  const [showAnnounceMenu, setShowAnnounceMenu] = useState(false);
  const [showBannerMenu, setShowBannerMenu] = useState(false);
  const [showServerMenu, setShowServerMenu] = useState(false);

  const [showNotifMenu, setShowNotifMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // Run animation once
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -80,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl 
      border-b border-yellow-600/50 shadow-[0_0_20px_rgba(255,215,0,0.4)]"
    >
      <nav className="flex items-center justify-between px-8 py-4">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-6">
          <img
            src="/img/logo_reyes_city.png"
            className="w-12 drop-shadow-[0_0_15px_#FFD700]"
          />

          <h1 className="text-yellow-400 tracking-widest text-lg font-bold">
            ADMIN PANEL
          </h1>

          {/* MAIN LINKS */}
          <div className="hidden md:flex items-center gap-6 text-yellow-300">

            {/* DASHBOARD */}
            <Link to="/admin/dashboard" className="hover:text-yellow-400">
              Dashboard
            </Link>

            {/* STAFF DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => setShowStaffMenu(!showStaffMenu)}
                className="flex items-center gap-2 hover:text-yellow-400"
              >
                <FaUsersCog /> Staff <IoChevronDown />
              </button>

              {showStaffMenu && (
                <div className="absolute left-0 mt-2 w-52 bg-black border border-yellow-700/40 rounded-lg shadow-lg p-2 text-sm">
                  <Link className="dropdown-item" to="/admin/staff/admins">
                    Admins
                  </Link>
                  <Link className="dropdown-item" to="/admin/staff/moderators">
                    Moderators
                  </Link>
                  <Link className="dropdown-item" to="/admin/staff/helpers">
                    Helpers
                  </Link>
                  <Link className="dropdown-item" to="/admin/staff/add">
                    ➕ Add Staff
                  </Link>
                </div>
              )}
            </div>

            {/* ANNOUNCEMENTS DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => setShowAnnounceMenu(!showAnnounceMenu)}
                className="flex items-center gap-2 hover:text-yellow-400"
              >
                <FaBullhorn /> Announcements <IoChevronDown />
              </button>

              {showAnnounceMenu && (
                <div className="absolute left-0 mt-2 w-60 bg-black border border-yellow-700/40 rounded-lg shadow-lg p-2 text-sm">
                  <Link className="dropdown-item" to="/admin/announcements/create">
                    Create Announcement
                  </Link>
                  <Link className="dropdown-item" to="/admin/announcements/manage">
                    Manage Announcements
                  </Link>
                  <Link className="dropdown-item" to="/admin/announcements/popup">
                    Popup Alerts
                  </Link>
                  <Link className="dropdown-item" to="/admin/announcements/broadcast">
                    Broadcast Message
                  </Link>
                </div>
              )}
            </div>

            {/* BANNERS DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => setShowBannerMenu(!showBannerMenu)}
                className="flex items-center gap-2 hover:text-yellow-400"
              >
                <FaImage /> Banners <IoChevronDown />
              </button>

              {showBannerMenu && (
                <div className="absolute left-0 mt-2 w-52 bg-black border border-yellow-700/40 rounded-lg shadow-lg p-2 text-sm">
                  <Link className="dropdown-item" to="/admin/banner/home">
                    Homepage Banner
                  </Link>
                  <Link className="dropdown-item" to="/admin/banner/events">
                    Event Banners
                  </Link>
                  <Link className="dropdown-item" to="/admin/banner/server">
                    Server Banner
                  </Link>
                </div>
              )}
            </div>

            {/* SERVER STATUS DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => setShowServerMenu(!showServerMenu)}
                className="flex items-center gap-2 hover:text-yellow-400"
              >
                <FaServer /> Server Status <IoChevronDown />
              </button>

              {showServerMenu && (
                <div className="absolute left-0 mt-2 w-52 bg-black border border-yellow-700/40 rounded-lg shadow-lg p-2 text-sm">
                  <Link className="dropdown-item" to="/admin/server/players">
                    Live Players
                  </Link>
                  <Link className="dropdown-item" to="/admin/server/resources">
                    Resources
                  </Link>
                  <Link className="dropdown-item" to="/admin/server/logs">
                    Logs
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6 text-yellow-300">

          {/* NOTIFICATIONS */}
          <div className="relative">
            <button
              onClick={() => setShowNotifMenu(!showNotifMenu)}
              className="relative hover:text-yellow-400"
            >
              <FaBell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
            </button>

            {showNotifMenu && (
              <div className="absolute right-0 mt-3 w-64 bg-black border border-yellow-700/40 rounded-lg shadow-lg p-3 text-sm">
                <p>No new notifications.</p>
              </div>
            )}
          </div>

          {/* PROFILE MENU */}
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-2 hover:text-yellow-400"
            >
              <FaUserShield size={20} />
              <IoChevronDown />
            </button>

            {showProfileMenu && (
              <div className="absolute right-0 mt-3 w-56 bg-black border border-yellow-700/40 rounded-lg shadow-lg p-3 text-sm">
                <Link className="dropdown-item" to="/admin/profile">
                  My Profile
                </Link>
                <Link className="dropdown-item" to="/admin/settings">
                  Settings
                </Link>
                <Link className="dropdown-item text-red-400" to="/logout">
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

