import React, { useState, useEffect } from "react";
import TopNews from "./TopNews";
import Navbar from "./navbar/Navbar";
import RelatedNews from "./RelatedNews";
import Footer from "./Footer";
import { useGetNewsQuery } from "../api/apiSlice";
import { useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import { logout } from "../features/auth/authSlice";

function Home() {
  const { section } = useSelector((state) => state.section);
  const { data, isLoading } = useGetNewsQuery(section);
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  const logOut = async () => {
    await signOut(auth);
    dispatch(logout());
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        dispatch(
          login({
            name: currentUser?.displayName,
            email: currentUser?.email,
            isVerified: currentUser?.emailVerified,
          })
        );
      }
    });
  }, []);

  return (
    <>
      <div className="sm:pl-4 sm:pr-4">
        <Navbar user={user} logOut={logOut} />
        <TopNews data={data} isLoading={isLoading} />
        <RelatedNews isLoading={isLoading} />
      </div>
      <Footer isLoading={isLoading} />
    </>
  );
}

export default Home;
