import React from 'react'
import ListItem from './ListItem'
import BasketListItem from './BasketListItem'

class BasketList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const listItems = this.props.items.map((item, i) => (
      <BasketListItem key={i} item={item} />
    ))

    return (
      <div className="flex flex-col items-center border-2 border-pink-500 w-1/2 ">
        {listItems}
      </div>
    )
  }
}

export default BasketList
