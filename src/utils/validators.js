export function validateRegister(values) {
  const errors = {};

  const name = values.name.trim();
  if (!name) {
    errors.name = "Nama lengkap wajib diisi.";
  } else if (name.length < 3) {
    errors.name = "Nama lengkap minimal 3 karakter.";
  }

  const email = values.email.trim();
  if (!email) {
    errors.email = "Email wajib diisi.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Format email tidak valid.";
  }

  const username = values.username.trim();
  if (!username) {
    errors.username = "Username wajib diisi.";
  } else if (username.length < 4) {
    errors.username = "Username minimal 4 karakter.";
  } else if (!/^[a-zA-Z0-9_]+$/.test(username)) {
    errors.username = "Username hanya boleh huruf, angka, dan underscore.";
  }

  if (!values.password) {
    errors.password = "Password wajib diisi.";
  } else if (values.password.length < 8) {
    errors.password = "Password minimal 8 karakter.";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Konfirmasi password wajib diisi.";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Konfirmasi password tidak sama.";
  }

  return errors;
}