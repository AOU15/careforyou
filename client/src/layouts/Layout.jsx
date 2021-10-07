import { Link } from 'react-router-dom';

export default function Layout(props) {
  return (
    <>
    <div>
      <header>
        <h1>Care For You</h1>
        {props.user ? (
          <div>
            <p>{props.user.username}</p>
            <button onClick={props.handleLogout}>SignOut</button>
          </div>
        ) : (
            <Link to='/login'>Login</Link>
            
        )}
        {/* <hr /> */}
        {props.user && (
          <div>
      

           
          </div>
        )}
      </header>
      {props.children}
      </div>
      </>
  );
}