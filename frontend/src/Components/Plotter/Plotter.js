import React, { Component } from 'react';
import './Plotter.css';
import * as d3 from 'd3';
import * as functionPlot from 'function-plot';

class Plotter extends Component {

  componentDidMount() {
  }

	render() {
    functionPlot({
      target: '#quadratic',
      width: 580,
      height: 400,
      grid: true,
      yAxis: {label: 'x',},
      xAxis: {label: 't',},
      data: [{
        fn: 'x^2',
      },{
        fn: '2x',
      },{
        fn: 'x^2 + y^4',
        fnType: 'implicit' //f(x,y)
      },{
        points: [
          [-1, 1],
          [-0.7, 0.4],
          [-0.4, 0.232],
          [-0.1, 0.1763],
          [0.2, 0.1657],
          [0.5, 0.1856],
          [0.8, 0.2413],
          [1.1, 0.3572],
          [1.4, 0.5929],
          [1.7, 1.0909],
          [2, 2.2036],
          [2.3, 4.8479],
          [2.6, 11.538],
          [2.9, 29.5372],
          [3.2, 80.9319],
          [3.5, 236.3213],
          [3.8, 732.5959],
          [4.1, 2402.9147],
          [4.4, 8314.0849],
          [4.7, 30263.2691],
          [5, 115605.6878],
        ],
        fnType: 'points',
        graphType: 'polyline'
      }]
    })
		return (
		<div className="graph-container">
			<div className="graph-title"><h2>Solución Aproximada: <span className="capitalize">{this.props.metodo}</span></h2></div>
      <span id="quadratic" className="graph"></span>
		</div>
		);
	}
}

export default Plotter;