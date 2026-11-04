import { useEffect, useState } from "react";
import { Link } from "react-router";
import { getGenres } from "../../_services/genres";
import { getAuthors } from "../../_services/authors";

function StatCard({ label, value, icon, color, to }) {
  return (
    <Link to={to} className="text-decoration-none">
      <div className="card h-100">
        <div className="card-body d-flex align-items-center gap-3 p-4">
          <div
            className="d-flex align-items-center justify-content-center text-white fs-4"
            style={{
              width: 60,
              height: 60,
              borderRadius: 16,
              background: color,
            }}
          >
            <i className={`fa-solid ${icon}`}></i>
          </div>
          <div>
            <div className="text-secondary small">{label}</div>
            <div className="fs-2 fw-bold text-dark">{value}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Dashboard() {
  const [genres, setGenres] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ambilData = async () => {
      try {
        const [g, a] = await Promise.all([getGenres(), getAuthors()]);
        setGenres(g.data);
        setAuthors(a.data);
      } catch (err) {
        setError("Gagal mengambil data dashboard.");
      } finally {
        setLoading(false);
      }
    };

    ambilData();
  }, []);

  const genreTerbaru = [...genres].reverse().slice(0, 4);
  const authorTerbaru = [...authors].reverse().slice(0, 4);

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
        <h2 className="fw-bold mb-2">Selamat datang, Admin 👋</h2>
        <p className="mb-4 opacity-75">
          Kelola data genre dan author Bookstore dari satu tempat.
        </p>
        <Link to="/admin/genres/create" className="btn btn-light rounded-pill px-4 me-2">
          <i className="fa-solid fa-plus me-2"></i>Tambah Genre
        </Link>
        <Link to="/admin/authors/create" className="btn btn-outline-light rounded-pill px-4">
          <i className="fa-solid fa-plus me-2"></i>Tambah Author
        </Link>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="row g-4 mb-4">
        <div className="col-md-6">
          <StatCard
            label="Total Genre"
            value={loading ? "..." : genres.length}
            icon="fa-tags"
            color="linear-gradient(135deg, #0d6efd, #4da3ff)"
            to="/admin/genres"
          />
        </div>
        <div className="col-md-6">
          <StatCard
            label="Total Author"
            value={loading ? "..." : authors.length}
            icon="fa-user-pen"
            color="linear-gradient(135deg, #6f42c1, #a37be0)"
            to="/admin/authors"
          />
        </div>
      </div>

      <div className="row g-4">
        <div className="col-lg-6">
          <div className="card h-100">
            <div className="card-body p-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold mb-0">Genre Terbaru</h5>
                <Link to="/admin/genres" className="small text-decoration-none">
                  Lihat semua
                </Link>
              </div>
              {loading && <p className="text-muted mb-0">Memuat...</p>}
              {!loading &&
                genreTerbaru.map((g) => (
                  <div key={g.id} className="py-2 border-bottom">
                    <div className="fw-semibold">{g.name}</div>
                    <div className="small text-secondary text-truncate">
                      {g.description}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card h-100">
            <div className="card-body p-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold mb-0">Author Terbaru</h5>
                <Link to="/admin/authors" className="small text-decoration-none">
                  Lihat semua
                </Link>
              </div>
              {loading && <p className="text-muted mb-0">Memuat...</p>}
              {!loading &&
                authorTerbaru.map((a) => (
                  <div key={a.id} className="py-2 border-bottom">
                    <div className="fw-semibold">{a.name}</div>
                    <div className="small text-secondary text-truncate">
                      {a.bio}
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