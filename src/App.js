import "./App.css";
import Choose from "./components/landing-page/Choose";
import Feature from "./components/landing-page/Feature";
import Hero from "./components/landing-page/Hero";
import California from "./components/landing-page/California";
import OurFirm from "./components/landing-page/OurFirm";

function App() {
  return (
    <>
      <Hero />
      <Feature />
      <Choose />
      <OurFirm />
      <California />
    </>
  );
}

export default App;
