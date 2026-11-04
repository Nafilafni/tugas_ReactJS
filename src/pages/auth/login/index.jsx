import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { login } from "../../../_services/auth";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            await login(email, password);
            navigate("/admin");
        } catch (err) {
            setError(err.response?.data?.message || "Login gagal, coba lagi.");
        } finally {
            setLoading(false);
        }
    };

    return(
        <>
         <div
            className="modal modal-sheet position-static d-block p-4 py-md-5"
            tabIndex="-1"
            role="dialog">

            <div className="modal-dialog">
                <div className="modal-content rounded-4 shadow">
                    <div className="modal-header p-5 pb-4 border-bottom-0 d-flex justify-content-center">
                        <h1 className="fw-bold mb-0 fs-2 w-100 text-center">Login</h1>
                        <Link to="/" className="btn-close" aria-label="Close"></Link>
                    </div>

                    <div className="modal-body p-5 pt-0">
                        <form onSubmit={handleSubmit}>
                            {error && <div className="alert alert-danger">{error}</div>}

                            <div className="form-floating mb-3">
                                <input
                                    type="email"
                                    className="form-control rounded-3"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    type="password"
                                    className="form-control rounded-3"
                                    id="floatingPassword"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>

                            <button
                                className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? "Memproses..." : "Login"}
                            </button>

                            <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="button">
                                Login with Google
                            </button>

                            <button className="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="button">
                                Login with Facebook
                            </button>

                            <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="button">
                                Login with GitHub
                            </button>
                        </form>
                        <p>Don't have an account yet? <Link to="/register">Register</Link></p>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}