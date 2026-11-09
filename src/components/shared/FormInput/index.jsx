import { useState } from "react";

export default function FormInput({
  id,
  label,
  type = "text",
  name,
  value,
  onChange,
  error,
  autoComplete,
}) {
  const [show, setShow] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword && show ? "text" : type;

  return (
    <div className="mb-3">
      <div className="position-relative">
        <div className="form-floating">
          <input
            id={id}
            name={name}
            type={inputType}
            className={`form-control rounded-3 ${error ? "is-invalid" : ""}`}
            placeholder={label}
            value={value}
            onChange={onChange}
            autoComplete={autoComplete}
          />
          <label htmlFor={id}>{label}</label>
        </div>

        {isPassword && (
          <button
            type="button"
            className="btn btn-sm text-secondary position-absolute top-50 translate-middle-y"
            style={{ right: error ? 44 : 10 }}
            onClick={() => setShow(!show)}
            aria-label={show ? "Sembunyikan password" : "Tampilkan password"}
          >
            <i className={`fa-solid ${show ? "fa-eye-slash" : "fa-eye"}`}></i>
          </button>
        )}
      </div>

      {error && <div className="text-danger small mt-1 ms-1">{error}</div>}
    </div>
  );
}