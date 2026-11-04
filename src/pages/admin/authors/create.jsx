import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { createAuthor } from "../../../_services/authors";

export default function AuthorCreate() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [bio, setBio] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    setMessage(null);
    try {
      await createAuthor({
        name,
        photo: photo.trim() || "default.jpg",
        bio,
      });
      navigate("/admin/authors");
    } catch (err) {
      if (err.response?.status === 422) {
        setErrors(err.response.data.errors || {});
      } else if (err.response?.status === 401 || err.response?.status === 403) {
        setMessage("Kamu harus login sebagai admin untuk menambah data.");
      } else {
        setMessage("Gagal menambah author, coba lagi.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h3 className="mb-3">Tambah Author</h3>

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
                placeholder="Contoh: Pramoedya Ananta Toer"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name[0]}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="photo" className="form-label">
                Foto <span className="text-muted"> (opsional) </span>
              </label>
              <input
                type="text"
                id="photo"
                className={`form-control ${errors.photo ? "is-invalid" : ""}`}
                placeholder="(kosongkan jika tidak ada)"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
              />
              {errors.photo && (
                <div className="invalid-feedback">{errors.photo[0]}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="bio" className="form-label">Bio</label>
              <textarea
                id="bio"
                rows="4"
                className={`form-control ${errors.bio ? "is-invalid" : ""}`}
                placeholder="Tulis bio singkat author..."
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              ></textarea>
              {errors.bio && (
                <div className="invalid-feedback">{errors.bio[0]}</div>
              )}
            </div>

            <button type="submit" className="btn btn-primary me-2" disabled={loading}>
              {loading ? "Menyimpan..." : "Simpan"}
            </button>
            <Link to="/admin/authors" className="btn btn-outline-secondary">
              Batal
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}