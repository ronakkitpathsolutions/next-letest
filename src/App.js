import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routing from './routes/Routing'

const App = () => {
  return <BrowserRouter>
    <Suspense fallback={<p>Loading...</p>} >
      <Routing/>
    </Suspense>
  </BrowserRouter>
}

export default App