import React from 'react'

function Section2({ count, setCount }) {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default Section2