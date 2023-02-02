import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase-config";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  useEffect(() => {
    setError(false);
  }, [password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // need to add verification to the form
    try {
      console.log(email, password);
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(user);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card w-full max-w-sm flex-shrink-0 bg-base-100 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="input-bordered input"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="input-bordered input"
              />
              <label className="label">
                <a
                  href="#"
                  onClick={handleClick}
                  className="link-hover label-text-alt link"
                >
                  Have an Account Already? Log In
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn-primary btn">Sign Up</button>
            </div>
            {error ? (
              <span className="text-error">
                Password should be at least 6 characters
              </span>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
