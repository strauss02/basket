import React from 'react'

class ClearButton extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <button
        onClick={() => this.props.handleClear()}
        className="text-xl w-24 bg-red-300"
      >
        {' '}
        Clear{' '}
      </button>
    )
  }
}

export default ClearButton
