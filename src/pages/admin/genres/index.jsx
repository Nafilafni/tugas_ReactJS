import { useEffect, useState } from "react";
import { Link } from "react-router";
import { getGenres, deleteGenre } from "../../../_services/genres";

export default function GenreIndex() {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const ambilData = async () => {
      try {
        const result = await getGenres();
        setGenres(result.data);
      } catch (err) {
        setError("Gagal mengambil data genre.");
      } finally {
        setLoading(false);
      }
    };

    ambilData();
  }, []);

  const handleDelete = async (genre) => {
    if (!window.confirm(`Yakin ingin menghapus genre "${genre.name}"?`)) return;

    setMessage(null);
    try {
      await deleteGenre(genre.id);
      setGenres(genres.filter((g) => g.id !== genre.id));
    } catch (err) {
      if (err.response?.status === 401 || err.response?.status === 403) {
        setMessage("Kamu harus login sebagai admin untuk menghapus data.");
      } else {
        setMessage("Gagal menghapus genre, coba lagi.");
      }
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="mb-0">Data Genre</h3>
        <Link to="/admin/genres/create" className="btn btn-primary">
          <i className="fa-solid fa-plus me-2"></i>Tambah Genre
        </Link>
      </div>

      {message && <div className="alert alert-danger">{message}</div>}

      <div className="card shadow-sm">
        <div className="card-body">
          {loading && <p className="mb-0">Memuat...</p>}
          {error && <div className="alert alert-danger mb-0">{error}</div>}

          {!loading && !error && (
            <table className="table table-hover align-middle mb-0">
              <thead>
                <tr>
                  <th style={{ width: 60 }}>No</th>
                  <th>Nama</th>
                  <th>Deskripsi</th>
                  <th style={{ width: 170 }} className="text-end">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {genres.map((g, index) => (
                  <tr key={g.id}>
                    <td>{index + 1}</td>
                    <td>{g.name}</td>
                    <td>{g.description}</td>
                    <td className="text-end">
                      <Link
                        to={`/admin/genres/${g.id}/edit`}
                        className="btn btn-sm btn-outline-primary rounded-pill me-2"
                      >
                        <i className="fa-solid fa-pen me-1"></i>Edit
                      </Link>
                      <button
                        className="btn btn-sm btn-outline-danger rounded-pill"
                        onClick={() => handleDelete(g)}
                      >
                        <i className="fa-solid fa-trash me-1"></i>Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}