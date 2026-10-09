import { Link, NavLink } from 'react-router'

export default function Header(){
    return(
        <>
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <div className="col-md-3 mb-2 mb-md-0">
            <Link to="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
            <i className="fa-solid fa-book fa-2xl" style={{ color: "#74C0FC"}} ></i>
            <span className="ms-2 fs-4 fw-medium">bookstore</span>
            </Link>
            </div>

            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><NavLink to="/" end className="nav-link px-2 menu-link">Home</NavLink></li>
            <li><NavLink to="/books" className="nav-link px-2 menu-link">Book</NavLink></li>
            <li><NavLink to="/team" className="nav-link px-2 menu-link">Team</NavLink></li>
            <li><NavLink to="/contact" className="nav-link px-2 menu-link">Contact</NavLink></li>
            </ul>

            <div className="col-md-3 text-end">
            <Link to="/login" className="btn btn-outline-primary me-2">Login</Link>
            <Link to="/register" className="btn btn-primary">Register</Link>
            </div>
        </header>
        </>
    )
}