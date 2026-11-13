import { Navigate, Outlet, useLocation } from "react-router";
import { isLoggedIn, hasRole } from "../../../_services/auth";

export default function ProtectedRoute({ allowedRoles }) {
  const location = useLocation();

  // Belum login: arahkan ke halaman login
  if (!isLoggedIn()) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // Sudah login tapi role tidak diizinkan: arahkan ke halaman akses ditolak
  if (allowedRoles && !hasRole(allowedRoles)) {
    return <Navigate to="/unauthorized" replace />;
  }

  // Lolos semua pengecekan: tampilkan halaman di dalamnya
  return <Outlet />;
}