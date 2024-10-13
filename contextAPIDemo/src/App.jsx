
import './App.css'
import Cart from './components/Cart'
import Items from './components/Items'

function App() {

  return (
    <div className="App">
      <Items name="MacBook Pro" price={100000}/>
      <Items name="PenDrive" price={1000}/>
      <Items name="Mobile" price={33000}/>
      <Cart/>
    </div>
  )
}

export default App
