import { Link } from "@remix-run/react";
import projecten from "../data";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar nav-underline p-3 justify-content-center">
        <Link className="nav-link" aria-current="page" to="/">Home</Link>
      <div className="navbar-nav">
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/projects" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Projects
          </Link>
          <ul className="dropdown-menu">
            {projecten.map((project) => (
              <div key={project.id}>
                <li><Link className="dropdown-item" to={`/projects/${project.id}`}>{project.name}</Link></li>    
              </div>
            ))}
            <li><Link className="dropdown-item" to="/projects">Alle projecten</Link></li>
          </ul>
        </li>
      </div>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/contact">Contact</Link>
      </nav>
    </div>

    
  );
};

export default Navbar;
