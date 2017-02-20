import React, { Component } from 'react';

import ListItem from './ListItem';
import ItemComplete from './ItemComplete';
import AddItem from './AddItem';
class App extends Component {

  constructor(props) {
    super(props)

    if (localStorage.getItem('data')) {
      const localData = JSON.parse(localStorage.getItem('data')) || [];
      this.state = {
        data: localData.data,
      }
    } else {
      this.state = {
        data: [],
      }
    }
  }

  addItem(item) {
    const data_add = {
      "id": this.state.data.length + 1 + (Date.now()),
      "title": item,
      "description": false,
      'date': new Date().toLocaleString()
    }
    this.setState(Object.assign({}, this.state, {
      data: [...this.state.data, data_add]
    }))

    localStorage.setItem('data', JSON.stringify(
      Object.assign({}, this.state, {
        data: [...this.state.data, data_add]
      })
    ))
  }

  onUpdateItem(data_update) {
    const items = this.state.data
    items.forEach((element, index) => {
      if (element.id === items.id) {
        items[index] = data_update;
      }
    });
    localStorage.setItem('data', JSON.stringify(
      Object.assign({}, this.state, {
        data:items
      })
    ))
    this.setState(Object.assign({}, this.state, {
      data:items
    }))
  }

  delItem(data_id) {
    const data = this.state.data
    const del_id = data_id
    const Removed = data.filter(function (el) {
      return el.id !== del_id;
    });

    localStorage.setItem('data', JSON.stringify(
      Object.assign({}, this.state, {
        data: Removed
      })
    ))
    this.setState(Object.assign({}, this.state, {
      data: Removed
    }))
  }

  render() {
    const {data} = this.state
    return (
      <div className="tasker">
        <h2 className='textCenter'>Todolist</h2>
        <div className="error">Please enter a task</div>
        <AddItem
          handAddItem={(data) => this.addItem(data)} />
        <ItemComplete listData={data}></ItemComplete>
        <ListItem
          listData={data}
          handDelItem={(data) => this.delItem(data)}
          handUpdateItem={(data) => this.onUpdateItem(data)}
        ></ListItem>
      </div>
    );
  }
}

export default App;
