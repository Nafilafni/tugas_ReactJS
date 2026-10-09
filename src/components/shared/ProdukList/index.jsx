export default function ProdukList(){
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
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

            <div className="col">
                <div className="card shadow-sm">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS39yu8zX881C8enpJzul3riJhEMnrjdUGjK9f_q5rDmv1ZPS98XUyvDYE&s=10" className="card-img-top" alt="buku1" style={{ height: "520px", objectFit: "cover" }} />
                <div className="card-body">
                    <h5 className="card-title">Laut Bercerita</h5>
                    <p className="card-text">Leila S. Chudori</p>
                    <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Buy</button>
                    </div>
                    <small className="text-body-secondary">Rp 99.000</small>
                    </div>
                </div>
                </div>
            </div>

            <div className="col">
                <div className="card shadow-sm">
                <img src="https://cdn.gramedia.com/uploads/items/9786020633176_.Atomic_Habit.jpg" className="card-img-top" alt="buku2" style={{ height: "520px", objectFit: "cover" }} />
                <div className="card-body">
                    <h5 className="card-title">Atomic Habits</h5>
                    <p className="card-text">James Clear</p>
                    <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Buy</button>
                    </div>
                    <small className="text-body-secondary">Rp 110.000</small>
                    </div>
                </div>
                </div>
            </div>

            <div className="col">
                <div className="card shadow-sm">
                <img src="https://cdn.gramedia.com/uploads/items/9786020324784_Hujan-Cover-Baru-2018.jpg" className="card-img-top" alt="buku3" style={{ height: "520px", objectFit: "cover" }} />
                <div className="card-body">
                    <h5 className="card-title">Hujan</h5>
                    <p className="card-text">Tere Liye</p>
                    <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Buy</button>
                    </div>
                    <small className="text-body-secondary">Rp 99.000</small>
                    </div>
                </div>
                </div>
            </div>

            <div className="col">
                <div className="card shadow-sm">
                <img src="https://cdn.gramedia.com/uploads/items/9786024248215_Nanti-Kita-Cerita-Tentang-Hari-Ini.jpg" className="card-img-top" alt="Buku4" style={{ height: "520px", objectFit: "cover" }} />
                <div className="card-body">
                    <h5 className="card-title">Nanti Kita Cerita Tentang Hari Ini</h5>
                    <p className="card-text">Marchella FP</p>
                    <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Buy</button>
                    </div>
                    <small className="text-body-secondary">Rp 85.000</small>
                    </div>
                </div>
                </div>
            </div>

            <div className="col">
                <div className="card shadow-sm">
                <img src="https://cdn.gramedia.com/uploads/items/9789797809324_kata.jpg" className="card-img-top" alt="buku5" style={{ height: "520px", objectFit: "cover" }} />
                <div className="card-body">
                    <h5 className="card-title">Kata</h5>
                    <p className="card-text">Rintik Sedu</p>
                    <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Buy</button>
                    </div>
                    <small className="text-body-secondary">Rp 99.000</small>
                    </div>
                </div>
                </div>
            </div>

            <div className="col">
                <div className="card shadow-sm">
                <img src="https://cdn.gramedia.com/uploads/picture_meta/2023/11/27/kjf6cgigkomf6sy9o5qauu.jpg" className="card-img-top" alt="buku6" style={{ height: "520px", objectFit: "cover" }} />
                <div className="card-body">
                    <h5 className="card-title">Filosofi Teras</h5>
                    <p className="card-text">Henry Manampiring</p>
                    <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Buy</button>
                    </div>
                    <small className="text-body-secondary">Rp 99.000</small>
                    </div>
                </div>
                </div>
            </div>

            </div>
        </div>
        </div>
        </>
    )
}