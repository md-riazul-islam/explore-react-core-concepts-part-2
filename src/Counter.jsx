import { useState } from "react"

export default function Counter (){
    const[count, setCount] = useState(0);
    const handleAdd = ()=>{
        const newCount = count + 1;
        setCount(newCount)
    }
    const handleRemove =() =>{
        const remove = count - 1;
        setCount(remove);
    }
    return (
        <div>
            <h3>Count : {count} </h3>
            <button onClick={handleAdd}  type="button">Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}