import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase-config";
import Footer from "../Footer";
import Logo from "../navbar/Logo";
import NavbarAuth from "./NavbarAuth";

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
    <>
      <NavbarAuth />

      <div className=" flex min-h-screen w-full flex-col items-center  bg-base-200  md:justify-center">
        <div className=" bg-base-100  p-14 shadow-2xl">
          <div className="mb-8 w-60">
            <Logo />
          </div>
          <form onSubmit={handleSubmit}>
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
              <button className="btn-primary btn">Login</button>
            </div>
            {error ? (
              <span className="text-error">
                Password should be at least 6 characters
              </span>
            ) : null}
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default SignUp;
