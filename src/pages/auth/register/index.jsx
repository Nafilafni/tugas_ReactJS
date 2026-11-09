import { useState } from "react";
import { Link, useNavigate } from "react-router";
import FormInput from "../../../components/shared/FormInput";
import { validateRegister } from "../../../utils/validators";
import { register } from "../../../_services/auth";

const initialValues = {
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
};

export default function Register() {
    const navigate = useNavigate();
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState(null);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
        if (errors[name]) setErrors({ ...errors, [name]: undefined });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(null);

        const validation = validateRegister(values);
        setErrors(validation);
        if (Object.keys(validation).length > 0) return;

        setLoading(true);
        try {
            await register({
                name: values.name.trim(),
                email: values.email.trim(),
                password: values.password,
            });
            setSuccess(true);
            setValues(initialValues);
            setTimeout(() => navigate("/login"), 8000);
        } catch (err) {
            const data = err.response?.data;
            if (err.response?.status === 422 && data) {
                setErrors({
                    name: data.name?.[0],
                    email: data.email?.[0],
                    password: data.password?.[0],
                });
            } else {
                setMessage("Registrasi gagal, coba lagi.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div
                className="modal modal-sheet position-static d-block p-3 p-md-4 py-md-5"
                tabIndex="-1"
                role="dialog">

                <div className="modal-dialog">
                    <div className="modal-content rounded-4 shadow">
                        <div className="modal-header p-4 p-md-5 pb-4 border-bottom-0 d-flex justify-content-center">
                            <h1 className="fw-bold mb-0 fs-2 w-100 text-center">Register</h1>
                            <Link to="/" className="btn-close" aria-label="Close"></Link>
                        </div>

                        <div className="modal-body p-4 p-md-5 pt-0">
                            <form onSubmit={handleSubmit} noValidate>
                                {success && (
                                    <div className="alert alert-success">
                                        Registrasi berhasil! Mengalihkan ke halaman login...
                                    </div>
                                )}
                                {message && <div className="alert alert-danger">{message}</div>}

                                <FormInput
                                    id="name"
                                    name="name"
                                    label="Nama lengkap"
                                    autoComplete="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    error={errors.name}
                                />
                                <FormInput
                                    id="email"
                                    name="email"
                                    type="email"
                                    label="Email address"
                                    autoComplete="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    error={errors.email}
                                />
                                <FormInput
                                    id="username"
                                    name="username"
                                    label="Username"
                                    autoComplete="username"
                                    value={values.username}
                                    onChange={handleChange}
                                    error={errors.username}
                                />
                                <FormInput
                                    id="password"
                                    name="password"
                                    type="password"
                                    label="Password"
                                    autoComplete="new-password"
                                    value={values.password}
                                    onChange={handleChange}
                                    error={errors.password}
                                />
                                <FormInput
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    label="Konfirmasi password"
                                    autoComplete="new-password"
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                    error={errors.confirmPassword}
                                />

                                <button
                                    className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                                    type="submit"
                                    disabled={loading}
                                >
                                    {loading ? "Memproses..." : "Register"}
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
                            <p className="mb-0">Already have account? <Link to="/login">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}