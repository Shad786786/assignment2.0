import React from "react";
import HOME from './Home';
import Materials from './studymaterial';
import News from './news';
import About from "./Aboutus";
import Connect from "./connect";
import Footer from "./footer";
import Explore from "./explore";
import Intro from "./intro";
import Materials1 from './materials1';
import FAQ from './FAQ';
import Keyfeatures from './keyfeatures';
import ToggleDarkMode from './toggle'
import Webdesign from './webdesign'


function App() {
  return (
    <div className=" text-black dark:bg-gray-900 dark:text-white transition-colors duration-300 backdrop-blur-md">
      {/* Optional dark mode toggle button (floating top-right) */}
      <div className="fixed top-4 right-4 z-50">
        <ToggleDarkMode />
      </div>

      <HOME />
      <Webdesign />
      <Intro />
      <News />
      <Materials1 />
      <Keyfeatures />
      <About />
      <Explore />
      <FAQ />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
