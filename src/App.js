import logo from "./logo.svg";
import "./App.css";
import { MainImageSlider } from "./Compnents/MainImageSlider/MainImageSlider";
import AboutUs from "./Compnents/AboutUs/AboutUs";
import ServicesProvided from "./Compnents/ServicesProvided/ServicesProvided";
import FAQs from "./Compnents/FAQ/FAQ";
import Contact from "./Compnents/Contact/Contact";
import MyNavbar from "./Compnents/NavBar/MyNavbar";
import { Footer } from "./Compnents/Footer/Footer";
import "./scss/style.scss";


function App() {
  return (
    <div>
      <MyNavbar />
      <MainImageSlider />
      <AboutUs />
      <ServicesProvided />
      <FAQs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
