import React, { Component } from 'react';

import ItemDesc from "./ItemDesc";

class ListItem extends Component {
  render() {
    
    const dataItem = this.props.listData
    const handUpdateItem = this.props.handUpdateItem
    const handDelItem = this.props.handDelItem
    
    return (
      <div className="tasker-body">
        <ul >
        {
          dataItem.map((value, i) =>
            <ItemDesc
              handUpdateItem={handUpdateItem}
              handDelItem={handDelItem}
              key={value.id}
              DataItem={value} >
            </ItemDesc>
          )
        }
        </ul>
      </div>
    )
  }
}

export default ListItem
