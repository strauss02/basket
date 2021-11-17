import React from 'react'
import ListItem from './ListItem'

class List extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const listItems = this.props.items.map((item, i) => (
      <ListItem key={i} item={item} listRole={this.props.listRole} />
    ))

    return (
      <div className="flex flex-col items-center border-2 border-pink-500 w-1/2 ">
        {listItems}
      </div>
    )
  }
}

export default List
