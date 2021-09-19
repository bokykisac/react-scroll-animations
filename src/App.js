import { useEffect, useRef } from "react";
import "./App.css";

import Aos from "aos";
import "aos/dist/aos.css";

import Stars from "./assets/images/stars.png";
import Moon from "./assets/images/moon.png";
import MountainsBehind from "./assets/images/mountains_behind.png";
import MountainsFront from "./assets/images/mountains_front.png";

function App() {
  const moonRef = useRef();
  const starsRef = useRef();
  const mountainsBehindRef = useRef();
  const mountainsFrontRef = useRef();
  const textRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    Aos.init({ duration: 1500 });

    const onScrollHandler = () => {
      let value = window.scrollY;
      starsRef.current.style.left = `${value * 0.25}px`;
      moonRef.current.style.top = `${value * 1.05}px`;
      mountainsBehindRef.current.style.top = `${value * 0.5}px`;
      textRef.current.style.marginRight = `${value * 3}px`;
      buttonRef.current.style.marginTop = `${value * 1.5}px`;
    };
    window.addEventListener("scroll", onScrollHandler);
    return () => {
      window.removeEventListener("scroll", onScrollHandler);
    };
  }, []);

  return (
    <div className="App">
      <section>
        <img src={Stars} alt="stars" id="stars" ref={starsRef} />
        <img src={Moon} alt="moon" id="moon" ref={moonRef} />
        <img
          src={MountainsBehind}
          alt="MountainsBehind"
          id="mountains_behind"
          ref={mountainsBehindRef}
        />
        <h2 id="text" ref={textRef}>
          Shiny!
        </h2>
        <a href="#sec" className="btn" id="btn" ref={buttonRef}>
          Scroll down!
        </a>
        <img
          src={MountainsFront}
          alt="MountainsFront"
          id="mountains_front"
          ref={mountainsFrontRef}
        />
      </section>
      <div className="sec" id="sec">
        <div data-aos="fade-left" className="box">
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In aperiam
            unde eos. Temporibus aut expedita eum, quae eveniet ipsum
            perferendis ducimus dolorem sequi omnis excepturi laboriosam in sed
            soluta! Sunt.
          </p>
        </div>
        <div data-aos="fade-right" className="box">
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In aperiam
            unde eos. Temporibus aut expedita eum, quae eveniet ipsum
            perferendis ducimus dolorem sequi omnis excepturi laboriosam in sed
            soluta! Sunt.
          </p>
        </div>
        <div data-aos="flip-left" className="box">
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In aperiam
            unde eos. Temporibus aut expedita eum, quae eveniet ipsum
            perferendis ducimus dolorem sequi omnis excepturi laboriosam in sed
            soluta! Sunt.
          </p>
        </div>
        <div data-aos="slide-right" className="box">
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In aperiam
            unde eos. Temporibus aut expedita eum, quae eveniet ipsum
            perferendis ducimus dolorem sequi omnis excepturi laboriosam in sed
            soluta! Sunt.
          </p>
        </div>
        <div data-aos="zoom-out-down" className="box">
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In aperiam
            unde eos. Temporibus aut expedita eum, quae eveniet ipsum
            perferendis ducimus dolorem sequi omnis excepturi laboriosam in sed
            soluta! Sunt.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
