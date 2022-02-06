import "./App.css";
import Page from "./components/Page";
import Home from "./components/Home";

//Importing firebase here
import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from "firebase/app";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

//ToastContainer which will be needed for the toast messages
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const app = initializeApp(firebaseConfig);

function App() {
  return (
    // Routes for the application
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/signup" element={<Page />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
