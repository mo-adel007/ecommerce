import { createContext, useState } from "react";

export let CounterContext = createContext()  

export default function CounterContextProvider(props) {
    let [count,setCount] = useState(0)

    function changeCount() {
        setCount(Math.random())
    }
    // let x =10
    // let y = 20
    return (
        <CounterContext.Provider value={{count,changeCount}}>
            {props.children}
        </CounterContext.Provider>
    )
}
