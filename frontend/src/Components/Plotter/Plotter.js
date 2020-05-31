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
      width: 580,
      height: 400,
      grid: true,
      yAxis: {label: 'x',},
      xAxis: {label: 't',},
      data: [],
    };
  }

	render() {
    let result = this.props.resultado;
    let points = [];
    for (let i = 0; i < result.length; i++) {
      points.push([result[i].tn, result[i].xn])
    }
    let plot = { ...this.plotConfig };
    plot.data = [{
      fnType: 'points',
      graphType: 'polyline',
      points: points
    }];
    functionPlot(plot)
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