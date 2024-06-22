import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Trial from "./components/Trial";
import Trusted from "./components/Trusted";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import Services from "./components/Services";
import Intro from "./components/Intro";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <AboutUs />
      <Trusted />
      <Services />
      <Testimonials />
      <Team/>
      <Contact/>
      <Blog/>
      <Trial />
      <Footer/>
      
    </>
  );
}

export default App;
