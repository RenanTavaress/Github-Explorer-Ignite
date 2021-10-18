import React from "react"
import '../styles/countincrement.scss'

export function CountIncrement(){
   //const [counter, setCounter] = useState(0)

   const repository = () => {
      console.log('repository')
   }

   const starred = () => {
      console.log('starred')
   }

   return (
      <div>
         <h2>Ola</h2>

         <button type="button" onClick={repository}>repository</button>
         <button type="button" onClick={starred}>starred</button>
      </div>
   )
}