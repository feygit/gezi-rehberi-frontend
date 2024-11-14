import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import RegisterLoginPage from "./Pages/RegisterLoginPage/RegisterLoginPage";
import Home from "./Pages/HomePage/Home";
import City from "./components/City/City";
function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<RegisterLoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/city" element={<City cityName="elaziğ" />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
