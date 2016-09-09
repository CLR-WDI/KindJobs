import React from "react";
import ReactDOM from 'react-dom'
import {connect} from "react-redux"

import {fetchTodos, addTodo, deleteTodo, updateTodo} from "../actions/todoActions"


import Footer from "./Footer";
import Header from "./Header";

@connect((store) => {
  return{
    // fetchTodos: store.todos.fetchTodos,
    // updateTodo: store.todos.updateTodo,
    // addTodo: store.todos.addTodo,
    todos: store.todos.todos,
    // deleteTodo: store.todos.deleteTodo,
    selection: store.selection.selection,
  }
})

export default class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchTodos())
  }

  fetchTodos(){
    this.props.dispatch(fetchTodos())
  }

  addTodo(e){
    e.preventDefault()
    let text = this.refs.post.value;
    if (text.length !==0) {
      let id = Date.now();
      let isComplete = false
      this.props.dispatch(addTodo(id,text, isComplete))
      this.refs.post.form.reset();
    }
  }

  deleteTodo(e){
    this.props.dispatch(deleteTodo(parseInt(e.target.id)))
  }

  makeEdit(e){
    let todoId = e.target.id
    var editForm = <EditForm otherProps={this.props} id={todoId}/>
    ReactDOM.render(editForm, document.getElementById(todoId))
  }

  updateComplete(e){
    const updateId = parseInt(e.target.className)
    const todoToUpdate =  this.props.todos.findIndex(todo =>todo.id === updateId)
    const updateText = this.props.todos[todoToUpdate].text
    this.props.dispatch(updateTodo(updateId, updateText, e.target.checked))
  }

  showTodo(todo) {
    if (todo.isComplete) {
      return (<div id={todo.id} style={{display: "inline-block", textDecoration:"line-through"}}>{todo.text}</div>)
    }else{
      return(<div id={todo.id} style={{display: "inline-block"}}>{todo.text}</div>)
    }

  }

  render() {
    const{selection, todos} = this.props;
    let filteredTodos = todos;
    if (selection === "All") {
      filteredTodos = todos
    }else if (selection === "Active") {
      filteredTodos = todos.filter(todo => todo.isComplete === false)
    }else if (selection === "Done") {
      filteredTodos = todos.filter(todo => todo.isComplete === true)
    }
    const mappedTodos = filteredTodos.map(todo =>
                      <li key={todo.id} onClick={this.makeEdit.bind(this)}>
                        <input type="checkbox" className={todo.id} onClick={this.updateComplete.bind(this)}
                        defaultChecked={todo.isComplete}/>
                        {this.showTodo(todo)}
                        <button onClick={this.deleteTodo.bind(this)} id={todo.id}>Delete</button>
                      </li>)
    return (
      <div id="postTodo">
        <h1>
          You gotta do it do it!
        </h1>
          <form className="commentForm" onSubmit={this.addTodo.bind(this)}>
            <input type="text" ref="post" placeholder="Your task"/>
            <input type="submit" value="post"/>
          </form>
          <ul>{mappedTodos}</ul>

      </div>
    );
  }
}

class EditForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  updateTodo(e){
    e.preventDefault();
    const todoId = parseInt(this.props.id)
    this.props.otherProps.dispatch((updateTodo(todoId, this.refs.post.value)))
  }

  render() {
    console.log(this.props.otherProps.todos);
    const todoId = parseInt(this.props.id)
    const todoPlaceholderID= this.props.otherProps.todos.findIndex(todo => todo.id === todoId)

    const placeholderText = this.props.otherProps.todos[todoPlaceholderID].text;

    return(
      <div>
        <form className="commentForm" onSubmit={this.updateTodo.bind(this)}>
          <input type="text" ref="post" defaultValue={placeholderText}/>
          <input type="submit" value="post"/>
        </form>
      </div>
    )
  }
}
