import { NavLink, Link } from "react-router-dom";

export default function Layout(props) {
  return (
    <>
      <div>
        <h1 className="title">Care For You</h1>{" "}
      </div>

      <div className="link">
        {props.user}

        <Link  to="/login">
          Login
        </Link>

        <NavLink  to="/logout">
          Logout
        </NavLink>

        <NavLink  to="/reviews">
          Reviews
        </NavLink>

        <Link  to="/suggestion">
          Suggestion
        </Link>

        <Link  to="/register">
          Register
        </Link>

        <Link  to="/services">
          Services
        </Link>
        
        <Link to="/service/:id">
          Detail
        </Link>

      </div>
        {props.children}
    </>
  );
}
