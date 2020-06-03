import React, { Component } from 'react';
import { connect } from 'react-redux';
import HistorialCheckBox from './HistorialCheckBox/HistorialCheckBox'
import { conmutarGrafico } from '../../../Actions/data';
class Historial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            historial: []
        }
    };

    toggleHistory(data, mostrar) {
        console.log(data, mostrar);
        // dispatch para actualizar resultado
        this.props.conmutarGrafico({ grafico: { data: data, mostrar: mostrar }});
    }
    componentWillReceiveProps(nextProps) {
        let nuevoHistorial = this.state.historial;
        // Verificar si no existe ya, ¿y si existe pisa el anterior?
        const encontrado = nuevoHistorial.findIndex(elem => {
            return elem.token === nextProps.resultado.token
        });
        if (encontrado >= 0) {
            nuevoHistorial.splice(encontrado, 1);
        }
        nuevoHistorial.unshift(nextProps.resultado);
        this.setState({
            historial: nuevoHistorial
        });
    }

	render() {
        return (<div className="historial">
            <h4 className="historial__titulo">Historial:</h4>
            <ul className="historial__lista">
                {this.state.historial.slice(1).map((resultado, index) => <HistorialCheckBox key={index} toggleHistory={this.toggleHistory.bind(this)} {...resultado} ></HistorialCheckBox>)}
            </ul>
        </div>);
	}
}

const mapStateToProps = (state) => {
  return {
    resultado: state.data.resultado
  }
}
export default connect(mapStateToProps, { conmutarGrafico })(Historial)