import React, { Component } from 'react';
import '../Add_Delete.css';

class Add_Delete extends Component {

  constructor(props) {
    super(props)

    this.state = {
      text: '',
      todos: ['1']
    }
  }

  componentWillMount() {
    const TODOS = localStorage.getItem("todos");
    if(TODOS) {
      this.setState({
        todos: JSON.parse(TODOS)
      })
    }
  }

  _renderTodos = () => {
    const TODOS = this.state.todos;

    return TODOS.map((todo, i) => {

        return (

            <div className="todo" key={i}>
              <p className="m-0">{todo}</p>
              <button className="btn btn-danger btn-sm ml-auto" onClick={() => this._removeElement(i)}>Eliminar</button>
            </div>

        )

    })
  }

  _addTodo = () => {

    if(!this.state.text.length) return;

    this.setState({
      todos: this.state.todos.concat(this.state.text),
      text: ''
    }, () => { // callback
      localStorage.setItem("todos", JSON.stringify(this.state.todos))  
    })    
  }

  _removeElement = (i) => {
      if(window.confirm("¿Desea eliminar este elemento?")) {
        let newList = this.state.todos.splice(i,1);
        //console.log(newList);
        delete this.state.todos.newList;
        this.setState({
            todos:this.state.todos
        }, () => { // callback
            localStorage.setItem("todos", JSON.stringify(this.state.todos))  
        }) 
        
      }
  }

  render() {
    return (
      <div className="container">
        
        <div className="d-flex mt-5">
          <input
            className="search form-control"
            placeholder="introducer aqui tu frase"
            value={this.state.text}
            onChange={(e) => this.setState({text: e.target.value})}
          />
          <button className="btn btn-primary btn-add ml-auto" onClick={() => this._addTodo()}>Añadir</button>
        </div>

        <div className="mt-3">
          {this._renderTodos()}
        </div>

      </div>
    )
  }

}

export default Add_Delete