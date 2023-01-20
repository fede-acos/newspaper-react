import React, { useState } from "react";
import TopNews from "./TopNews";
import Navbar from "./navbar/Navbar";
import RelatedNews from "./RelatedNews";
import Footer from "./Footer";
import { useGetNewsQuery } from "../api/apiSlice";
import { useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase-config";

function Home() {
  const { section } = useSelector((state) => state.section);
  const { data, isLoading } = useGetNewsQuery(section);
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logOut = async () => {
    await signOut(auth);
  };

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
