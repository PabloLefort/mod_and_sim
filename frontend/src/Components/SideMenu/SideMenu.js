import React from 'react';
import './SideMenu.css';

const SideMenu = ({ metodo }) => {
  return (
    <div className="side-menu">
      <div><h2>Método Seleccionado: {metodo}</h2></div>
      <div>Función: <input type="text"></input></div>
      <div>a: <input type="text"></input></div>
      <div>b: <input type="text"></input></div>
    </div>
  );
};

export default SideMenu;