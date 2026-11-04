import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { createGenre } from "../../../_services/genres";

export default function GenreCreate() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    setMessage(null);
    try {
      await createGenre({ name, description });
      navigate("/admin/genres");
    } catch (err) {
      if (err.response?.status === 422) {
        setErrors(err.response.data.errors || {});
      } else if (err.response?.status === 401 || err.response?.status === 403) {
        setMessage("Kamu harus login sebagai admin untuk menambah data.");
      } else {
        setMessage("Gagal menambah genre, coba lagi.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h3 className="mb-3">Tambah Genre</h3>

      <div className="card shadow-sm">
        <div className="card-body">
          {message && <div className="alert alert-danger">{message}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nama</label>
              <input
                type="text"
                id="name"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                placeholder="Contoh: Horor"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name[0]}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">Deskripsi</label>
              <textarea
                id="description"
                rows="4"
                className={`form-control ${errors.description ? "is-invalid" : ""}`}
                placeholder="Tulis deskripsi genre..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              {errors.description && (
                <div className="invalid-feedback">{errors.description[0]}</div>
              )}
            </div>

            <button type="submit" className="btn btn-primary me-2" disabled={loading}>
              {loading ? "Menyimpan..." : "Simpan"}
            </button>
            <Link to="/admin/genres" className="btn btn-outline-secondary">
              Batal
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}