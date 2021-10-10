import { NavLink, Link } from "react-router-dom";

export default function Layout(props) {
  return (
    <>
      <div>
        <h1 className="title">Care For You</h1>{" "}
      </div>

      <div className="link">
        {props.user}

        <Link to="/login">Login</Link>
        <br />

        <NavLink to="/logout">Logout</NavLink>
        <br />
        <NavLink to="/reviews">Reviews</NavLink>
        <br />
        <Link to="/suggestion">Suggestion</Link>
        <br />
        <Link to="/register">Register</Link>
        <br />
        <Link to="/services">Services</Link>
        <br />
        <Link to="/service/:id">Detail</Link>
      </div>
      {props.children}
    </>
  );
}
