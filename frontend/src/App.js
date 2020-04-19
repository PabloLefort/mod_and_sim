import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDataRequest, seleccionarMetodo } from './Actions/data'; 

import './App.css';

import NavMenu from './Components/NavMenu/NavMenu';
import SideMenu from './Components/SideMenu/SideMenu';
import Plotter from './Components/Plotter/Plotter';

class App extends Component {

  componentDidMount() {
    this.props.getDataRequest();
    console.log('testdata:', this.props.data);
  }

  render() {
    return(
      <div className="app">
        <header className="app-header">
          <NavMenu seleccionarMetodo={this.props.seleccionarMetodo.bind(this)}/>
        </header>
        <main className="app-main">
          <aside className="app-main__aside"><SideMenu metodo={this.props.metodo} /></aside>
          <article className="app-main__article"><Plotter /></article>
        </main>
    </div>
    )
  }
}

// redux providing state takeover
const mapStateToProps = (state) => {
  console.log("App State ->", state);
  return {
    data: state.data.test,
    metodo: state.data.metodo
  }
}
export default connect(mapStateToProps, { getDataRequest, seleccionarMetodo })(App)
