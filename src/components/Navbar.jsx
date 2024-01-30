import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar-dark- bg-dark">
      <NavLink className="btn btn-outline-primary" to="/">
        Inicio
      </NavLink>
      <NavLink className="btn btn-outline-primary" to="/Contacto">
        Contacto
      </NavLink>
      <NavLink className="btn btn-outline-primary" to="/Blog">
        Blog
      </NavLink>
      <a href="/">Inicio</a>
      <a href="/Nosotros" className="btn btn-outline-primary">
        Nosotros
      </a>
      <a href="/Contacto" className="btn btn-outline-primary">
        Contacto
      </a>
      <a href="/Blog" className="btn btn-outline-primary">
        Blog
      </a>
    </div>
  );
};

export default Navbar;
