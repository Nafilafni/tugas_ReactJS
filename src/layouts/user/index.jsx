import { NavLink, Outlet, useNavigate } from "react-router";
import { getUser, logout } from "../../_services/auth";
import "../admin/admin.css";

const menu = [
  { to: "/user", label: "Dashboard", icon: "fa-gauge", end: true },
  { to: "/user/home", label: "Beranda", icon: "fa-house" },
  { to: "/user/books", label: "Lihat Buku", icon: "fa-book" },
  { to: "/user/contact", label: "Hubungi Kami", icon: "fa-envelope" },
  { to: "/profile", label: "Profil", icon: "fa-user" },
];

export default function UserLayout() {
  const navigate = useNavigate();
  const user = getUser();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      <aside className="adm-sidebar">
        <NavLink to="/user" className="adm-brand">
          <span className="adm-brand-icon">
            <i className="fa-solid fa-book"></i>
          </span>
          Bookstore
        </NavLink>

        <div className="adm-menu-label">Menu</div>
        {menu.map((m) => (
          <NavLink
            key={m.label}
            to={m.to}
            end={m.end}
            className={({ isActive }) => `adm-link ${isActive ? "active" : ""}`}
          >
            <i className={`fa-solid ${m.icon}`}></i>
            {m.label}
          </NavLink>
        ))}
      </aside>

      <div className="adm-main">
        <div className="adm-topbar">
          <span className="fw-semibold text-secondary">
            Halo, {user?.name}
          </span>
          <button
            className="btn btn-outline-danger btn-sm rounded-pill px-3"
            onClick={handleLogout}
          >
            <i className="fa-solid fa-right-from-bracket me-2"></i>Logout
          </button>
        </div>

        <div className="adm-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}