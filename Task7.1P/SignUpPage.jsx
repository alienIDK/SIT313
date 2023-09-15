import React, { useState } from 'react';
import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import './style.css';


function SignUpPage() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [firstname, setFirstname] = useState("");
   const [lastname, setLastname] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
   const [error, setError] = useState("");

   const signUp = (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError("Error: Password do not match.");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                return updateProfile(user, {
                    displayName: firstname + " " + lastname,
                });
            })
            .then(() => {
                console.log("User created successfully");
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    return (
        <div className="page-container">
            <h1 className='title'>Sign Up Time</h1>
            <form onSubmit={signUp}>
                <input
                    name='firstname'
                    className='input-container'
                    type='text'
                    placeholder='First Name'
                    onChange={(e) => setFirstname(e.target.value)}
                    value={firstname}
                    required
                />
                <br />
                <input
                    name='lastname'
                    className='input-container'
                    type='text'
                    placeholder='Last Name'
                    onChange={(e) => setLastname(e.target.value)}
                    value={lastname}
                    required
                />  
                <br />
                <input
                    name='email'
                    className='input-container'
                    type='email'
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                />
                <br />
                <input
                    name='password'
                    className='input-container'
                    type='password'
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                />
                <br />
                <input
                    name='confirmPassword'
                    className='input-container'
                    type='password'
                    placeholder='Confirm Password'
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    required
                />
                <br />
                {error && <p className="error-message">{error}</p>}
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    );
}

export default SignUpPage;
