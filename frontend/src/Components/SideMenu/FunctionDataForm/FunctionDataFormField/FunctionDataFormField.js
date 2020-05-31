import React, { Component } from 'react';
class FunctionDataFormField extends Component {
  constructor (){
    super();
    this.state = {
      value: '',
      disabled: true,
    };
  }
  handleSelect(event) {
    document.getElementsByName(this.props.data.linked)[0].previousSibling.innerText = event.target.value;
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