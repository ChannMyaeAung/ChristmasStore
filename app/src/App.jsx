import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";

function App() {
  return (
    <div id="App">
      <Navbar />
      <Hero />
      <Products />
      <Accordion />
      <Footer />
    </div>
  );
}

export default App;
