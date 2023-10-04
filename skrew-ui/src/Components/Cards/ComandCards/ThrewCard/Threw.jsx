import React from 'react'
import GenericCard from '../../GenericCard/GenericCard'

export default function Threw() {

  return (
    <GenericCard cardScore={10} content={{comand:{isThrew: true}}}/>
  )
}
