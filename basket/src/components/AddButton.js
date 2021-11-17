import React from 'react'

class AddButton extends React.Component {
  constructor(props) {
    super(props)
    this.onClick = props.onClick
  }

  render() {
    return (
      <button
        onClick={this.onClick}
        className="border-gray-500 border-2 rounded-3xl  ml-2 mr-14 pr-2 pl-2 hover:bg-gray-200"
      >
        Add
      </button>
    )
  }
}

export default AddButton
