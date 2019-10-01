import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  render() {
    return (
      <div className="todo-list-container">
        {this.props.tasks.map(task => {
          return (
            <TodoItem
              toggleItem={this.props.toggleItem}
              task={task.task}
              key={task.id}
              id={task.id}
              completed={task.completed}
            />
          );
        })}
      </div>
    );
  }
}

export default TodoList;
