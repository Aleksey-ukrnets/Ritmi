import Challenge from "./components/Challenge";
import Header from "./components/Header";
import PlayGame from "./components/PlayGame";
import light from './assets/light.svg'
import Cards from "./components/Cards";
import FaqBlock from "./components/FAQ/FaqBlock";
import Footer from "./components/Footer";
import DancePlay from "./components/DancePlay";
function App() {
  return (
    <div className="wrapper">
      <Header />
      <PlayGame />
      <DancePlay />
      <Challenge />
      <Cards />
      <FaqBlock />
      <Footer />
      <img src={light} alt="lightIcon" className="light light1" />
      <img src={light} alt="lightIcon" className="light light2" />
      <img src={light} alt="lightIcon" className="light light3" />
    </div>
  );
}

export default App;
