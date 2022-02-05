import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../stateprovider/context";

const Home = () => {
  const { state } = useContext(Context);
  const { user } = state; //Destructuring the state further to get the user

  if (!user?.uid) {
    return <Navigate to="/signup" />;
  }
  return (
    <div>
      <h1>User successfully signed up/ logged in</h1>
      <h2>Now we can show him the contents of the home page</h2>
    </div>
  );
};

export default Home;
