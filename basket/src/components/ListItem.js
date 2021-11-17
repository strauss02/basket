import React from 'react'

import Button from './Button'

class ListItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    // if listRole === 'stock' => button.type === add
    // if listRole === 'basket' => button.type === remove
    return (
      <div className="flex justify-items-start bg-gray-300 rounded-3xl p-1 w-4/5 m-1">
        <Button listRole={this.props.listRole} />
        {this.props.item}
      </div>
    )
  }
}

export default ListItem
