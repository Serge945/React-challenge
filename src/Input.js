import React from 'react'
import colornames from 'colornames';

function Input({colorValue, setColorValue, setHexValue, isDarkText , setIsDarkText}) {
  return (
    <form onSubmit ={(e)=> e.preventDefault()}>
        <label>Add color Name</label>
        <input 
        autoFocus
        type="text"
        placeholder="add color name"
        value={colorValue}
        onChange={(e) => {
            setColorValue(e.target.value)
            setHexValue =(colornames(e.target.value))}}/>

            <button
            type="button"
            onClick={()=>setIsDarkText(!isDarkText)}>
                Toggle text color
                </button>
    </form>
  )
}

export default Input



// return (
//     <form onSubmit ={(e)=> e.preventDefault()}>
//         <label>Add color Name</label>
//         <input 
//         autoFocus
//         type="text"
//         placeholder="add color name"
//         value={colorValue}
//         onChange={(e) => setColorValue(e.target.value)}/>
//     </form>
//   )
// }

// export default Input