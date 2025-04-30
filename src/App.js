import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import MembershipForm from "./components/ MembershipForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/membership" element={<MembershipForm />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
