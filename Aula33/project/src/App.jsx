import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Calculadora from './components/pages/Calculadora/Calculadora'


 export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <Calculadora />
    </>
  )
}


