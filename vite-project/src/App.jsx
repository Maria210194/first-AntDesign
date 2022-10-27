import Navbar from "./components/Navbar";
import FooterComponent from "./components/FooterComponent";

import Blog from "./pages/Blog";
import Contacts from "./pages/Contacts";
import Categories from "./pages/Categories";
import WhoWeAre from "./pages/WhoWeAre";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/whoweare" element={<WhoWeAre />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Router>
      <FooterComponent />
    </div>
  );
}

export default App;
