import Header from './components/Header'
import './App.css'
import BasketList from './components/BasketList'
import StockList from './components/StockList'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex">
        <StockList items={['juju', 'lala', 'samba']} />
        <BasketList items={['ahla']} />
      </div>
    </div>
  )
}

export default App
