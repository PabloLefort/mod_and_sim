import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Plotter.css';
import * as d3 from 'd3';
import * as functionPlot from 'function-plot';

class Plotter extends Component {
  constructor() {
    super();
    this.plotConfig = {
      target: '#quadratic',
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
  }

	render() {
    let result = this.props.resultado;
    let points = [];
    for (let i = 0; i < result.length; i++) {
      points.push([result[i].tn, result[i].xn])
    }
    let plot = { ...this.plotConfig };
    plot.annotations = [];
    plot.data = [{
      fnType: 'points',
      graphType: 'polyline',
      points: points
    }];
    if (points.length) {
      let t0 = points[0][0], tf = points[points.length - 1][0];
      plot.annotations.push({ x: t0, text: `t0 = ${t0}`});
      plot.annotations.push({ x: tf, text: `tf = ${tf}`});
      functionPlot(plot)
    }
		return (
		<div className="graph-container">
			<div className="graph-title"><h2>Solución Aproximada </h2></div>
      <span id="quadratic" className="graph"></span>
		</div>
		);
	}
}

const mapStateToProps = (state) => {
  return {
    metodo: state.data.metodo,
    resultado: state.data.resultado
  }
}
export default connect(mapStateToProps, { })(Plotter)