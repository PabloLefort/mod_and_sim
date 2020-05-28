import React, { Component } from 'react';
import './Main.css';
import Plotter from '../Plotter/Plotter';
import InfoPanel from '../InfoPanel/InfoPanel';

class Main extends Component {

  componentDidMount() {
  };

  componentDidUpdate() {
    switch(this.props.metodo) {
        case 'EULER':
            // console.log('e un eulerchi');
            // const EnhancedComponent = higherOrderComponent(Plotter);
            break;
        default:
            break;
      }
  }

  render(){
    return (
      <div className="main">
          <Plotter metodo={this.props.metodo}></Plotter>
          <InfoPanel></InfoPanel>
      </div>
  );
  }

    
};

export default Main;