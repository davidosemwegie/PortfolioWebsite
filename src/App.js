import React, { Component } from 'react';

//Component Imports
import './style.css'
import Header from './components/Header'
import Terminal from './components/Terminal'
import Footer from './components/Footer';
import Resume from './components/Resume'

class App extends Component {
  render() {
    return (
      <div>
        <Header name="OSAHON DAVID OSEMWEGIE" />
        <div id="TerminalSection" className="PageSection">
          <Terminal />
        </div>
        <div id="ResumeSection" className="PageSection">
          <Resume />
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
