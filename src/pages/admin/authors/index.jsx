import { useEffect, useState } from "react";
import { Link } from "react-router";
import { getAuthors, deleteAuthor } from "../../../_services/authors";

export default function AuthorIndex() {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const ambilData = async () => {
      try {
        const result = await getAuthors();
        setAuthors(result.data);
      } catch (err) {
        setError("Gagal mengambil data author.");
      } finally {
        setLoading(false);
      }
    };

    ambilData();
  }, []);

  const handleDelete = async (author) => {
    if (!window.confirm(`Yakin ingin menghapus author "${author.name}"?`)) return;

    setMessage(null);
    try {
      await deleteAuthor(author.id);
      setAuthors(authors.filter((a) => a.id !== author.id));
    } catch (err) {
      if (err.response?.status === 401 || err.response?.status === 403) {
        setMessage("Kamu harus login sebagai admin untuk menghapus data.");
      } else {
        setMessage("Gagal menghapus author, coba lagi.");
      }
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="mb-0">Data Author</h3>
        <Link to="/admin/authors/create" className="btn btn-primary">
          <i className="fa-solid fa-plus me-2"></i>Tambah Author
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
                  <th>Foto</th>
                  <th>Bio</th>
                  <th style={{ width: 170 }} className="text-end">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {authors.map((a, index) => (
                  <tr key={a.id}>
                    <td>{index + 1}</td>
                    <td>{a.name}</td>
                    <td>{a.photo}</td>
                    <td>{a.bio}</td>
                    <td className="text-end">
                      <Link
                        to={`/admin/authors/${a.id}/edit`}
                        className="btn btn-sm btn-outline-primary rounded-pill me-2"
                      >
                        <i className="fa-solid fa-pen me-1"></i>Edit
                      </Link>
                      <button
                        className="btn btn-sm btn-outline-danger rounded-pill"
                        onClick={() => handleDelete(a)}
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