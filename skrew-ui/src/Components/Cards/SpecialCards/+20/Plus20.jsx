import React from 'react'
import GenericCard from '../../GenericCard/GenericCard'

export default function Plus20() {
  return (
    <GenericCard cardScore={20} content={{special:{isPlus20:true}}}/>
  )
}
