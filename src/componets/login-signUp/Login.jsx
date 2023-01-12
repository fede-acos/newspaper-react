import React from "react";
import { auth } from "../../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const handleSubmit = async (email, password) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};
function Login() {
  return (
    <div>
      <form action="#">
        <label htmlFor="email">
          <input type="email" name="email" id="email" />
        </label>
        <label htmlFor="password">
          <input type="password" name="password" id="password" />
        </label>
      </form>
    </div>
  );
}

export default Login;
