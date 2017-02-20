import React, { Component } from 'react';

class ItemComplete extends Component {
    render() {
        var sum = 0;
        this.props.listData.forEach((element, index) => {
            if (element.description === true) {
                sum++;
            }
        });
        return (
            <div className="text-complete textLeft">
                {sum}  Complete
            </div>
        )
    }
}

export default ItemComplete
