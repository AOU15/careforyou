import { NavLink, Link } from "react-router-dom";

export default function Layout(props) {
  return (
    <>
      <div>
        <h1 className="title">Care For You</h1>{" "}
      </div>

      <div className="layout">
        {props.user}

        <Link className="link" to="/login">
          Login
        </Link>

        <NavLink className="link" to="/logout">
          Logout
        </NavLink>

        <NavLink className="link" to="/reviews">
          Reviews
        </NavLink>

        <Link className="link" to="/suggestion">
          Suggestion
        </Link>

        <Link className="link" to="/register">
          Register
        </Link>

        <Link className="link" to="/services">
          Services
        </Link>
        


        {props.children}
      </div>
    </>
  );
}
