import { useState } from 'react'
import ResponsiveAppBar from './ResponsiveAppBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <ResponsiveAppBar />
  )
}

export default App
