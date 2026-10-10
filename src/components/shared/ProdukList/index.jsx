import { useState, useEffect } from "react";
import books from "../../../utils/books";

const gambarDefault =
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='520'><rect width='100%' height='100%' fill='%23dee2e6'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='24' fill='%236c757d'>Tanpa Gambar</text></svg>";

export default function ProdukList({ limit }){
    const [daftarBuku, setDaftarBuku] = useState(books);
    const [judul, setJudul] = useState("");
    const [penulis, setPenulis] = useState("");
    const [harga, setHarga] = useState("");
    const [gambar, setGambar] = useState("");

    // Judul tab browser mengikuti jumlah buku
    useEffect(() => {
        document.title = `Bookstore (${daftarBuku.length} buku)`;
    }, [daftarBuku]);

    const tambahBuku = (e) => {
        e.preventDefault();
        const bukuBaru = {
            id: daftarBuku.length + 1,
            title: judul,
            author: penulis,
            year: 2026,
            price: `Rp ${Number(harga).toLocaleString("id-ID")}`,
            description: "Buku baru ditambahkan",
            image: gambar || gambarDefault,
        };
        setDaftarBuku([...daftarBuku, bukuBaru]);
        setJudul("");
        setPenulis("");
        setHarga("");
        setGambar("");
    };

    const tampil = limit ? daftarBuku.slice(0, limit) : daftarBuku;

    return(
        <>
        <section className="py-5 text-center container" id="book">
        <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light section-title">Best Seller</h1>
            <p className="lead text-body-secondary mt-3">
                Buku-buku paling laris di bookstore kami. Temukan dan pilihlah bacaan favoritmu hari ini.
            </p>
            </div>
        </div>
        </section>

        <div className="album py-5 bg-body-tertiary">
        <div className="container">

            {!limit && (
            <form onSubmit={tambahBuku} className="row g-2 mb-4">
                <div className="col-md-3">
                    <input type="text" className="form-control" placeholder="Judul buku" value={judul} onChange={(e) => setJudul(e.target.value)} required />
                </div>
                <div className="col-md-2">
                    <input type="text" className="form-control" placeholder="Penulis" value={penulis} onChange={(e) => setPenulis(e.target.value)} required />
                </div>
                <div className="col-md-2">
                    <input type="number" className="form-control" placeholder="Harga" value={harga} onChange={(e) => setHarga(e.target.value)} required />
                </div>
                <div className="col-md-3">
                    <input type="text" className="form-control" placeholder="Link gambar (opsional)" value={gambar} onChange={(e) => setGambar(e.target.value)} />
                </div>
                <div className="col-md-2 d-grid">
                    <button type="submit" className="btn btn-primary">Tambah Buku</button>
                </div>
            </form>
            )}

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

            {tampil.map((buku) => (
            <div className="col" key={buku.id}>
                <div className="card shadow-sm">
                <img src={buku.image} className="card-img-top" alt={buku.title} style={{ height: "520px", objectFit: "cover" }} />
                <div className="card-body">
                    <h5 className="card-title">{buku.title}</h5>
                    <p className="card-text mb-1">{buku.author} ({buku.year})</p>
                    <p className="card-text small text-body-secondary">{buku.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Buy</button>
                    </div>
                    <small className="text-body-secondary">{buku.price}</small>
                    </div>
                </div>
                </div>
            </div>
            ))}

            </div>
        </div>
        </div>
        </>
    )
}