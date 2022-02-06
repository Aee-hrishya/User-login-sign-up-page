import React, { useContext, useState } from "react";

//Importing the things we need from firebase
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import "./Page.css";

//For the elegant and crisp toast notifications
import { toast } from "react-toastify";

import { Navigate } from "react-router-dom";
import { Context } from "../stateprovider/context";

//Below are the animations for the different elements that we will need
import {
  DescriptionAnimation,
  FormAnimation,
  HeadingAnimation,
  InputAnimation,
  OtherAnimation,
} from "./PageAnimations";

/************************************************************************************************* */
//Actual logic of the code begins

const Page = () => {
  const { state, dispatch } = useContext(Context);
  const { user } = state; //Destructuring to get the user from the state

  //state for the email and password
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  //This is to take the input from the user
  const changeHandler = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  //Function for SignUp
  const handleSignup = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    )
      .then((userCredential) => {
        dispatch({
          type: "ADD",
          payload: {
            email: userCredential.user.email,
            uid: userCredential.user.uid,
          },
        });

        // ...
      })
      .catch((error) => {
        toast(error.message, { type: "error" });
        // ..
      });
  };

  //Function for login
  const handleSignin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then((userCredential) => {
        dispatch({
          type: "ADD",
          payload: {
            email: userCredential.user.email,
            uid: userCredential.user.uid,
          },
        });

        // ...
      })
      .catch((error) => {
        toast("Invalid Email/ User not found " + error.code, { type: "error" });
      });
  };

  //This gets triggered when the user clicks on the login
  const signInClickHandler = (e) => {
    e.preventDefault();
    console.log(credentials);
    handleSignin();
  };

  //This triggers when the user clicks on the signup button
  const signUpClickHandler = (e) => {
    e.preventDefault();
    handleSignup();
  };

  //Condition to check whether the users unique id is present or not and if present then navigate the user to the home page
  if (user?.uid) {
    return <Navigate to="/" />;
  }
  return (
    <FormAnimation>
      <form className="form">
        <div className="form-inner">
          <HeadingAnimation>
            {" "}
            <p className="heading">Create an XYZ account </p>
          </HeadingAnimation>
          <DescriptionAnimation>
            <p className="desc">
              One account for everything, all services included.{" "}
              <span className="learn">Learn more</span>
            </p>
          </DescriptionAnimation>
          <InputAnimation>
            <p>Email</p>
            <input
              name="email"
              type="email"
              placeholder="Eg:email@gmail.com"
              value={credentials.email}
              onChange={changeHandler}
              className="form-input"
            />
            <p>Password</p>
            <input
              name="password"
              type="password"
              placeholder="Password (min.length 6 characters)"
              value={credentials.password}
              onChange={changeHandler}
              className="form-input"
            />
          </InputAnimation>
          <br />
          <OtherAnimation>
            <button onClick={signUpClickHandler} className="form-signup">
              Create Account
            </button>
            <br />
            Already a user?
            <span onClick={signInClickHandler} className="form-signin">
              Login
            </span>
          </OtherAnimation>
        </div>
      </form>
    </FormAnimation>
  );
};

export default Page;
