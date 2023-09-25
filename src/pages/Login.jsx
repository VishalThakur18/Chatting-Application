import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import side from "../img/excellent-review.png";
import icon from "../img/chat.png";
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
    <div className='main-container'>
      <div className='wave'>
        <span className='name'>
          <h1>
            WizardryTalks
          </h1>
        </span>
      </div>

      <div className='SideImg'>
        <img src={side} />
      </div>

      <div className='SideIcon'>
        <img src={icon} />
      </div>
 
      {/* login */} 
      <div className="formContainer">
        <div className="backEffect"></div>
        <div className="formWrapper">

          <span className="logo">WizardryTalks</span>
          <span className="title">Login</span>
          <form onSubmit={handleSubmit}>
            <input className="firstinput" type="email" placeholder="email" />
            <input className="secondinput" type="password" placeholder="password" />

            <button>Sign in</button>
            {err && <span>Something went wrong..</span>}
          </form>
          <p>You don't have an account? <Link to="/register">Register</Link></p>
          <p><Link to="/landingpage">Go Back </Link></p>
        </div>
      </div> 
      
    </div>
  );
};

export default Login;
