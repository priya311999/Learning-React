import React, { useEffect, useState } from 'react'

function HookUseEffect() {
    const [count, setCount] = useState({
        num:1,
        id:"abcd",
      });
      const handleAdd=()=>{
        setCount((prev)=> {
          return{
            ...prev,
            num: prev.num+1
          }
        })
      }
      const handleSub=()=>{
        setCount((prev)=>{
          return{
            ...prev,
            num: prev.num-1
          }
        })
      }

const [screenWidth, setScreenWidth]= useState(window.innerWidth)
    
useEffect(()=>{
    window.addEventListener('resize', ()=>{
        setScreenWidth(window.innerWidth)
    }) 

    return ()=>{
        window.removeEventListener()
    }
},[count])


      return (
        <>
        <div>
        <button onClick={handleSub}>-</button>
        <span>{count.num}</span>
        <span>{count.id}</span>
        <button onClick={handleAdd}>+</button>
        <p>{screenWidth}</p>
        </div>
        </>
      )
}

export default HookUseEffect