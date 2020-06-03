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
      yAxis: {label: 'x',},
      xAxis: {label: 't',},
      data: [],
      annotations: [],
    };
    this.graphDOM = new React.createRef();
    this.resetearGrafico = this.resetearGrafico.bind(this)
  }

  nuevoPloteo(data) {
    let puntos = [];
    for (let i = 0; i < data.length; i++) {
      puntos.push([data[i].tn, data[i].xn])
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
    plot.annotations = [];
    plot.data = [this.nuevoPloteo(this.props.resultado.data)];
    otros.map(adicional => plot.data.push(this.nuevoPloteo(adicional.data)));
    if (this.props.resultado.data.length) {
      //let t0 = points[0][0], tf = points[points.length - 1][0];
      //plot.annotations.push({ x: t0, text: `t0 = ${t0}`});
      //plot.annotations.push({ x: tf, text: `tf = ${tf}`});
      functionPlot(plot)
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