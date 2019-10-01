import React from "react";

const initialState = {
  task: ""
};

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  handleSubmit = e => {
    e.preventDefault();
    // this.props.addTask(e.target.value);
    this.props.addTask(this.state.task);
    this.setState(initialState);
  };

  render() {
    return (
      <div className="todo-form">
        <form onSubmit={this.handleSubmit}>
          <input
            name="task"
            onChange={e => {
              this.setState({ task: e.target.value });
            }}
            value={this.state.task}
            type="text"
            placeholder="new task here"
          />
          <button>Add</button>
        </form>
        <button onClick={this.props.clearCompleted}>Clear Completed</button>
      </div>
    );
  }
}

export default TodoForm;
