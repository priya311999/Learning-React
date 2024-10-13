import React, { useMemo, useState } from 'react'

function HookUseMemo() {
    const [count, setCount] = useState({
        num:1,
        id:"abcd",
      });
     
    const [show, setShow]=useState(false)


    //   useMemo(()=>{},[])      
    const handleChange=useMemo(()=>{
        for (let i = 0; i < 10; i++) {
            
        }
        return count.num * 2
    },[])

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
        
        <button onClick={handleSub}>-</button>
        <span>{count.num}</span>
        {show&&<span>{count.id}</span>}
        <button onClick={handleAdd}>+</button>
        <p>{handleChange}</p>
        <button onClick={()=>setShow(prev=> !prev)}></button>
        </>
      )
}

export default HookUseMemo