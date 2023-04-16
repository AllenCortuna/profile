import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./component/navbar/Navbar";
import Home from "./component/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

  export default App;
