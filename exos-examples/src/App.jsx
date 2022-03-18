import './App.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

import CounterPage from './pages/counter/CounterPage.jsx'
import CallsPage from './pages/calls/CallsPage.jsx'

function App() {
  return (
    <div id='appContainer'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={ <CounterPage /> }/>
          <Route exact path='/calls' element={ <CallsPage /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
