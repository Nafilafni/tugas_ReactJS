import { Link } from "react-router";
import { getUser } from "../../_services/auth";

const menu = [
  {
    to: "/books",
    icon: "fa-book",
    title: "Lihat Buku",
    desc: "Jelajahi koleksi buku terlaris di Bookstore.",
    color: "linear-gradient(135deg, #0d6efd, #4da3ff)",
  },
  {
    to: "/profile",
    icon: "fa-user",
    title: "Profil Saya",
    desc: "Lihat data akun dan kelola sesi login kamu.",
    color: "linear-gradient(135deg, #6f42c1, #a37be0)",
  },
  {
    to: "/contact",
    icon: "fa-envelope",
    title: "Hubungi Kami",
    desc: "Ada pertanyaan tentang buku atau pesananmu?",
    color: "linear-gradient(135deg, #198754, #5fd39a)",
  },
];

export default function UserDashboard() {
  const user = getUser();

  return (
    <>
      <div
        className="p-4 p-md-5 mb-4 text-white"
        style={{
          borderRadius: 20,
          background: "linear-gradient(135deg, #0d6efd 0%, #4da3ff 100%)",
          boxShadow: "0 12px 28px rgba(13, 110, 253, 0.3)",
        }}
      >
        <h2 className="fw-bold mb-2">Halo, {user?.name} 👋</h2>
        <p className="mb-0 opacity-75">
          Selamat datang di Bookstore. Mau baca apa hari ini?
        </p>
      </div>

      <div className="row g-4">
        {menu.map((m) => (
          <div className="col-md-4" key={m.to}>
            <Link to={m.to} className="text-decoration-none">
              <div className="card h-100">
                <div className="card-body p-4">
                  <div
                    className="d-flex align-items-center justify-content-center text-white fs-4 mb-3"
                    style={{ width: 56, height: 56, borderRadius: 16, background: m.color }}
                  >
                    <i className={`fa-solid ${m.icon}`}></i>
                  </div>
                  <h5 className="fw-bold text-dark">{m.title}</h5>
                  <p className="text-secondary mb-0">{m.desc}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}