import React from 'react'

import RemoveButton from './RemoveButton'
import AddButton from './AddButton'

class BasketListItem extends React.Component {
  constructor(props) {
    super(props)

    this.incrementQuantity = this.incrementQuantity.bind(this)
  }

  incrementQuantity() {
    this.setState({ quantity: this.state.quantity + 1 })
    console.log(this.state.quantity)
  }

  render() {
    // if listRole === 'stock' => button.type === add
    // if listRole === 'basket' => button.type === remove
    return (
      <div className="flex justify-items-start bg-gray-300 rounded-3xl p-1 w-4/5 m-1">
        <AddButton onClick={this.incrementQuantity} />

        {this.props.item}
      </div>
    )
  }
}

export default BasketListItem
