import React, { Component } from 'react';

import './App.css';

import NavMenu from './Components/NavMenu/NavMenu';
import SideMenu from './Components/SideMenu/SideMenu';
import Main from './Components/Main/Main';

class App extends Component {
  render() {
    return(
      <div className="app">
        <header className="app-header">
          <NavMenu />
        </header>
        <main className="app-main">
          <aside className="app-main__aside"><SideMenu /></aside>
          <article className="app-main__article"><Main /></article>
        </main>
    </div>
    )
  }
}

export default App
