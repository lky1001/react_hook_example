import React, { useState, useEffect } from 'react'

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0)
  const [state, setState] = useState(0)

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`
    console.log('count changed')
  }, [count])

  return (
    <div>
      <p>You clicked {count} times</p>
      <p>You state clicked {state} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setState(state + 1)}>State Click me</button>
    </div>
  )
}

export default Example
