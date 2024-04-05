import React from 'react'

function Section1({ count }) {
  return (
    <div>
      <h1>{count}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, numquam!</p>
    </div>
  )
}

export default Section1

/*
  Share data between sibling components
  - Lift the state up
  - Drill the props until the component which requires the state
*/