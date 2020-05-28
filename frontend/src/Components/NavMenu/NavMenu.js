import React, { Component } from 'react';
import './NavMenu.css';
import methods from '../../Config/methods.json';

class NavMenu extends Component {
  render() {
    console.log(this.props.metodo);
    let currentMethod = this.props.metodo;
    let methodKeys = Object.keys(methods);
    return (
      <nav className="nav-menu">
        <div className="app-title"><h1>Plotter - MyS</h1></div>
        {methodKeys ? methodKeys.map((key) => 
          <div key={key}>
            <button className={key === currentMethod ? 'active' : ''} onClick={() => this.props.seleccionarMetodo({ metodo: key })}>{key}</button>
          </div>) : 
          <div class="nav-menu__loading">Loading...</div>
        }
      </nav>);
  }
}
export default NavMenu;