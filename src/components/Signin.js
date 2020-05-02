import React, { useState, useEffect } from 'react';
// import PostSnippet from './PostSnippet';
import {auth} from '../firebase'
// import './App.css';
import {Link } from 'react-router-dom';

const Signin = (props) => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState('');

  const onEmailChange = (event) => setEmail(event.target.value);
  const onPasswordChange = (event) => setPassword(event.target.value);

    const onSignin = () =>{
      auth.signInWithEmailAndPassword(email, password)
      .then(()=>{
        console.log('done');
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        console.log(errorCode);
        setError(errorMessage);
      });
    }

  return (
    <div>
      <h1>{error}</h1>
            <input type="text" placeholder="Email" onChange={onEmailChange}/>
            <input type="password" placeholder="Password" onChange={onPasswordChange}/>
            <Link to="/signup">Dont have account signup</Link>
            <button onClick={onSignin}>Sign In</button>
    </div>
  );
  }

export default Signin;