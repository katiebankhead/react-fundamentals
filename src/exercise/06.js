// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({ onSubmitUsername }) {
  const [username, setUsername] = React.useState('')

  function handleSubmit(e) {
    e.preventDefault() // prevents automatic page refresh on form submission
    onSubmitUsername(username)
  }

  function handleChange(event) {
    const value = event.target.value
    setUsername(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='username'>Username:</label>
        <input
          id="username"
          type="text"
          onChange={handleChange}
          value={username} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
