import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const maxCountValue: number = 15;

  function EditInfo() {
    return (
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    )
  }

  function InfoAboutCountLimit() {
    if (count !== maxCountValue) {
      return null;
    }
    return (
      <p>
        You reacht the countown limit
      </p>
    )
  }

  function updateCount(increase: boolean) {
    if (increase) {
      if (count < maxCountValue) {
        return setCount((count) => count + 1);
      }
    } else {
      return setCount((count) => count - 1);
    }

    return setCount((count) => count);
  }

  function ChangeCount({ increase }: { increase: boolean }) {
    return (
      <button onClick={() => updateCount(increase)}
      >
        {increase ? 'Erhöhen' : 'Reduzieren'}
      </button>
    )
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <ChangeCount 
          increase={false}
          />
        <ChangeCount 
          increase={true}
        />
        <br/>
        count is {count}
        <EditInfo/>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <InfoAboutCountLimit/>
    </>
  )
}

export default App
