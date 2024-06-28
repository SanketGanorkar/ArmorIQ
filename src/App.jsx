import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Services from "./components/Services.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs.jsx";
import LandingPage from "./components/LandingPage.jsx";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/ArmorIQ/" element={< LandingPage/>} />
          <Route exact path="/ArmorIQ/services" element={<Services />} />
          <Route exact path="/ArmorIQ/about" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
