import React, { Component } from 'react';
import { connect } from 'react-redux';
import './InfoPanel.css';

class InfoPanel extends Component {
  render(){
    const resultado = this.props.resultado;
    return (
      <div className="info-panel">
      <h3>InfoPanel</h3>
      <div className="info-panel__box">
        <table className="info-panel__table" cellSpacing="0">
          <thead>
          <tr>
            <th>N</th>
            <th>T<sub>n</sub></th>
            <th>X<sub>n</sub></th>
          </tr>
          </thead>
          <tbody>
            {resultado ? resultado.map((row, i) => 
            <tr key={i}>
              <td>{i}</td>
              <td>{row.tn}</td>
              <td>{row.xn}</td>
            </tr>
            ) : null }
          </tbody>
          </table>
      </div>
    </div>
  );
  }
};

const mapStateToProps = (state) => {
  return {
    resultado: state.data.resultado
  }
}
export default connect(mapStateToProps, { })(InfoPanel)