import Header from './components/Header'
import './App.css'
import BasketList from './components/BasketList'
import StockList from './components/StockList'
import listData from './listData'
import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      items: listData,
      stockItems: listData,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleAddItem = this.handleAddItem.bind(this)
    this.handleRemoveItem = this.handleRemoveItem.bind(this)
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

  handleChange(id) {
    console.log(id)
    this.setState((prevState) => {
      const updatedItems = prevState.items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: 5,
          }
        }
        return item
      })
      return {
        items: updatedItems,
      }
    })
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
      </div>
    )
  }
}

export default App
