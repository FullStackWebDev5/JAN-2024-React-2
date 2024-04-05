import { useState } from 'react'
import './App.css';
import Section1 from './components/Section1'
import Section2 from './components/Section2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Section1 count={count} />
      <Section2 count={count} setCount={setCount} />
    </div>
  );
}

export default App;









/*
  HOC: Higher Order Components: Pass Components as props to another Components

  # Example 1
  <HOC Component={Component1} />
  <HOC Component={Component2} />

  # Example 2
  <Wrapper>
    <Section1 />
    <Section2 />
  </Wrapper>
*/





// const [show, setShow] = useState(true)
// useEffect(() => {
//   console.log('App component just mounted')
// }, [])

/* {show && <Component1 />}
<button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button> */
