import './App.css'

function App() {

  return (
    <>
    <div className="container">

    {/** Header */}
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
    <div className="col-md-3 mb-2 mb-md-0">
      <a href="#home" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
      <i className="fa-solid fa-book fa-2xl" style={{ color: "#74C0FC"}} ></i>
      <span className="ms-2 fs-4">bookstore</span>
      </a>
    </div>

    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      <li><a href="#home" className="nav-link px-2">Home</a></li>
      <li><a href="#book" className="nav-link px-2">Book</a></li>
      <li><a href="#team" className="nav-link px-2">Team</a></li>
      <li><a href="#contact" className="nav-link px-2">Contact</a></li>
    </ul>

    <div className="col-md-3 text-end">
      <button type="button" className="btn btn-outline-primary me-2">Login</button>
      <button type="button" className="btn btn-primary">Register</button>
    </div>
  </header>


  {/** Content */}
   <div className="container my-5" id="home">
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
            Rintik Sedu: Musim yang tak sempat kita miliki
          </h1>
          <p className="lead">
          Tentang cinta, kehilangan, dan hubungan yang tidak sempat memiliki akhir seperti yang diharapkan.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Buy Now</button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Detail</button>
          </div>
        </div>
        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
        <img className="rounded-lg-3" src="https://www.gramedia.com/blog/content/images/2025/12/musim-yang-tak-sempat.jpg" alt="mytskm" width="220" />
        </div>
      </div>
    </div>

    {/** Produk List */}

  <section className="py-5 text-center container" id="book">
  <div className="row py-lg-5">
    <div className="col-lg-6 col-md-8 mx-auto">
      <h1 className="fw-light">Best Seller</h1>
      <p className="lead text-body-secondary">
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


  {/** Team */}
  <section className="py-5 text-center container" id="team">
    <div className="row py-lg-3">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className="fw-light">Tim Kami</h1>
        <p className="lead text-body-secondary">
          Tim di balik layar bookstore yang siap menemani kamu mencari bacaan yang sesuai.
        </p>
      </div>
    </div>
  </section>

  <div className="album py-5 bg-body-tertiary">
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">

        <div className="col">
          <div className="card shadow-sm text-center">
            <div className="card-body p-4">
              <img src="https://i.pinimg.com/736x/44/e1/98/44e1984ae5057f323170c31b906075d7.jpg" alt="Mark" className="rounded-circle mx-auto d-block mb-3" style={{ width: "100px", height: "100px", objectFit: "cover" }} />              
              <h5 className="card-title mb-1">Mark Lee</h5>
              <p className="text-primary fw-semibold mb-2">Frontend Developer</p>
              <p className="card-text">Mengatur tampilan website supaya nyaman dilihat.</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm text-center">
            <div className="card-body p-4">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlXg3moaBx8lZGsoKwWZ5bVd5HC_m2bItfEhr_dSa86A&s=10" alt="jisung" className="rounded-circle mx-auto d-block mb-3" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
              <h5 className="card-title mb-1">Park Jisung</h5>
              <p className="text-primary fw-semibold mb-2">Backend Developer</p>
              <p className="card-text">Mengurus data buku dan pesanan pelanggan.</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm text-center">
            <div className="card-body p-4">
              <img src="https://image.idntimes.com/post/20210120/5-0babc443ded2cd7b753a1db05152ab04-fc577898f1617066c80b09e13e8e32e2.jpg" alt="Pilah" className="rounded-circle mx-auto d-block mb-3" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
              <h5 className="card-title mb-1">Pilah</h5>
              <p className="text-primary fw-semibold mb-2">UI/UX Designer</p>
              <p className="card-text">Merancang alur dan warna agar mudah dipakai.</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card shadow-sm text-center">
            <div className="card-body p-4">
              <img src="https://i.pinimg.com/236x/78/bc/e6/78bce67617c135beb66dcf94014c6f02.jpg" alt="keonho" className="rounded-circle mx-auto d-block mb-3" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
              <h5 className="card-title mb-1">Keonho</h5>
              <p className="text-primary fw-semibold mb-2">Content Writer</p>
              <p className="card-text">Menulis deskripsi dan rekomendasi buku.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>


  {/** Contact */}
  <div className="container col-xl-10 col-xxl-8 px-4 py-5" id="contact">
    <div className="row align-items-center g-lg-5 py-5">
      <div className="col-lg-7 text-center text-lg-start">
      <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Hubungi Kami</h1>
      <p className="col-lg-10 fs-4">
        Ada pertanyaan tentang buku atau pesananmu?
      </p>

    <div className="d-flex gap-4 justify-content-center justify-content-lg-start fs-2">
      <a href="#" className="link-body-emphasis" aria-label="Instagram">
        <i className="fa-brands fa-instagram"></i>
      </a>
      <a href="#" className="link-body-emphasis" aria-label="Facebook">
        <i className="fa-brands fa-facebook"></i>
      </a>
      <a href="#" className="link-body-emphasis" aria-label="WhatsApp">
        <i className="fa-brands fa-whatsapp"></i>
      </a>
      <a href="mailto:halo@bookstore.com" className="link-body-emphasis" aria-label="Email">
        <i className="fa-solid fa-envelope"></i>
      </a>
    </div>
    </div>

      <div className="col-md-10 mx-auto col-lg-5">
        <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="nama" placeholder="Nama" />
            <label htmlFor="nama">Nama</label>
          </div>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="email" placeholder="name@example.com" />
            <label htmlFor="email">Email</label>
          </div>
          <div className="form-floating mb-3">
            <textarea className="form-control" id="pesan" placeholder="Pesan" style={{ height: "120px" }}></textarea>
            <label htmlFor="pesan">Pesan</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="button">Kirim Pesan</button>
          <hr className="my-4" />
          <small className="text-body-secondary">Kami akan membalas pesanmu secepatnya.</small>
        </form>
      </div>
    </div>
  </div>


    {/** Footer */}
    <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
    <li className="nav-item"><a href="#home" className="nav-link px-2 text-body-secondary">Home</a></li>
    <li className="nav-item"><a href="#book" className="nav-link px-2 text-body-secondary">Book</a></li>
    <li className="nav-item"><a href="#team" className="nav-link px-2 text-body-secondary">Team</a></li>
    <li className="nav-item"><a href="#contact" className="nav-link px-2 text-body-secondary">Contact</a></li>
  </ul>
  <p className="text-center text-body-secondary">&copy; 2026 Bookstore</p>
    </footer>

  </div>
    </>
  );
}

export default App