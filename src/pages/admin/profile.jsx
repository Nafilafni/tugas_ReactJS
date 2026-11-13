import { Link, useNavigate } from "react-router";
import { getUser, logout } from "../../_services/auth";

export default function AdminProfile() {
  const navigate = useNavigate();
  const user = getUser();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const bergabung = user?.created_at
    ? new Date(user.created_at).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "-";

  const info = [
    { icon: "fa-envelope", label: "Email", value: user?.email },
    { icon: "fa-id-badge", label: "ID Pengguna", value: user?.id },
    { icon: "fa-shield-halved", label: "Peran", value: user?.role },
    { icon: "fa-calendar", label: "Bergabung sejak", value: bergabung },
  ];

  return (
    <>
      <h3 className="mb-3">Profil Admin</h3>

      <div className="row g-4">
        <div className="col-lg-4">
          <div className="card h-100">
            <div className="card-body text-center p-4">
              <div
                className="d-flex align-items-center justify-content-center text-white fw-bold mx-auto mb-3"
                style={{
                  width: 96,
                  height: 96,
                  borderRadius: "50%",
                  fontSize: 38,
                  background: "linear-gradient(135deg, #0d6efd, #4da3ff)",
                  boxShadow: "0 8px 20px rgba(13, 110, 253, 0.35)",
                }}
              >
                {user?.name?.charAt(0).toUpperCase()}
              </div>
              <h4 className="fw-bold mb-1">{user?.name}</h4>
              <p className="text-secondary mb-3">{user?.email}</p>
              <span className="badge text-bg-primary rounded-pill px-3 py-2 mb-4">
                <i className="fa-solid fa-user-shield me-1"></i>
                {user?.role}
              </span>

              <div className="d-grid gap-2">
                <Link to="/" className="btn btn-outline-primary rounded-3">
                  <i className="fa-solid fa-arrow-up-right-from-square me-2"></i>
                  Lihat Website
                </Link>
                <button
                  className="btn btn-outline-danger rounded-3"
                  onClick={handleLogout}
                >
                  <i className="fa-solid fa-right-from-bracket me-2"></i>Logout
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-8">
          <div className="card h-100">
            <div className="card-body p-4">
              <h5 className="fw-bold mb-4">Informasi Akun</h5>
              {info.map((i) => (
                <div
                  key={i.label}
                  className="d-flex align-items-center gap-3 py-3 border-bottom"
                >
                  <div
                    className="d-flex align-items-center justify-content-center text-primary"
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: "#eaf2ff",
                    }}
                  >
                    <i className={`fa-solid ${i.icon}`}></i>
                  </div>
                  <div>
                    <div className="text-secondary small">{i.label}</div>
                    <div className="fw-semibold">{i.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}