import Item from './components/item'
import Cart from './components/Cart'



function App() {

  return (
    <div className='App'>
      <Item name = "MackBook Pro" price={100000}/>
      <Item name = "PenDrive" price={4000}/>
      <Item name = "Mobile" price={60000}/>
      <Item name = "Charger" price={500}/>
      <Cart/>
   
    </div>
  )
}

export default App
