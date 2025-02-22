import "./App.css";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarDefault from "./templates/Navbar";
import Footer from "./templates/Footer";
import ReachUs from "./pages/reach-us/ReachUs";
function App() {
  return (
    <div className="App">
      <Router>
        <NavbarDefault />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/know-us" element={<AboutPage />} />
          <Route path="/reach-us" element={<ReachUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
