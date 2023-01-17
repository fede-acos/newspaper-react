import React, { useState } from "react";
import { auth } from "../../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  const handleSubmit = async (email, password) => {
    // need to add verification to the form
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pt-4 pb-4">
      <form
        action="#"
        className="form-control"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(email, password);
        }}
      >
        <label htmlFor="email" className="label" aria-required>
          <span>Email</span>
        </label>
        <input
          required
          type="email"
          name="email"
          id="email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password" className="label">
          <span>Password</span>
        </label>
        <input
          required
          type="password"
          name="password"
          id="password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit " className="btn">
          CLICK ME
        </button>
      </form>
    </div>
  );
}

export default SignUp;
