import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./component/navbar/Navbar";
import Home from "./component/Home";
import Project from "./component/project/Project";
// import ContactUs from "./component/contact/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        {/* <Route path="/contact" element={<ContactUs />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
