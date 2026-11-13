import { Link, useNavigate } from "react-router";
import { getUser, hasRole, logout } from "../../_services/auth";

export default function Profile() {
  const navigate = useNavigate();
  const user = getUser();
  const isAdmin = hasRole(["admin"]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="py-5" style={{ maxWidth: 480, margin: "0 auto" }}>
      <div className="card border-0 shadow rounded-4 text-center p-4">
        <div
          className="d-flex align-items-center justify-content-center text-white fw-bold mx-auto mb-3"
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            fontSize: 32,
            background: "linear-gradient(135deg, #0d6efd, #4da3ff)",
          }}
        >
          {user?.name?.charAt(0).toUpperCase()}
        </div>

        <h4 className="fw-bold mb-1">{user?.name}</h4>
        <p className="text-secondary mb-2">{user?.email}</p>
        <div className="mb-4">
          <span className={`badge rounded-pill px-3 py-2 ${isAdmin ? "text-bg-primary" : "text-bg-secondary"}`}>
            {user?.role}
          </span>
        </div>

        <div className="d-grid gap-2">
          {isAdmin && (
            <Link to="/admin" className="btn btn-primary rounded-3">
              <i className="fa-solid fa-gauge me-2"></i>Dashboard Admin
            </Link>
          )}
          <Link to="/" className="btn btn-outline-primary rounded-3">
            <i className="fa-solid fa-house me-2"></i>Ke Beranda
          </Link>
          <button className="btn btn-outline-danger rounded-3" onClick={handleLogout}>
            <i className="fa-solid fa-right-from-bracket me-2"></i>Logout
          </button>
        </div>
      </div>
    </div>
  );
}