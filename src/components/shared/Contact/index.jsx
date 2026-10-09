export default function Contact(){
    return(
        <>
        <div className="container col-xl-10 col-xxl-8 px-4 py-5 contact-panel" id="contact">
        <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
        <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3 contact-title">Hubungi Kami</h1>
        <p className="col-lg-10 fs-4">
            Ada pertanyaan tentang buku atau pesananmu?
        </p>

        <div className="d-flex gap-4 justify-content-center justify-content-lg-start fs-2 contact-social">
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
            <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary contact-form">
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
        </>
    )
}