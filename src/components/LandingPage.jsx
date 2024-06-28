import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import Trial from "./Trial.jsx";
import Trusted from "./Trusted.jsx";
import Contact from "./Contact.jsx";
import Testimonials from "./Testimonials.jsx";
import Team from "./Team.jsx";
import Intro from "./Intro.jsx";
import Blog from "./Blog.jsx";

const LandingPage = () => {
  return (
    <>
      <div id="home">
        <Navbar />
        <Intro />
        <Trusted />
        <Trial />
        <Team />
        <Blog />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
