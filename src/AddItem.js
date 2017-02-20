import React, { Component } from 'react';

class itemadd extends Component {

  ActionAddIitem() {
    if (this.refs.textinput.value) {
      const { handAddItem } = this.props
      handAddItem(this.refs.textinput.value)
      this.refs.textinput.value = ""
    }
  }
  render() {
    return (
      <div className="tasker-header">
        <input type='text' ref='textinput' placeholder="Enter a task" />
        <button onClick={() => this.ActionAddIitem()}>+</button>
      </div>
    )
  }
}

export default itemadd
