import React, { useEffect, useState } from "react";
import { auth } from "../../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

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
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                className="input input-bordered"
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
                className="input input-bordered"
              />
              <label className="label">
                <a
                  href="#"
                  onClick={handleClick}
                  className="label-text-alt link link-hover"
                >
                  Have an Account Already? Log In
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
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
