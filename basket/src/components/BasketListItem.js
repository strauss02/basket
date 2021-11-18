import React from 'react'

import RemoveButton from './RemoveButton'

class BasketListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: 0,
    }
    this.decrementQuantity = this.decrementQuantity.bind(this)
  }

  decrementQuantity() {
    this.setState({ quantity: this.state.quantity - 1 })
    console.log(this.state.quantity)
    console.log(this.props)
  }

  render() {
    // if listRole === 'stock' => button.type === add
    // if listRole === 'basket' => button.type === remove
    return (
      <div className="flex justify-items-start bg-gray-300 rounded-3xl p-1 w-4/5 m-1">
        <RemoveButton
          handleRemoveItem={this.props.handleRemoveItem}
          itemId={this.props.id}
        />

        {this.props.item}
        {` X${this.props.quantity}`}
      </div>
    )
  }
}

export default BasketListItem
