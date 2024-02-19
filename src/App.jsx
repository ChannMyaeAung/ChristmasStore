import "./App.css";
import ShopCartContextProvider from "./ShopCartContextProvider";
import Accordion from "./components/Accordion/Accordion";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";

function App() {
  return (
    <>
      <div id="App" className="container px-4 mx-auto">
        <ShopCartContextProvider>
          <Navbar />
          <Hero />
          <Products />
        </ShopCartContextProvider>
      </div>
      <section id="accordion" className="bg-red-600">
        <Accordion />
      </section>
      <footer
        id="footer"
        className="bg-[url('./assets/Footer/footer_bg.png')] bg-center bg-cover relative"
      >
        <Footer />
      </footer>
    </>
  );
}

export default App;
