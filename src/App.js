import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import MembershipForm from "./components/ MembershipForm";
import AboutUs from "./components/AboutUs";
import LeadershipStructureSection from "./pages/LeadershipStructureSection";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leadership" element={<LeadershipStructureSection />} />
          <Route path="/membership" element={<MembershipForm />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
