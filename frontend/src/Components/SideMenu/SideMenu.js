import React, { Component } from 'react';
import './SideMenu.css';
import methods from '../../Config/methods.json';

class SideMenu extends Component {
  render(){
    let menuFields = methods[this.props.metodo];
    console.log(menuFields);
    // debugger;
    return (
      <div className="side-menu">
        <div><h2>Método Seleccionado: {this.props.metodo}</h2></div>
        { menuFields ? menuFields.map((item, index) => 
          (<div key={index}>{item.label} <input type={item.type}></input></div>)
        ) : null }
        <div><button className="dibujar" onClick={this.props.dibujar({ post: 'test' })}>Dibujar</button></div>
      </div>
    );
  }
};

export default SideMenu;