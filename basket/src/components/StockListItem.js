import React from 'react'

import RemoveButton from './RemoveButton'
import AddButton from './AddButton'

class StockListItem extends React.Component {
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
        {this.props.listRole === 'stock' ? (
          <AddButton onClick={this.incrementQuantity} />
        ) : (
          <RemoveButton onClick={this.decrementQuantity} />
        )}
        {this.props.item}
      </div>
    )
  }
}

export default StockListItem
