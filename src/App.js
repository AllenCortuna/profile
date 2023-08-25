import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./component/navbar/Navbar";
import Home from "./component/Home";
import Project from "./component/project/Project";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;
