import React, { Component } from 'react';
import { connect } from 'react-redux';
import { seleccionarMetodo } from '../../Actions/data';
import './NavMenu.css';
import methods from '../../Config/methods.json';

class NavMenu extends Component {
  constructor() {
    super();
    this.methodKeys = Object.keys(methods);
  }
  render() {
    
    return (
      <nav className="nav-menu">
        <div className="app-title"><h1>Plotter - MyS</h1></div>
        {this.methodKeys ? this.methodKeys.map((key) => 
          <div key={key}>
            <button className={key === this.props.metodo ? 'active' : ''} onClick={() => this.props.seleccionarMetodo({ metodo: key })}>{key}</button>
          </div>) : 
          <div class="nav-menu__loading">Loading...</div>
        }
      </nav>);
  }
}

const mapStateToProps = (state) => {
  return {
    metodo: state.data.metodo
  }
}

export default connect(mapStateToProps, { seleccionarMetodo })(NavMenu)