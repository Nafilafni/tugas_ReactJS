import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { getAuthor, updateAuthor } from "../../../_services/authors";

export default function AuthorEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [bio, setBio] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const ambilData = async () => {
      try {
        const result = await getAuthor(id);
        setName(result.data.name);
        setPhoto(result.data.photo);
        setBio(result.data.bio);
      } catch (err) {
        setMessage("Data author tidak ditemukan.");
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
      await updateAuthor(id, {
        name,
        photo: photo.trim() || "default.jpg",
        bio,
      });
      navigate("/admin/authors");
    } catch (err) {
      if (err.response?.status === 422) {
        setErrors(err.response.data.errors || {});
      } else if (err.response?.status === 401 || err.response?.status === 403) {
        setMessage("Kamu harus login sebagai admin untuk mengubah data.");
      } else {
        setMessage("Gagal memperbarui author, coba lagi.");
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <h3 className="mb-3">Edit Author</h3>

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
                <label htmlFor="photo" className="form-label">
                  Foto (nama file) <span className="text-muted">- opsional</span>
                </label>
                <input
                  type="text"
                  id="photo"
                  className={`form-control ${errors.photo ? "is-invalid" : ""}`}
                  placeholder="kosongkan jika tidak ada"
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
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                ></textarea>
                {errors.bio && (
                  <div className="invalid-feedback">{errors.bio[0]}</div>
                )}
              </div>

              <button type="submit" className="btn btn-primary me-2" disabled={saving}>
                {saving ? "Menyimpan..." : "Simpan Perubahan"}
              </button>
              <Link to="/admin/authors" className="btn btn-outline-secondary">
                Batal
              </Link>
            </form>
          )}
        </div>
      </div>
    </>
  );
}