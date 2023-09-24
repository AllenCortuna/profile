import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./component/navbar/Navbar";
import Home from "./component/index/Home";
import Project from "./component/project/Project";
import Contact from "./component/contact/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
