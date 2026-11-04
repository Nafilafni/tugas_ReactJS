import { useEffect, useState } from "react";
import { Link } from "react-router";
import { getGenres } from "../../../_services/genres";

export default function GenreIndex() {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="mb-0">Data Genre</h3>
        <Link to="/admin/genres/create" className="btn btn-primary">
          <i className="fa-solid fa-plus me-2"></i>Tambah Genre
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
                  <th>Deskripsi</th>
                </tr>
              </thead>
              <tbody>
                {genres.map((g, index) => (
                  <tr key={g.id}>
                    <td>{index + 1}</td>
                    <td>{g.name}</td>
                    <td>{g.description}</td>
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