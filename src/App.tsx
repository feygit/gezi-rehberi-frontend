import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import RegisterLoginPage from "./Pages/RegisterLoginPage/RegisterLoginPage";
import Home from "./Pages/HomePage/Home";
function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<RegisterLoginPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
