import React, { useState } from 'react'

function HookUseState() {
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
    
      return (
        <>
        <div>
        <button onClick={handleSub}>-</button>
        <span>{count.num}</span>
        <span>{count.id}</span>
        <button onClick={handleAdd}>+</button>
        </div>
        </>
      )
}

export default HookUseState