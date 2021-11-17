import logo from './logo.svg'
import Header from './components/Header'
import './App.css'
import ListItem from './components/ListItem'
import List from './components/List'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex">
        <List listRole={'stock'} items={['juju', 'lala', 'samba']} />
        <List listRole={'basket'} items={['ahla']} />
      </div>
    </div>
  )
}

export default App
