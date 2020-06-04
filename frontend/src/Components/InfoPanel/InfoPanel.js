import React, { Component } from 'react';
import { connect } from 'react-redux';
import './InfoPanel.css';

class InfoPanel extends Component {
  render() {
    const resultado = this.props.resultado.data;
    return (
      <div className="info-panel">
        {resultado && resultado.puntos ?
          <React.Fragment>
            <h3>Tabla de Valores</h3>
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
                  {resultado.puntos.map((row, i) =>
                    <tr key={i}>
                      <td>{i}</td>
                      <td>{parseFloat(row[0]).toFixed(3)}</td>
                      <td>{parseFloat(row[1]).toFixed(3)}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </React.Fragment> : null}

      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    resultado: state.data.resultado
  }
}
export default connect(mapStateToProps, {})(InfoPanel)