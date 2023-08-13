import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";

import Register from "./pages/Login";
import Login from "./pages/Register";

// import Resume from './pages/Resume'
// import Contacts from './pages/Contact'

import Preloader from "./components/PreLoader";
// import ScrollToTop from "./components/ScrollToTop";

// import logo from './logo.svg';
import "./App.css";
import "./style.css";

import "bootstrap/dist/css/bootstrap.min.css";
// import Smallbutton from "./components/clickables/Button";
import Donate from "./pages/Donate";
import { Provider } from "react-redux";
import store  from "./redux/store.js"


function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Provider store = {store}>

    
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
