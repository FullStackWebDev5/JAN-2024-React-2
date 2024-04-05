import React, { useState, useEffect } from 'react'

function Component1() {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(false)

  // componentDidMount
  useEffect(() => {
    console.log('Component1 just mounted')
  }, [])

  // // componentDidUpdate
  // useEffect(() => {
  //   console.log('Component1 just updated')
  // }, [count, show])

  // componentWillUnmount
  // useEffect(() => {
  //   return () => {
  //     console.log('Component1 will unmount')
  //   }
  // }, [])

  return (
    <div className='Component1'>
      <h1>Component1</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {show && <p>React.js</p>}
      <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
    </div>
  )
}

export default Component1

/*
  render -> Evaluating JSX and converting to equivalent HTML

  # Component Lifecycle Phases
  - Mounting (Birth)
  - Updating (Milestones)
  - Unmounting (Death)

  # Component Lifecycle Methods
  - Mounting
    - componentDidMount
      - Initializing Data
      - API Calls/ Fetching data from server
  - Updating 
    - componentDidUpdate
      - Based on state change, there is a need to perform another action
  - Unmounting
    - componentWillUnmount
      - Reset the state values
      - Reset the form values

  # useEffect: This hooks helps in using Component LifeCycle methods inside functional components
    - componentDidMount
      - useEffect with empty 'dependency array'
    - componentDidUpdate
      - useEffect with respective states specified in the 'dependency array'
    - componentWillUnmount
      - useEffect which returns a callback

*/