import React, { useState, useEffect } from 'react'

function useFriendStatus(friendId) {
  const [isOnline, setIsOnline] = useState(null)

  function handleStatusChange(status) {
    setIsOnline(status.isOnline)
  }

  useEffect(() => () => {
    console.log('useEffect')
    handleStatusChange(true)
  })

  return isOnline
}

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0)
  const [state, setState] = useState(0)

  const isOnline = useFriendStatus(1)

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`
    console.log('count changed')
  }, [count])

  return (
    <div>
      <p>You clicked {count} times</p>
      <p>You state clicked {state} times</p>
      <p>You friend is {isOnline ? 'online' : 'offline'}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setState(state + 1)}>State Click me</button>
    </div>
  )
}

export default Example
