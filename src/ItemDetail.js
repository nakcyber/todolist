import React, { Component } from 'react';

class ItemDetail extends Component {
  editItem() {
    if (this.refs.inputTitle.value && this.refs.inputTitle.value !== " ") {
      if (this.refs.inputTitle.value !== this.props.dataItem.title) {
        this.props.dataItem.title = this.refs.inputTitle.value
        const { handUpdateItem } = this.props
        handUpdateItem(this.props.DataItem)
      }
    } else {
      alert('กรุณาใส่ข้อมูลให้ครบ')
      this.refs.inputTitle.value = this.props.dataItem.title
    }
  }
  render() {
    const data = this.props.dataItem;
    return (
      <div className='item-detail'>
        <div className="tasker-header">
          <label>title:</label>
          <input className='input-edit'
            type='text' ref='inputTitle'
            defaultValue={data.title} />
        </div>
        <div className="tasker-header">
          Status:{data.description === true ? "Complete" : "Uncomplete"}
        </div>
        <div className="tasker-header">
          Date : {data.date}
        </div>
        <div className="tasker-header">
          <div className='button-save' onClick={() => this.editItem()} >save</div>
        </div>
      </div>
    )
  }
}
export default ItemDetail
