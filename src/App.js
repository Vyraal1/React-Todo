import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

import "./components/TodoComponents/Todo.css";

//dummy data for rendering
//array of objects with task, id (using Date.now), and completed (boolean)
const initialState = {
  tasks: [
    {
      task: "Train up to 87 Slayer",
      id: 69,
      completed: false
    },
    {
      task: "Gain 500k xp a day",
      id: 1337,
      completed: false
    },
    {
      task: "Start the Zulrah boss grind",
      id: 73,
      completed: false
    }
  ]
};

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }
  // design `App` to be the parent component of your application.

  // this component is going to take care of state, and any change handlers you need to work with your state
  // toggles the selected item in the array

  toggleItem = taskID => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === taskID) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    });
  };

  clearCompleted = () => {
    const filteredTasks = this.state.tasks.filter(
      task => task.completed === false
    );

    this.setState({ tasks: filteredTasks });
  };

  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    //set the state to add the new task
    this.setState({ tasks: [...this.state.tasks, newTask] });
    // this.setState({ tasks: [...this.state.tasks, newTask] });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <TodoList tasks={this.state.tasks} toggleItem={this.toggleItem} />
        <TodoForm addTask={this.addTask} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
