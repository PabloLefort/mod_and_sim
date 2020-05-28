import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDataRequest, seleccionarMetodo, createPostRequest } from './Actions/data'; 

import './App.css';

import NavMenu from './Components/NavMenu/NavMenu';
import SideMenu from './Components/SideMenu/SideMenu';
import Main from './Components/Main/Main';

class App extends Component {

  componentDidMount() {
    this.props.getDataRequest();
    console.log('testdata:', this.props.data);
  }

  render() {
    return(
      <div className="app">
        <header className="app-header">
          <NavMenu metodo={this.props.metodo} seleccionarMetodo={this.props.seleccionarMetodo.bind(this)}/>
        </header>
        <main className="app-main">
          <aside className="app-main__aside"><SideMenu metodo={this.props.metodo} dibujar={(params)=>this.props.createPostRequest(params)} /></aside>
          <article className="app-main__article"><Main metodo={this.props.metodo} /></article>
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
    metodo: state.data.metodo,
    posts: state.data.posts
  }
}
export default connect(mapStateToProps, { getDataRequest, seleccionarMetodo, createPostRequest })(App)
