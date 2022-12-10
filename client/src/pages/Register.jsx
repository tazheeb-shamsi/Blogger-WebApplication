import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form action="">
        <input required type="text" placeholder="username" />
        <input required type="password" placeholder="email" />
        <input required type="password" placeholder="password" />
        <button>Register</button>
        <p>There should be Error</p>
        <span>
         Already, you have an account? <Link to="/Login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
