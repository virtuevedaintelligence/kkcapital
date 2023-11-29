import { useEffect } from "react";
import About from "./components/About";
import Bankpartners from "./components/Bankpartners";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Headersection from "./components/Headersection";
import Missionvission from "./components/Missionvission";
import Nbfcpartners from "./components/Nbfcpartners";
import Services from "./components/Services";
import Team from "./components/Team";
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Headersection />
      <About />
      <Missionvission />
      <Services />
      <Team />
      <Bankpartners />
      <Nbfcpartners />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
