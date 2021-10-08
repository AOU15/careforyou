import { NavLink, Link } from "react-router-dom";

export default function Layout(props) {
  return (
    <>
      <div><h1 className='title'>Care For You</h1> </div>
        
      <div className="layout">

        {props.user}

        <Link className="link" to="/login">
          Login
        </Link>
        <br />
        <NavLink className="link" to="/logout">
          Logout
        </NavLink>
        <br />
        <NavLink className="link" to="/reviews">
          Reviews
        </NavLink>
        <br />
        <NavLink className="link" to="/suggesstions">
          Suggestions
        </NavLink>
        <br />
        <Link className="link" to="/register">
          Register
        </Link>

        {props.children}
      </div>
    </>
  );
}
