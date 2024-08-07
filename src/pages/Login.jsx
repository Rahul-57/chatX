// import React, { useState } from 'react'
// import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from '../firebase';
// import { Link,useNavigate } from "react-router-dom";

// const Login = () => {

//   const [err, setErr] = useState(false)
//     const navigate = useNavigate()

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         const email = e.target[0].value;
//         const password = e.target[1].value;


//         try {
//           await signInWithEmailAndPassword(auth, email, password)
//           navigate("/")

            
//         }
//         catch (err) {
//             setErr(true)
//         }
//     }
//   return (
//     <div>
//       <div className='formContainer'>
//             <div className="formWrapper">
//                 <span className="logo" >chatX</span>
//                 <span className="title">Login</span>

//                 <form onSubmit={handleSubmit}>
                  
//                     <input type="email" placeholder='Email' />
//                     <input type="password" placeholder='Password'/>
                   
                    
//                     <button>Login</button>
//                     {err && <span>Something went Wrong...</span>}
//                 </form>
//                 <p>New User? <Link to ='/register'>Register</Link></p>
//             </div>

//         </div>
//     </div>
//   )
// }

// export default Login
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">ChatX</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>You don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;