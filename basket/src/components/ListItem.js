import React from 'react'

import Button from './Button'
import RemoveButton from './RemoveButton'
import AddButton from './AddButton'

class ListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: 0,
    }
    this.incrementQuantity = this.incrementQuantity.bind(this)
    this.decrementQuantity = this.decrementQuantity.bind(this)
  }

  incrementQuantity() {
    this.setState({ quantity: this.state.quantity + 1 })
    console.log(this.state.quantity)
  }

  decrementQuantity() {
    this.setState({ quantity: this.state.quantity - 1 })
    console.log(this.state.quantity)
    console.log(this.props)
  }

  render() {
    // if listRole === 'stock' => button.type === add
    // if listRole === 'basket' => button.type === remove
    if (this.state.quantity < 0 && this.props.listRole === 'basket') {
      return ''
    } else {
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
}

export default ListItem
