import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'

import './CounterPage.css'
import CounterElem from '../components/CounterElem.jsx'

function CounterPage() {

  const navigate = useNavigate()

  const [elemNb, setElemNb] = useState(0)
  const [counterNb, setCounterNb] = useState({ value: 0 })

  const modifyCounter = (modifier) => {
    if (isNaN(modifier.value)) { return }

    let newCounterNb = {...counterNb}

    if (modifier.isPositive) {
      newCounterNb.value += modifier.value
    } else {
      newCounterNb.value -= modifier.value
    }
    setCounterNb(newCounterNb)
  }

  return (
    <div id='counterContainer'>
      <div id='topPart'>
        <div id='valueDisplayPart'>
          <div>Value:</div>
          <div id='counterNb'>{ counterNb.value }</div>
        </div>
        {
          Array(elemNb).fill(
            <CounterElem
              change={(modifier) => modifyCounter(modifier) }
            />
          )
        }
      </div>
      <div id='bottomPart'>
        <Button
          id='addElemBtn'
          variant='contained'
          onClick={() => (elemNb < 5 && setElemNb(elemNb + 1)) }
        >
          Add
          <br />
          modifier
        </Button>
        <Button
          id='removeElemBtn'
          variant='contained'
          onClick={() => (elemNb > 0 && setElemNb(elemNb - 1)) }
        >
          Remove
          <br />
          modifier
        </Button>
        <Button
          id='resetModifiersBtn'
          variant='contained'
          onClick={() => setElemNb(0) }
        >
          Reset
          <br />
          modifier(s)
        </Button>
        <Button
          id='resetValueBtn'
          variant='contained'
          onClick={() => setCounterNb({ value: 0 }) }
        >
          Reset
          <br />
          value
        </Button>
        <Button
          id='counterNavBtn'
          variant='contained'
          onClick={() => navigate('/calls') }
        >
          calls
          <br />
          page
        </Button>
      </div>
    </div>
  )
}

export default CounterPage