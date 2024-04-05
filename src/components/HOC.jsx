import React from 'react'

function HOC({ Component }) {
  const style1= {
    border: '1px solid black',
    padding: '10px',
    margin: '10px',
    backgroundColor: 'aqua'
  }
  return (
    <div style={style1}>
      <h1>HOC</h1>
      <Component />
    </div>
  )
}

export default HOC