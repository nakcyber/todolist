import React, { Component } from 'react';

import ItemDetail from "./ItemDetail";

class ItemDesc extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this.onClickDetail = this.onClickDetail.bind(this);
  }

  onClickDetail() {
    if (this.state.showComponent===true) {
      this.setState({
        showComponent: false,
      });
    } else {
      this.setState({
        showComponent: true,
      });
    }
  }

  toggleItem() {
    const { handUpdateItem } = this.props
    if (!this.props.DataItem.description) {
      this.props.DataItem.description = true
    } else {
      this.props.DataItem.description = false
    }
    handUpdateItem(this.props.DataItem);
  }

  delItem() {
    const { handDelItem } = this.props
    handDelItem(this.props.DataItem.id)
  }
  render() {
    const data = this.props.DataItem
    const handUpdateItem = this.props.handUpdateItem
   
    return (
      <li className="task">
        <input
          type="checkbox"
          ref='ItemDone'
          defaultChecked={data.description}
          onChange={() => this.toggleItem()} />
        <label onClick={this.onClickDetail}>{data.title}</label>
        <button onClick={() => this.delItem()}>X</button>
        {
          this.state.showComponent ?
            <ItemDetail 
            dataItem={data}
            handUpdateItem={handUpdateItem}
            ></ItemDetail> : null
        }
      </li>
    )
  }
}

export default ItemDesc
