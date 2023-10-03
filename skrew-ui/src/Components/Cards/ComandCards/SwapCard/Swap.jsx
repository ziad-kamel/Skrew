import React from 'react'
import GenericCard from '../../GenericCard/GenericCard'

export default function Swap () {
  const swapComand = {
    isSwap:true

  }

  return (
    <GenericCard cardScore={10} comand={swapComand}/>
  )
}
