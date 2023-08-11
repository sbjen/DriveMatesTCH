import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";

import Register from "./pages/Login";
import Login from "./pages/Register";

// import Resume from './pages/Resume'
// import Contacts from './pages/Contact'

import Preloader from "./components/PreLoader";
import ScrollToTop from "./components/ScrollToTop";

// import logo from './logo.svg';
import "./App.css";
import "../src/stylesheet/app.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Smallbutton from "./components/clickables/Button";
import Donate from "./pages/Donate";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate/>} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
