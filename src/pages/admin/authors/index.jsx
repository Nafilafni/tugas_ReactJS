import { useEffect, useState } from "react";
import { Link } from "react-router";
import { getAuthors } from "../../../_services/authors";

export default function AuthorIndex() {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="mb-0">Data Author</h3>
        <Link to="/admin/authors/create" className="btn btn-primary">
          <i className="fa-solid fa-plus me-2"></i>Tambah Author
        </Link>
      </div>

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
                </tr>
              </thead>
              <tbody>
                {authors.map((a, index) => (
                  <tr key={a.id}>
                    <td>{index + 1}</td>
                    <td>{a.name}</td>
                    <td>{a.photo}</td>
                    <td>{a.bio}</td>
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