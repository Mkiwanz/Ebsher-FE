import { MainImageSlider } from "../Compnents/MainImageSlider/MainImageSlider";
import AboutUs from "../Compnents/AboutUs/AboutUs";
import ServicesProvided from "../Compnents/ServicesProvided/ServicesProvided";
import FAQs from "../Compnents/FAQ/FAQ";
import Contact from "../Compnents/Contact/Contact";
import MyNavbar from "../Compnents/NavBar/MyNavbar";
import { Footer } from "../Compnents/Footer/Footer";
import Projects from "../Compnents/Projects/Projects";


function HomePage() {
  return (
    <div>
      <MyNavbar />
      <MainImageSlider />
      <AboutUs />
      <br/>
      <br/>
      <br/>
      <Projects/>
      <ServicesProvided />
      <FAQs />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;
