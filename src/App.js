import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/home";
import Menu from "./pages/menu";
import Blog from "./pages/blog";
import About from "./pages/about";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
