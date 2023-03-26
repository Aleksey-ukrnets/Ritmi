import Challenge from "./components/Challenge";
import Header from "./components/Header";
import PlayGame from "./components/PlayGame";
import light from './assets/light.svg'
import Cards from "./components/Cards";
import FaqBlock from "./components/FAQ/FaqBlock";
import Footer from "./components/Footer";
import DancePlay from "./components/DancePlay";
import { useState } from "react";
function App() {
  function openInNewTab(url) {
    let win = window.open(url, '_blank');
    win.focus();
  }
  // const [offsetAbout, setOffsetAbout] = useState()
  // const [offsetPlay, setOffsetPlay] = useState()
  const [offsetFaq, setOffsetFaq] = useState()

  const allScrollHeight = {
    // about: offsetAbout,
    // play: offsetPlay,
    faq: offsetFaq,
    
  };
  return (
    <div className="wrapper">
      <Header allScrollHeight={allScrollHeight} openInNewTab={openInNewTab} />
      <PlayGame openInNewTab={openInNewTab} />
      <DancePlay />
      <Challenge openInNewTab={openInNewTab} />
      <Cards openInNewTab={openInNewTab} />
      <FaqBlock getOffsetHeight={(type)=> setOffsetFaq(type)} />
      <Footer allScrollHeight={allScrollHeight} />
      <img src={light} alt="lightIcon" className="light light1" />
      <img src={light} alt="lightIcon" className="light light2" />
      <img src={light} alt="lightIcon" className="light light3" />
    </div>
  );
}

export default App;
