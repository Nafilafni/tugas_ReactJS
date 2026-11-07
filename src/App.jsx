import './App.css'
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import Home from "./pages";
import Books from "./pages/books";
import Team from "./pages/team";
import Contact from "./pages/contact";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import AdminLayout from "./layouts/admin";
import Dashboard from "./pages/admin";
import GenreIndex from "./pages/admin/genres";
import GenreCreate from "./pages/admin/genres/create";
import GenreEdit from "./pages/admin/genres/edit";
import AuthorIndex from "./pages/admin/authors";
import AuthorCreate from "./pages/admin/authors/create";
import AuthorEdit from "./pages/admin/authors/edit";

function PublicWrapper() {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicWrapper />}>
          <Route index element={<Home />} />
          <Route path="books" element={<Books />} />
          <Route path="team" element={<Team />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="genres" element={<GenreIndex />} />
          <Route path="genres/create" element={<GenreCreate />} />
          <Route path="genres/:id/edit" element={<GenreEdit />} />
          <Route path="authors" element={<AuthorIndex />} />
          <Route path="authors/create" element={<AuthorCreate />} />
          <Route path="authors/:id/edit" element={<AuthorEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;