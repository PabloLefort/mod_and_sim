import React, { Component } from 'react';
import FunctionDataFormField from './FunctionDataFormField/FunctionDataFormField'
class FunctionDataForm extends Component {
  constructor (){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.errormsg = React.createRef();
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    let invalidFields = event.target.getElementsByClassName('not-valid');
    if (!invalidFields.length) {
      this.errormsg.current.classList.add('hidden');
      this.props.onSubmit(data);
    } else {
      this.errormsg.current.classList.remove('hidden');
    }
  }
  
  render(){
    return (
      <div>
        <form className="functionDataForm" onSubmit={this.handleSubmit}>
        { this.props.fields ? this.props.fields.map((item, index) => 
            (<FunctionDataFormField key={index} data={item} />)
          ) : null }
        <input type="submit" className="button" value="Ver Solución" />
        </form>
        <div ref={this.errormsg} className="functionDataForm__validacion hidden">
          <p className="functionDataForm__validacion-msg">Verifique que los valores ingresados sean correctos.</p>
        </div>
      </div>
    );
  }
};
export default FunctionDataForm;