import React, { Component } from 'react';
import './Main.css';
import Plotter from '../Plotter/Plotter';
import InfoPanel from '../InfoPanel/InfoPanel';

class Main extends Component {
  render(){
    return (
      <div className="main">
          <Plotter></Plotter>
          <InfoPanel></InfoPanel>
      </div>
  );
  }
};
export default Main