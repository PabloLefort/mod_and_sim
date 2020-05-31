import React, { Component } from 'react';
class FunctionDataFormField extends Component {
  constructor (){
    super();
    this.state = {
      value: '',
      disabled: true,
    };
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render() {
    let className = 'functionDataForm__input';
    if (this.state.disabled) {
      className += ' disabled';
    }
    return (
      <div><label>
        {this.props.data.label}
          {this.props.data.type === 'select' ? (
            <select className={className}>
              {this.props.data.options.map((option, index) => <option key={index} value={option.value}>{option.text}</option>)}
            </select>
          ) : <input className={className} type={this.props.data.type} name={this.props.data.descriptor} value={this.state.value} onChange={this.handleChange.bind(this)} /> 
          }
          
        </label></div>
    );
  }
};
export default FunctionDataFormField