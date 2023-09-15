import React, { useState } from 'react';
import { auth } from './firebase.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './style.css';


function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const signIn = (event) => {
    event.preventDefault();
    setError(null); 
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch((error) => {
        if (error.code === 'auth/user-not-found') {
          setError('Error: User does not exist. Please sign up.');
        } 
        else if (error.code === 'auth/wrong-password') {
          setError('Error: Incorrect password. Please try again.');
        } 
        else {
          setError('An error occurred. Please Try Again');
          console.error(error);
        }
      });
      
  };

  return (
    <div className="page-container">
      
      <h1 className='title'>Login Time</h1>

      {user ? (
        <div>
          <p>Login Successfully, Hi {user.displayName }</p>
        </div>
      ) : (
        <div>
          {error && <p>{error}</p>} {}
          
          <form onSubmit={signIn}>
            <input
              name="email"
              type="text"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className='input-container'
            />
            <br />
            <input
              name="password"
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className='input-container'
            />
            <br />
            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
