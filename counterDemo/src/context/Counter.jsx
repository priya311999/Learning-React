import { createContext, useState } from "react";

//step1 - creating context
export const CounterContext = createContext(null);

export const CounterProvider = (props)=>{
    //step3 - creating state
    const [count, setCount] = useState(5)
    return(
        //step2 - wrapping components in counter provider
        <CounterContext.Provider value={{count, setCount}}>
            {props.children}
        </CounterContext.Provider>
    )

}

 