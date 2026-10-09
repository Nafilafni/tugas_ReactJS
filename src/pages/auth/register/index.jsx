import { Link } from "react-router";

export default function Register() {
    return(
        <>
         <div
            className="modal modal-sheet position-static d-block p-4 py-md-5"
            tabIndex="-1"
            role="dialog">

            <div className="modal-dialog">
                <div className="modal-content rounded-4 shadow">
                    <div className="modal-header p-5 pb-4 border-bottom-0 d-flex justify-content-center">
                        <h1 className="fw-bold mb-0 fs-2 w-100 text-center">Register</h1>
                        <Link to="/" className="btn-close" aria-label="Close"></Link>
                    </div>

                    <div className="modal-body p-5 pt-0">
                        <form>
                            <div className="form-floating mb-3">
                                <input
                                    type="email"
                                    className="form-control rounded-3"
                                    id="floatingInput"
                                    placeholder="name@example.com"/>
                                <label htmlFor="floatingInput">Email address</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    type="password"
                                    className="form-control rounded-3"
                                    id="floatingPassword"
                                    placeholder="Password"
                                />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>

                            <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">
                                Register
                            </button>


                            <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="button">
                                Register with Google
                            </button>

                            <button className="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="button">
                                Register with Facebook
                            </button>

                            <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="button">
                                Register with GitHub
                            </button>
                        </form>
                        <p>Already have account? <Link to="/login">Login</Link></p>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}