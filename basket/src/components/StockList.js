import React from 'react'
import ListItem from './ListItem'
import StockListItem from './StockListItem'

class StockList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const listItems = this.props.items.map((item, i) => (
      <StockListItem key={i} item={item} />
    ))

    return (
      <div className="flex flex-col items-center border-2 border-pink-500 w-1/2 ">
        {listItems}
      </div>
    )
  }
}

export default StockList
