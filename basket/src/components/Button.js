import React from 'react'

class Button extends React.Component {
  constructor() {
    super()
  }

  // listRole = {this.props.listRole}
  // if listRole === 'stock' => button.type === add
  // if listRole === 'basket' => button.type === remove
  render() {
    return (
      <button className="border-gray-500 border-2 rounded-3xl  ml-2 mr-14 pr-2 pl-2 hover:bg-gray-200">
        {this.props.listRole === 'stock' ? 'add' : 'remove'}
      </button>
    )
  }
}

export default Button
