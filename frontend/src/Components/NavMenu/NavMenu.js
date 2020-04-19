import React from 'react';
import { Component } from 'react';
import './NavMenu.css';

class NavMenu extends Component {
  render() {
    return (
      <nav className="nav-menu">
        <div><h1>PLOTTER</h1></div>
        <div><button onClick={() => this.props.seleccionarMetodo({ metodo: 'EULER' })}>Euler</button></div>
        <div><button onClick={() => this.props.seleccionarMetodo({ metodo: 'EULER MEJORADO' })}>Euler Mejorado</button></div>
        <div><button onClick={() => this.props.seleccionarMetodo({ metodo: 'RUNGE-KUTTA' })}>Runge-Kutta</button></div>
        <div><button onClick={() => this.props.seleccionarMetodo({ metodo: 'RECTANGULOS' })}>Rectángulos</button></div>
        <div><button onClick={() => this.props.seleccionarMetodo({ metodo: 'TRAPECIOS' })}>Trapecios</button></div>
        <div><button onClick={() => this.props.seleccionarMetodo({ metodo: 'SIMPSON' })}>Simpson</button></div>
        <div><button onClick={() => this.props.seleccionarMetodo({ metodo: 'MONTECARLO' })}>Montecarlo</button></div>
      </nav>);
  }
}
export default NavMenu;