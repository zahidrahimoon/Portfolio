import Navbar from "./components/Navbar";
import gradient from "./assets/header-bg-color.png";
import "./index.css";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import MyWork from "./components/MyWork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <img
          src={gradient}
          alt="Gradient Background"
          className="w-full h-full object-cover"
        />
      </div>
      <Navbar />
      <Header />
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
