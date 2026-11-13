import { NavLink, Outlet, useNavigate } from "react-router";
import { logout } from "../../_services/auth";
import "./admin.css";

const menu = [
  { to: "/admin", label: "Dashboard", icon: "fa-gauge", end: true },
  { to: "/admin/genres", label: "Genre", icon: "fa-tags" },
  { to: "/admin/authors", label: "Author", icon: "fa-user-pen" },
  { to: "/admin/profile", label: "Profil", icon: "fa-user" },
];

export default function AdminLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      <aside className="adm-sidebar">
        <NavLink to="/admin" className="adm-brand">
          <span className="adm-brand-icon">
            <i className="fa-solid fa-book"></i>
          </span>
          Bookstore
        </NavLink>

        <div className="adm-menu-label">Menu</div>
        {menu.map((m) => (
          <NavLink
            key={m.to}
            to={m.to}
            end={m.end}
            className={({ isActive }) => `adm-link ${isActive ? "active" : ""}`}
          >
            <i className={`fa-solid ${m.icon}`}></i>
            {m.label}
          </NavLink>
        ))}

        <div className="mt-auto">
          <NavLink to="/" className="adm-link">
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
            Lihat Website
          </NavLink>
        </div>
      </aside>

      <div className="adm-main">
        <div className="adm-topbar">
          <span className="fw-semibold text-secondary">Panel Admin</span>
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