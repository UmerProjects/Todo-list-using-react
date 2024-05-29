import { useState } from "react"

export default function Counter() {

    let [count, setCount ] = useState(0);

    let incVal = () => {
        setCount((currVal) => {
            return currVal + 1;
        })
        setCount((currVal) => {
            return currVal + 1;
        })
        setCount((currVal) => {
            return currVal + 1;
        })
    }

    return(
        <div>
            <h3>count = {count}</h3>
            <button onClick={incVal}>Increase Count</button>
        </div>
    )
}