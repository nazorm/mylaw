import React from "react";
import Input from "./Input";
import './App.css'

class Form extends React.Component {
  state = {
  };

 
handleChange =(e)=>{
  if (e.target.type == 'checkbox'){
    this.setState({
      [e.target.name] : e.target.checked
       })
  }else{
    this.setState({
      [e.target.name] : e.target.value
       })
  }
 
}
handleSubmit =(e)=>{
  e.preventDefault()
  alert(JSON.stringify(this.state))
}
  render() {
      const clientDetails = this.props.info.map((d, id)=>{
          return (
              <Input 
               key={id} 
               label = {d.label} 
               type = {d.type} 
               placeholder={d.placeholder}
               name={d.name}
               change = {this.handleChange}
                
                />
          )
      })
     
    return (
      <div className="form-container">
        <h1>{this.props.title}</h1>
        <form onSubmit={this.handleSubmit} >
          {clientDetails}
          <div className = 'btn'>
          <button>Submit</button>
          </div>
          
        </form>
      </div>
    );
  }
}

export default Form;
