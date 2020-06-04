import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Plotter.css';
import * as d3 from 'd3';
import * as functionPlot from 'function-plot';

class Plotter extends Component {
  constructor() {
    super();
    this.graficoConfig = {
      target: '#graph',
      tip: {
        xLine: true,
        yLine: true
      },
      width: 580,
      height: 400,
      grid: true
    };
    this.graphDOM = new React.createRef();
    this.resetearGrafico = this.resetearGrafico.bind(this)
  }


  resetearGrafico() {
    if (this.graphDOM.current) {
      this.graphDOM.current.innerHTML = "";
    }
  }

  generarDiferencial(data) {
    return {
      fnType: 'points',
      graphType: 'polyline',
      points: data.puntos
    }
  }

  generarIntegracion(data) {
    return {
      fn: data.fn,
      range: [data.a, data.b],
      closed: true
    }
  }
  generarScatter(puntos, color) {
    return {
      fnType: 'points',
      points: puntos,
      graphType: 'scatter', 
      color: color
    }
  }

  generarSecundario(data) {
    switch (data.tipo) {
      case 'diferencial':
        return this.generarDiferencial(data);
      case 'integracion':
        return this.generarIntegracion(data);
      default:
        return {};
    }
  }

  generarGrafico(data, otros) {
    let graficoConfig = { ...this.graficoConfig };
    switch (data.tipo) {
      case 'diferencial':
        let t0 = data.puntos[0][0], tf = data.puntos[data.puntos.length - 1][0];
        Object.assign(graficoConfig, {
          xAxis: {label: 't'},
          yAxis: {label: 'x'},
          annotations: [
            { x: t0, text: `t0 = ${t0}`},
            { x: tf, text: `tf = ${tf}`}
          ],
          data: [this.generarDiferencial(data)]
        })
        break;
      case 'integracion':
        let fnData = [this.generarIntegracion(data)];
        if (data.aciertos.length + data.yerros.length <= 15000) { // Pongo el tope en 5000 para que no se ralentize mucho
          fnData.push(this.generarScatter(data.aciertos, 'green'), this.generarScatter(data.yerros, 'red'));
        }
        Object.assign(graficoConfig, {
          title: 'Área ~ ' + data.area,
          xAxis: {domain: [data.a, data.b]},
          yAxis: {domain: [0, data.ymax]},
          annotations: [{ x: data.a, text: `x = ${data.a}`}, { x: data.b, text: `x = ${data.b}`}, { y: data.ymax, text: `y = ${data.ymax}`}],
          data: fnData
        })
        break;
      default:
        break;
    }
    if (otros.length) {
      otros.map(adicional => graficoConfig.data.push(this.generarSecundario(adicional.data)));
    }
    return graficoConfig;
  }

	render() {
    if (this.props.resultado.data !== null) {
      this.resetearGrafico();
      if(this.props.resultado.data !== 'clear') {
        functionPlot(this.generarGrafico(this.props.resultado.data, this.props.otros_graficos));
      }
    }

		return (
		<div className="graph-container">
			<div className="graph-title"><h2>Solución Aproximada </h2></div>
      <span ref={this.graphDOM} id="graph" className="graph"></span>
		</div>
		);
	}
}

const mapStateToProps = (state) => {
  return {
    metodo: state.data.metodo,
    resultado: state.data.resultado,
    temp_grafico: state.data.temp_grafico,
    otros_graficos: state.data.otros_graficos
  }
}
export default connect(mapStateToProps, { })(Plotter)