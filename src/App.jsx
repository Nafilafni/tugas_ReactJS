import './App.css'
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router";
import Home from "./pages";
import Books from "./pages/books";
import Team from "./pages/team";
import Contact from "./pages/contact";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Profile from "./pages/profile";
import Unauthorized from "./pages/unauthorized";
import UserDashboard from "./pages/user";
import UserHome from "./pages/user/home";
import UserBooks from "./pages/user/books";
import UserContact from "./pages/user/contact";
import UserLayout from "./layouts/user";
import ProtectedRoute from "./components/shared/ProtectedRoute";
import AdminLayout from "./layouts/admin";
import Dashboard from "./pages/admin";
import AdminProfile from "./pages/admin/profile";
import GenreIndex from "./pages/admin/genres";
import GenreCreate from "./pages/admin/genres/create";
import GenreEdit from "./pages/admin/genres/edit";
import AuthorIndex from "./pages/admin/authors";
import AuthorCreate from "./pages/admin/authors/create";
import AuthorEdit from "./pages/admin/authors/edit";
import { hasRole } from "./_services/auth";

function PublicWrapper() {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
}

// Admin yang membuka /profile diarahkan ke profil versi admin
function ProfileRoute() {
  if (hasRole(["admin"])) {
    return <Navigate to="/admin/profile" replace />;
  }
  return <Profile />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Halaman publik: bisa diakses siapa saja */}
        <Route element={<PublicWrapper />}>
          <Route index element={<Home />} />
          <Route path="books" element={<Books />} />
          <Route path="team" element={<Team />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="unauthorized" element={<Unauthorized />} />
        </Route>

        {/* Harus login: semua role boleh, tampil dengan layout user */}
        <Route element={<ProtectedRoute />}>
          <Route element={<UserLayout />}>
            <Route path="profile" element={<ProfileRoute />} />

            {/* Khusus customer */}
            <Route element={<ProtectedRoute allowedRoles={["customer"]} />}>
              <Route path="user" element={<UserDashboard />} />
              <Route path="user/home" element={<UserHome />} />
              <Route path="user/books" element={<UserBooks />} />
              <Route path="user/contact" element={<UserContact />} />
            </Route>
          </Route>
        </Route>

        {/* Khusus admin */}
        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<AdminProfile />} />
            <Route path="genres" element={<GenreIndex />} />
            <Route path="genres/create" element={<GenreCreate />} />
            <Route path="genres/:id/edit" element={<GenreEdit />} />
            <Route path="authors" element={<AuthorIndex />} />
            <Route path="authors/create" element={<AuthorCreate />} />
            <Route path="authors/:id/edit" element={<AuthorEdit />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;