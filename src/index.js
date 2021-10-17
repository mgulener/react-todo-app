import 'bootstrap';
import './styles/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';

function TodoApp() {
  const [todos, setTodos] = React.useState([]);
  const [input, setInput] = React.useState('');
  const [id, setId] = React.useState(0);

  const addTodo = () => {
    setTodos((todos) => todos.concat({ text: input, id: id }) );
    setInput('');
    setId(id + 1);
    console.log(id);
    console.log(todos);
  }

  const removeTodo = (id) => setTodos((todos) => todos.filter((todo) => todo.id !== id))

  return (
    <div className="container">
      <div className="form">
        <div className="btn-group">
          <input
            type = 'text'
            value = {input}
            onChange = {(e) => setInput(e.target.value)}
          />

          <button 
            onClick={addTodo}
            className="btn btn-primary"
          >
            Add Todo
          </button>
        </div>
      </div>

      <table className={todos.length ? "table table-striped table-bordered" : "d-none"}>
        <thead className="thead-dark">
          <tr>
            <th>Value</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
        {todos.map(({text, id}) => (
          <tr key={id}>
            <td>{text}</td>
            <td><button className="btn btn-danger btn-sm" onClick={() => removeTodo(id)}>x</button></td>
          </tr>
        ))}
        </tbody>
      </table>
      
    </div>
  )
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));