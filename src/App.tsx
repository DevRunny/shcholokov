import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";
import Portfolio from "./components/Portfolio/Portfolio";
import Technologies from "./components/Technologies/Technologies";

function App() {
  return (
    <>
      <NavBar />
      <Main />
      <About />
      <Technologies />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
