import React, { Component } from 'react';
import './App.css';

import NavMenu from './Components/NavMenu/NavMenu';
import SideMenu from './Components/SideMenu/SideMenu';
import Main from './Components/Main/Main';

import { random } from 'mathjs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      loading: true
    };
  }
  componentDidMount() {
   window.randoms = random([10000000]);
   this.setState({
    loading: false
  })
  }
  render() {
    return (
      <div className="app">
        {this.state.loading ? <div className="loader"></div> : <React.Fragment><header className="app-header">
          <NavMenu />
        </header>
        <main className="app-main">
          <aside className="app-main__aside"><SideMenu /></aside>
          <article className="app-main__article"><Main /></article>
        </main>
      </React.Fragment>}
      </div>
    )
  }
}

export default App
