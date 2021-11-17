import React from 'react'

class RemoveButton extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = props.onClick
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
        className="border-gray-500 border-2 rounded-3xl  ml-2 mr-14 pr-2 pl-2 hover:bg-gray-200"
      >
        Remove
      </button>
    )
  }
}

export default RemoveButton
