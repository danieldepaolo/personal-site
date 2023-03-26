import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="mainNav">
      <div className="navInner">
        <Link className="homeLink" to='/'><div className="homeText">Daniel DePaolo</div></Link>
        <nav>
          <Link to='/about'>About</Link>
          <Link to='/work'>Work</Link>
          <Link to='/photography'>Photography</Link>
        </nav>
      </div>
    </div>
  );
}
