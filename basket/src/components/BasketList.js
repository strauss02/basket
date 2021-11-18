import React from 'react'
import BasketListItem from './BasketListItem'

class BasketList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const listItems = this.props.items.map((item) => {
      if (item.quantity < 1) {
        return ''
      } else {
        return (
          <BasketListItem
            key={item.id}
            id={item.id}
            item={item.item}
            quantity={item.quantity}
            handleRemoveItem={this.props.handleRemoveItem}
          />
        )
      }
    })

    return (
      <div className="flex flex-col items-center  w-1/2 ">
        <h1 className="border-b-2 w-4/6 border-yellow-500 mb-3">
          Your Basquette:
        </h1>
        {listItems}
      </div>
    )
  }
}

export default BasketList
