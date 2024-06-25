import "./App.css";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Trial from "./components/Trial.jsx";
import Trusted from "./components/Trusted.jsx";
import Contact from "./components/Contact.jsx";
import Blog from "./components/Blog.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Team from "./components/Team.jsx";
// import Services from "./components/Services.jsx";
import Intro from "./components/Intro.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Trusted />
      {/* <Services /> */}
      <Testimonials />
      <Team />
      <Contact />
      <Blog />
      <Trial />
      <Footer />
    </>
  );
}

export default App;
