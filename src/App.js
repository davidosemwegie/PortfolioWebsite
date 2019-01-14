import React, { Component } from 'react';

//Component Imports
import './style.css'
import Header from './components/Header'
import Terminal from './components/Terminal'
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header name="OSAHON DAVID OSEMWEGIE" />
        <div id="TerminalSection">
          <p id="aboutIntroText">HELLO, WORLD! I'M A DEVELOPER.</p>
          <Terminal />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
