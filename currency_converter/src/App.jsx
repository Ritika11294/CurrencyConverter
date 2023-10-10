import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Currency_converter from './Component/Currency_converter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Currency_converter/>
    </>
  )
}

export default App
