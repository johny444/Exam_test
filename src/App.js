import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from "./pages/Reports";
import Team from "./pages/Team";

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/overview" exact element={<Overview />} />
        <Route path="/reports" exact element={<Reports />} />
        <Route path="/reports/reports1" exact element={<ReportsOne />} />
        <Route path="/reports/reports2" exact element={<ReportsTwo />} />
        <Route path="/reports/reports3" exact element={<ReportsThree />} />
        <Route path="/team" exact element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App;
