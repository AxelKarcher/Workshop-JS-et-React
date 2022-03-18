import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import axios from 'axios'

import './CallsPage.css'

function CallsPage() {

  const navigate = useNavigate()
  const wordApiLink = 'https://random-word-api.herokuapp.com/word?number=1'
  const catApiLink ='https://aws.random.cat/meow?ref=apilist.fun'

  const [catImg, setCatImg] = useState('')

  const getWord = () => {
    axios.get(catApiLink)
      .then((res) => {
        // console.log(res.data[0])
        setCatImg(res.data.file)
      })
      .catch((error) => {
        console.log(error)
      })
      .then(() => {
      })
  }

  return (
    <div id='callsContainer'>

      {
        catImg !== '' &&
        <img id='catImg' src={ catImg } alt='cat' />
      }

      <div id='bottomPart'>
        <Button
          id='getBtn'
          variant='contained'
          onClick={() => getWord() }
        >
          Give me
          <br />
          a cat
        </Button>
        <Button
          id='callsNavBtn'
          variant='contained'
          onClick={() => navigate('/') }
        >
          Counter
          <br />
          page
        </Button>
      </div>
    </div>
  )
}

export default CallsPage
