import { useState } from 'react'
import reactLogo from '../assets/react.svg'

function App() {
  const [count, setCount] = useState(0)
  console.log(reactLogo)
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img className="logo react" src={reactLogo.src} alt="React logo" width="120" />
        </a>
      </div>
      <h1>React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the React logos to learn more
      </p>
    </>
  )
}

export default App
