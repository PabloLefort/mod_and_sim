import React, { Component } from 'react';
import FunctionDataFormField from './FunctionDataFormField/FunctionDataFormField'
class FunctionDataForm extends Component {
  constructor (){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    //data: event.target[0];
    const data = new FormData(event.target);
    // NOTE: you access FormData fields with `data.get(fieldName)`    
    /*const [month, day, year] = data.get('birthdate').split('/');
    const serverDate = `${year}-${month}-${day}`;
    data.set('birthdate', serverDate);
    data.set('username', data.get('username').toUpperCase());*/
    
    this.props.onSubmit(data);
  }
  
  render(){
    return (
        <form className="functionDataForm" onSubmit={this.handleSubmit}>
        { this.props.fields ? this.props.fields.map((item, index) => 
            (<FunctionDataFormField key={index} data={item} />)
          ) : null }
        <input type="submit" value="Ver Solución" />
        </form>
    );
  }
};
export default FunctionDataForm;