import { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

import './CounterElem.css'

function CounterElem(props) {

  const [modifier, setModifier] = useState({ value: 0, isPositive: true })

  const toggleType = () => {
    let newModifier = {...modifier}

    newModifier.isPositive = !newModifier.isPositive
    setModifier(newModifier)
  }

  const changeValue = (newValue) => {
    let newModifier = {...modifier}

    newModifier.value = Number(newValue)
    setModifier(newModifier)
  }

  return (
    <div id='counterElemContainer'>
      <Button
        id='typeBtn'
        variant='contained'
        onClick={() => toggleType() }
      >
        { modifier.isPositive ? <AddIcon /> : <RemoveIcon /> }
      </Button>
      <TextField
        id='valueInput'
        label='Value'
        variant='outlined'
        onChange={(e) => changeValue(e.target.value)}
      />
      <Button
        id='sendBtn'
        variant='contained'
        onClick={() => props.change(modifier) }
      >
        Send
      </Button>
    </div>
  )
}

export default CounterElem