import React from 'react'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="bg-yellow-600 h-24 align-middle text-5xl font-semibold text-white mb-6">
        <h1> Basquette </h1>
      </div>
    )
  }
}

export default Header
