import { Link } from "react-router-dom";

const LangNav = () => {
  return (
    <>
      <nav className="md:flex gap-3 hidden">
        <Link to="/es" className="links">
          Spanish
        </Link>
        <span>|</span>
        <Link to="/en" className="links">
          English
        </Link>
      </nav>
    </>
  );
};

export default LangNav;