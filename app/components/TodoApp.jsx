var React = require('react');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'walk the hondodog'
        },
        {
          id: 2,
          text: 'clean the yard'
        },
        {
          id: 3,
          text: 'be an adult'
        },
        {
          id: 4,
          text: 'eat food'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    var {todos} = this.state;
    var newTodo = {id: todos.length+1, text: text};

    alert( 'new todo: ' + text);

    todos.push(newTodo);
    this.setState({
      todos: todos
    });
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
