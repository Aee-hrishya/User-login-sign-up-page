import "./App.css";
import Page from "./components/Page";
import Home from "./components/Home";
import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const app = initializeApp(firebaseConfig);

function App() {
  return (
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
