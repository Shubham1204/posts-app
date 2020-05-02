import React,{Component, useState} from 'react';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Posts from './components/Posts';
import Post from './components/Post';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CreatePost from './components/CreatePost';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import db, { auth } from './firebase';
// import './App.css';

function App() {
 
  const [user,setUser] = useState(false)
  auth.onAuthStateChanged(function(user) {
    if (user) {
      setUser(user)
      // User is signed in.
      
      console.log('user: ',user.uid)
    } else {
      console.log('no user')
      // No user is signed in.
    }
  });
  // const [isClicked,setIsClicked] = useState('')
  

// const callbackHandlerFunction = (clickStatus) => {
//   setIsClicked=clickStatus
// }

  return (
    <div>
      <Router>
      <Header user={user} />
      <Sidebar />
      <Route default exact path="/" ><Posts /></Route>
      
      <Route path="/signup" ><Signup /></Route>
      <Route t path="/signin" ><Signin  /></Route>
      {/* handleClickInParent={callbackHandlerFunction} */}
      <Route path="/createpost" ><CreatePost user={user} /></Route>
      <Route path="/post/:id" ><Post /></Route>
      </Router>
      {/* <h1>jkh{isClicked}</h1> */}
    </div>
  );
}

export default App;
