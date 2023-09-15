import React, { useState } from "react";
function Welcome()
{
    const [count,setCount]=useState(0);
const increment=()=>
{
    const newCount=count+1;
    setCount(newCount);
}
const decrement=()=>
{
    const newCount=count-1;
    setCount(newCount);
}
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>

    );
}
export default Welcome