import { Link, NavLink, useNavigate } from 'react-router'
import { getUser, isLoggedIn, logout } from '../../../_services/auth'

export default function Header(){
    const navigate = useNavigate();
    const loggedIn = isLoggedIn();
    const user = getUser();
    const dashboardPath = user?.role === "admin" ? "/admin" : "/user";

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

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

            <div className="col-md-4 d-flex justify-content-center justify-content-md-end align-items-center gap-2 flex-nowrap">
            {loggedIn ? (
                <>
                <Link to={dashboardPath} className="btn btn-outline-primary text-nowrap">
                    <i className="fa-solid fa-gauge me-1"></i>Dashboard
                </Link>
                <Link to="/profile" className="btn btn-primary text-nowrap">
                    <i className="fa-solid fa-user me-1"></i>Profil
                </Link>
                <button className="btn btn-outline-danger" onClick={handleLogout} aria-label="Logout">
                    <i className="fa-solid fa-right-from-bracket"></i>
                </button>
                </>
            ) : (
                <>
                <Link to="/login" className="btn btn-outline-primary">Login</Link>
                <Link to="/register" className="btn btn-primary">Register</Link>
                </>
            )}
            </div>
        </header>
        </>
    )
}