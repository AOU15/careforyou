import { NavLink , Link } from 'react-router-dom';


export default function Layout(props) {
  return (
    <>
    <div>
          <h1>Care For You</h1>
      {/* <header> */}
      {props.user}
          
          <Link to='/login'>Login</Link>

          <NavLink className='link' to="/logout">Logout</NavLink>
     
     <NavLink className="link" to='/reviews'>Reviews</NavLink>
        <NavLink className="link" to='/suggesstions'>Suggestions</NavLink>
        <Link to='/register'>Register</Link>

     {/* <NavLink classname="link" to='/servies'>services</NavLink> */}


        {/* {props.user ? (
          <div>
            <p>{props.user.username}</p>
            <button onClick={props.handleLogout}>SignOut</button>
          </div>
       
            
            
        )}
        {/* <hr /> */}
        {/* {props.user && (
          <div>
      

           
          </div>
        )}
      </header> */}
      {props.children} 
      </div>
      </>
  );
}


