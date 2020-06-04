import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Plotter.css';
import * as d3 from 'd3';
import * as functionPlot from 'function-plot';

class Plotter extends Component {
  constructor() {
    super();
    this.plotConfig = {
      target: '#graph',
      tip: {
        xLine: true,    // dashed line parallel to y = 0
        yLine: true,    // dashed line parallel to x = 0
      },
      width: 580,
      height: 400,
      grid: false,
      data: [],
      annotations: [],
    };
    this.graphDOM = new React.createRef();
    this.resetearGrafico = this.resetearGrafico.bind(this)
  }

  nuevoPloteo(data) {
    let puntos = [];
    for (let i = 0; i < data.length; i++) {
      puntos.push([data[i][0], data[i][1]]);
    }
    return {
      fnType: 'points',
      graphType: 'polyline',
      points: puntos
    }
  }

  resetearGrafico() {
    if (this.graphDOM.current) {
      this.graphDOM.current.innerHTML = "";
    }
  }
  

	render() {
    this.resetearGrafico();
    let otros = this.props.otros_graficos;

    let plot = { ...this.plotConfig };
    if (this.props.resultado.data.tipo === 'integracion') {
      let integracion = this.props.resultado.data;
      let data = [{
        fn: integracion.fn,
        range: [integracion.a, integracion.b],
        closed: true
      }];
      plot.annotations.push({ x: integracion.a, text: `x = ${integracion.a}`});
      plot.annotations.push({ x: integracion.b, text: `x = ${integracion.b}`});
      plot.annotations.push({ y: integracion.ymax, text: `y = ${integracion.ymax}`});
      if (integracion.aciertos.length + integracion.yerros.length <= 5000) {
        data.push({
          points: integracion.aciertos,
          fnType: 'points',
          graphType: 'scatter', color: 'green'
        });
        data.push({
          points: integracion.yerros,
          fnType: 'points',
          graphType: 'scatter', color: 'red'
        });
      }
      otros.map(adicional => data.push(this.nuevoPloteo(adicional.data.puntos)));
      Object.assign(plot, {
        title: 'Área Aproximada: ' + integracion.area,
        xAxis: {domain: [integracion.a, integracion.b]},
        data: data
      });
      functionPlot(plot)
    } else {
      let data = [this.nuevoPloteo(this.props.resultado.data.puntos)];
      otros.map(adicional => data.push(this.nuevoPloteo(adicional.data.puntos)));
      Object.assign(plot, {
        data: data,
        yAxis: {label: 'x',},
        xAxis: {label: 't',},
      });
      if (this.props.resultado.data.puntos.length) {
        //let t0 = points[0][0], tf = points[points.length - 1][0];
        //plot.annotations.push({ x: t0, text: `t0 = ${t0}`});
        //plot.annotations.push({ x: tf, text: `tf = ${tf}`});
        functionPlot(plot)
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