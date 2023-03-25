import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="mainNav">
      <Link to='/'><h3>Daniel's Site</h3></Link>
      <nav>
        <Link to='/about'>About</Link>
        <Link to='/photography'>Photography</Link>
      </nav>
    </div>
  );
}
