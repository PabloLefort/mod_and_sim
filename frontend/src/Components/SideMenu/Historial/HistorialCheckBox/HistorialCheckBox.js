import React, { Component } from 'react';
class HistorialCheckBox extends Component {
  constructor(props) {
    super(props);
    this.value = props.data;
    this.state = {
      isChecked: false
    };
  }
  toggleCheckBox() {
    this.setState({
        isChecked: !this.state.isChecked
    });
    this.handleChange();
  }
  handleChange() {
    this.props.toggleHistory(this.props, !this.state.isChecked);
  }
  render() {
    let name = `[${this.props.description}] - ${this.props.metodo}`;
    return (
        <li onClick={this.toggleCheckBox.bind(this)}>
            <label htmlFor={this.props.token}>
            <input type="checkbox" name={this.props.token} checked={this.state.isChecked} onChange={this.handleChange.bind(this)}></input>{name}
            </label>
        </li>
    );
  }
};
export default HistorialCheckBox