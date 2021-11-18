import Header from './components/Header'
import './App.css'
import BasketList from './components/BasketList'
import StockList from './components/StockList'
import listData from './listData'
import React from 'react'
import ClearButton from './components/ClearButton'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      items: listData,
      stockItems: listData,
    }
    this.handleAddItem = this.handleAddItem.bind(this)
    this.handleRemoveItem = this.handleRemoveItem.bind(this)
    this.handleClear = this.handleClear.bind(this)
  }

  handleClear() {
    this.setState({
      items: listData,
    })
  }

  handleAddItem(id) {
    console.log(id)
    this.setState((prevState) => {
      const updatedItems = prevState.items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          }
        }
        return item
      })
      return {
        items: updatedItems,
      }
    })
    console.log(this.state)
  }

  handleRemoveItem(id) {
    console.log(id)
    this.setState((prevState) => {
      const updatedItems = prevState.items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          }
        }
        return item
      })
      return {
        items: updatedItems,
      }
    })
    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="flex">
          <StockList
            stockItems={this.state.stockItems}
            handleAddItem={this.handleAddItem}
          />
          <BasketList
            items={this.state.items}
            handleRemoveItem={this.handleRemoveItem}
          />
        </div>
        <ClearButton handleClear={this.handleClear} />
      </div>
    )
  }
}

export default App
