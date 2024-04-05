import React from 'react'

function Wrapper(props) {
  const style1= {
    border: '1px solid black',
    padding: '10px',
    margin: '10px',
    backgroundColor: '#eee'
  }
  return (
    <div style={style1}>
      {props.children}
    </div>
  )
}

export default Wrapper