import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Result.css'

const Result = ({score,name}) => {
  const navigate = useNavigate()
  useEffect(()=>{
    if(!name){
      navigate('/')

    }
  },[name])
  return (
    <div className='result'>
      <span className="title">Final Score : {score}</span>
      <Button
      variant='contained'
      color='secondary'
      size='large'
      style={{alignSelf:'center',marginTop:20}}
      href='/'
      >Go back to HomePage </Button>
    </div>
  )
}

export default Result
