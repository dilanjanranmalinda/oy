import "./App.css";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarDefault from "./templates/Navbar";
import Footer from "./templates/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <NavbarDefault />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/know-us" element={<AboutPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
