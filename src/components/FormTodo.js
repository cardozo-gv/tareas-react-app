import React, { Component } from 'react';

class FormTodo extends Component{

  constructor(){
    super();
    this.state = {
      title:'',
      responsible:'',
      description:'',
      priority:'low'
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e){
    const {name,value} = e.target;

    this.setState({
      [name]:value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onAddTodo(this.state);

  }

  render(){
    return(
      <div className="card">
        <form className="card-body" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text"
                   name="title"
                   onChange={this.handleInput}
                   className="form-control"
                   placeholder="Title"/>
          </div>
          <div className="form-group">
            <input type="text"
                   name="responsible"
                   className="form-control"
                   placeholder="Responsible"
                   onChange={this.handleInput}/>
          </div>
          <div className="form-group">
            <input type="text"
                   name="description"
                   className="form-control"
                   placeholder="Description"
                   onChange={this.handleInput}/>
          </div>
          <div className="form-group">
            <select name="priority"
                    className="form-control"
                    onChange={this.handleInput}>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>

          <button type="submit" className="btn btn-primary mt-4">Save</button>


          </div>
        </form>
      </div>
    )
  }

}

export default FormTodo;
