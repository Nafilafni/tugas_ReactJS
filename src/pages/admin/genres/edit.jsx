import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { getGenre, updateGenre } from "../../../_services/genres";

export default function GenreEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const ambilData = async () => {
      try {
        const result = await getGenre(id);
        setName(result.data.name);
        setDescription(result.data.description);
      } catch (err) {
        setMessage("Data genre tidak ditemukan.");
      } finally {
        setLoading(false);
      }
    };

    ambilData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setErrors({});
    setMessage(null);
    try {
      await updateGenre(id, { name, description });
      navigate("/admin/genres");
    } catch (err) {
      if (err.response?.status === 422) {
        setErrors(err.response.data.errors || {});
      } else if (err.response?.status === 401 || err.response?.status === 403) {
        setMessage("Kamu harus login sebagai admin untuk mengubah data.");
      } else {
        setMessage("Gagal memperbarui genre, coba lagi.");
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <h3 className="mb-3">Edit Genre</h3>

      <div className="card shadow-sm">
        <div className="card-body">
          {loading && <p className="mb-0">Memuat...</p>}
          {message && <div className="alert alert-danger">{message}</div>}

          {!loading && (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nama</label>
                <input
                  type="text"
                  id="name"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
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
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                {errors.description && (
                  <div className="invalid-feedback">{errors.description[0]}</div>
                )}
              </div>

              <button type="submit" className="btn btn-primary me-2" disabled={saving}>
                {saving ? "Menyimpan..." : "Simpan Perubahan"}
              </button>
              <Link to="/admin/genres" className="btn btn-outline-secondary">
                Batal
              </Link>
            </form>
          )}
        </div>
      </div>
    </>
  );
}