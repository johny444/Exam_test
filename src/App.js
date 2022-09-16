import { Radio } from "antd";
import React, { useState } from "react";
import { Radio1 } from "./pages/Radio1";
import { Radio2 } from "./pages/Radio2";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Radio1 />}></Route>

          <Route path="/Radio2" element={<Radio2 />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
