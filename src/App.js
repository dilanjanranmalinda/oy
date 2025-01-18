import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarDefault from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Router>
        <NavbarDefault />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/know-us" element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
