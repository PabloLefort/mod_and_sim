import React, { Component } from 'react';
import { connect } from 'react-redux';
import FunctionDataForm from './FunctionDataForm/FunctionDataForm';
import './SideMenu.css';
import methods from '../../Config/methods.json';
import { aplicarMetodo } from '../../Actions/data'; 


class SideMenu extends Component {
  onSubmit(data) {
    this.props.aplicarMetodo({ parametros: data, metodo: this.props.metodo } );
  }
  render(){
    let menuFields = methods[this.props.metodo];
    return (
      <div className="side-menu">
        <div><h2>Método Seleccionado: {this.props.metodo}</h2></div>
        <FunctionDataForm fields={menuFields} onSubmit={this.onSubmit.bind(this)}></FunctionDataForm>
      </div>
    );
  }
};
// redux providing state takeover
const mapStateToProps = (state) => {
  return {
    metodo: state.data.metodo
  }
}
export default connect(mapStateToProps, { aplicarMetodo })(SideMenu)