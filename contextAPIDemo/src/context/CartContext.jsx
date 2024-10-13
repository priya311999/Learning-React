import { createContext } from "react";
import { useState } from "react";
const cartContext = createContext(null)

export const cartProvider=(props)=>{
    const [items,useItems] = useState([])
    return(
    <cartContext.Provider value={{items,useItems}}>
        {props.children}
    </cartContext.Provider>
    )
}