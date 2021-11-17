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
            handleRemoveItem={this.props.handleRemoveItem}
          />
        )
      }
    })

    return (
      <div className="flex flex-col items-center border-2 border-blue-500 w-1/2 ">
        {listItems}
      </div>
    )
  }
}

export default BasketList
