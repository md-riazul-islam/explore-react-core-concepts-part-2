import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Users from './Users'

function App() {

  const  handleClick = ()=>{
    alert('btn clicked')
  }
 const handleClick2 = (num)=>{
    alert(num+5)
 }

  return (
    <>
        <Friends></Friends>
        <Users></Users>

        <Counter></Counter>

        <button onClick={handleClick} type="button">click me</button>
        <button onClick={()=>{alert('second click')}} type="button">Click me 2</button>
        <button onClick={()=>{handleClick2(3)}} type="button">third</button>
    </>
  )
}

export default App
