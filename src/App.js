import { Radio } from "antd";
import React, { useState } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Question from "./components/Question";
import Question2 from "./components/Question2";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Question></Question>}></Route>
          <Route path="/2" element={<Question2></Question2>}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
