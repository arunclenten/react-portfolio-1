import "./App.css";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Hero } from "./Components/Hero";
import Service from "./Components/Service";
import Project from "./Components/Project";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Service />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
