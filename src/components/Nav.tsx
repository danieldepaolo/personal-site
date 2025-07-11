import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navigation">
      <div className="navigation__inner">
        <Link className="navigation__home-link" to="/">
          Daniel DePaolo
        </Link>
        <div className="navigation__links">
          <Link to="/work">Work</Link>
          <Link to="/photography">Photos</Link>
          <Link to="https://www.linkedin.com/in/danieldepaolo/">LinkedIn</Link>
          <Link to="https://github.com/danieldepaolo">GitHub</Link>
        </div>
      </div>
    </nav>
  );
}
