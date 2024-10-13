import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 0

  const increaseValue = ()=>{
    counter=counter+1;
    setCounter(counter)
    console.log("clicked", counter);
  }
  const decreaseValue = ()=>{
    counter=counter-1;
    setCounter(counter)
    console.log("clicked", counter);
  }

  return (
    <>
      <h1> Learning React</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={increaseValue}
      >Increase Value</button>
      <br />
      <button
      onClick={decreaseValue}
      >Decrease Value</button>
    </>
  )
}

export default App
