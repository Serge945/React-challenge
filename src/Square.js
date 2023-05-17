import React from 'react'

export default function Square({colorValue, hexValue, isDarkText}) {
  return (
    <section className="square"
    style={{backgroundColor:colorValue,
       color:isDarkText ? "#000" : "#FFF"
    }}>
        <p>{colorValue ? colorValue : "Empty Value"}</p>
        <p>{hexValue ? hexValue : null }</p>
    </section>
  )
}
Square.defaultProps = {
    colorValue:"Empty color Value"
}
