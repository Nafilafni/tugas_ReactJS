export default function Team(){
    return(
        <>
        <section className="py-5 text-center container" id="team">
        <div className="row py-lg-3">
        <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light section-title">Tim Kami</h1>
            <p className="lead text-body-secondary mt-3">
            Tim di balik layar bookstore yang siap menemani kamu mencari bacaan yang sesuai.
            </p>
        </div>
        </div>
        </section>

        <div className="album py-5 bg-body-tertiary">
            <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">

                <div className="col">
                <div className="card shadow-sm text-center team-card">
                    <div className="card-body p-4">
                    <img src="https://i.pinimg.com/736x/44/e1/98/44e1984ae5057f323170c31b906075d7.jpg" alt="Mark" className="rounded-circle mx-auto d-block mb-3 team-photo" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
                    <h5 className="card-title mb-1">Mark Lee</h5>
                    <p className="text-primary fw-semibold mb-2 team-role">Frontend Developer</p>
                    <p className="card-text">Mengatur tampilan website supaya nyaman dilihat.</p>
                    </div>
                </div>
                </div>

                <div className="col">
                <div className="card shadow-sm text-center team-card">
                    <div className="card-body p-4">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlXg3moaBx8lZGsoKwWZ5bVd5HC_m2bItfEhr_dSa86A&s=10" alt="jisung" className="rounded-circle mx-auto d-block mb-3 team-photo" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
                    <h5 className="card-title mb-1">Park Jisung</h5>
                    <p className="text-primary fw-semibold mb-2 team-role">Backend Developer</p>
                    <p className="card-text">Mengurus data buku dan pesanan pelanggan.</p>
                    </div>
                </div>
                </div>

                <div className="col">
                <div className="card shadow-sm text-center team-card">
                    <div className="card-body p-4">
                    <img src="https://image.idntimes.com/post/20210120/5-0babc443ded2cd7b753a1db05152ab04-fc577898f1617066c80b09e13e8e32e2.jpg" alt="Pilah" className="rounded-circle mx-auto d-block mb-3 team-photo" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
                    <h5 className="card-title mb-1">Pilah</h5>
                    <p className="text-primary fw-semibold mb-2 team-role">UI/UX Designer</p>
                    <p className="card-text">Merancang alur dan warna agar mudah dipakai.</p>
                    </div>
                </div>
                </div>

                <div className="col">
                <div className="card shadow-sm text-center team-card">
                    <div className="card-body p-4">
                    <img src="https://i.pinimg.com/236x/78/bc/e6/78bce67617c135beb66dcf94014c6f02.jpg" alt="keonho" className="rounded-circle mx-auto d-block mb-3 team-photo" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
                    <h5 className="card-title mb-1">Keonho</h5>
                    <p className="text-primary fw-semibold mb-2 team-role">Content Writer</p>
                    <p className="card-text">Menulis deskripsi dan rekomendasi buku.</p>
                    </div>
                </div>
                </div>

            </div>
            </div>
            </div>

        </>
    )
}