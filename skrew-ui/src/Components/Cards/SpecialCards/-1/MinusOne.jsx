import React from 'react'
import GenericCard from '../../GenericCard/GenericCard'

export default function MinusOne() {
  return (
    <GenericCard cardScore={-1} content={{special:{isMinus:true}}}/>
  )
}
