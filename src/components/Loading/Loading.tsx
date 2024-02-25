import React, { FC } from 'react'
import './Loading.css'

interface LoadingProps {
  text?: string
}
const Loading: FC<LoadingProps> = ({ text }) => {
  return (
    <div className='loadingContainer'>
      <div className='loadingText'>{text}</div>
      <div className='loadingSpinner'></div>
    </div>
  )
}

export default Loading
