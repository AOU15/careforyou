import { NavLink, Link } from "react-router-dom";

export default function Layout(props) {
  return (
    <>
      <div>
        <h1 className="title">Care For You</h1>{" "}
      </div>

      <div className="link">
        {props.currentUser ? (
          <>
            <button onClick={props.handleLogout}>Logout</button>
            <br />
            <NavLink to="/reviews">Reviews</NavLink>
            <br />
            <Link to="/suggestion">Suggestion</Link>
            <br />
            <Link to="/services">Services</Link>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <br />
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
      {props.children}
    </>
  );
}
