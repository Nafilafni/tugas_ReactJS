import { Link } from "react-router";

export default function Unauthorized() {
  return (
    <div className="text-center py-5" style={{ maxWidth: 480, margin: "0 auto" }}>
      <div
        className="d-flex align-items-center justify-content-center text-white mx-auto mb-4"
        style={{
          width: 96,
          height: 96,
          borderRadius: "50%",
          fontSize: 40,
          background: "linear-gradient(135deg, #dc3545, #ff6b7a)",
        }}
      >
        <i className="fa-solid fa-lock"></i>
      </div>
      <h1 className="fw-bold">403</h1>
      <h5 className="mb-2">Akses Ditolak</h5>
      <p className="text-secondary mb-4">
        Kamu tidak punya izin untuk membuka halaman ini. Halaman ini hanya
        untuk pengguna dengan peran tertentu.
      </p>
      <Link to="/" className="btn btn-primary rounded-pill px-4 me-2">
        Ke Beranda
      </Link>
      <Link to="/profile" className="btn btn-outline-primary rounded-pill px-4">
        Profil Saya
      </Link>
    </div>
  );
}