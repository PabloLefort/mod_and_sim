import React, { Component } from 'react';
class FunctionDataFormField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      valid: !props.data.validation ? true : false // Si no tiene regex string de validación, es válido por defecto
    };
  }
  handleSelect(event) {
    document.getElementsByName(this.props.data.linked)[0].previousSibling.innerText = event.target.value;
  }
  isValid(val) {
    const regexp = new RegExp(this.props.data.validation);
    return regexp.test(val);
  }
  handleChange(event) {
    this.setState({
      value: event.target.value,
      valid: this.isValid(event.target.value)
    });
  }
  render() {
    let className = 'functionDataForm__input';
    if (!this.state.valid) {
      className += ' not-valid';
    }
    if (!this.state.value) {
      className += ' empty';
    }
    return (
      <div><label>
        <span>{this.props.data.label}</span> 
          {this.props.data.type === 'select' ? (
            <select className={className} name={this.props.data.descriptor} onChange={this.handleSelect.bind(this)}>
              {this.props.data.options.map((option, index) => <option key={index} value={option.value}>{option.text}</option>)}
            </select>
          ) : <input className={className} type={this.props.data.type} name={this.props.data.descriptor} value={this.state.value} onChange={this.handleChange.bind(this)} /> 
          }
          
        </label></div>
    );
  }
};
export default FunctionDataFormField