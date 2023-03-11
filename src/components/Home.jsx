import { onAuthStateChanged, signOut } from "firebase/auth";
import { ref, set } from "firebase/database";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetNewsQuery } from "../api/apiSlice";
import { login, logOut } from "../features/auth/authSlice";
import { auth, database } from "../firebase-config";
import ErrorPage from "./ErrorPage";
import Footer from "./Footer";
import Navbar from "./navbar/Navbar";
import RelatedNews from "./RelatedNews";
import TopNews from "./TopNews";

function Home() {
  const { section } = useSelector((state) => state.section);
  const { data, isLoading, isError, error } = useGetNewsQuery(section);
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    signOut(auth);
    dispatch(logOut());
  }, [dispatch]);

  useEffect(() => {
    writeUserData(3, "fede", "fede-cs@live.com", "www.google.com");
    return console.log("succes");
  }, []);

  function writeUserData(userId, name, email, savedNews) {
    set(ref(database, "users/" + userId), {
      username: name,
      email: email,
      savedNews: savedNews,
    });
  }

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
  }, [dispatch]);

  return (
    <>
      {isError ? (
        <ErrorPage />
      ) : (
        <div className="sm:pl-4 sm:pr-4">
          <Navbar user={user} logOut={handleLogout} />
          <TopNews
            data={data}
            isLoading={isLoading}
            isError={isError}
            error={error}
          />
          <RelatedNews isLoading={isLoading} />
          <Footer isLoading={isLoading} />
        </div>
      )}
    </>
  );
}

export default Home;
