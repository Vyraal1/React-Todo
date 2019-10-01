import React from "react";

class TodoItem extends React.Component {
  render() {
    return (
      <div
        onClick={e => this.props.toggleItem(this.props.id)}
        className={this.props.completed ? "completed-item" : "item"}
      >
        {this.props.task}
      </div>
    );
  }
}

export default TodoItem;
