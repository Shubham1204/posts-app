import React,{Component} from 'react';
import {Link,Redirect} from 'react-router-dom';
import db,{auth} from '../firebase'

const Header = (props) => {

    const onSignout = () =>{
        auth.signOut().then(function() {
            // Sign-out successful.
            console.log("logout");
            
          }).catch(function(error) {
            // An error happened.
            var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        console.log(errorCode);
          });
    }

  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active mr-5">
      <Link to="/" >Posts</Link>
      </li>
      <li className="nav-item mr-5">
      <Link to="/createpost" >Create Post</Link>
      </li>
    {console.log('head',props.user.uid)}
      
      <li className="nav-item mr-5">
      <Link to="/signin" >SignIn</Link>
      </li>
      <li className="nav-item mr-5">
      <Link to="/signup" >SignUp</Link>
      </li>
      <li className="nav-item mr-5">
      <button onClick={onSignout}>SignOut</button>
      </li>
    </ul>
  </div>
</nav>
    </div>
  );
}

export default Header;