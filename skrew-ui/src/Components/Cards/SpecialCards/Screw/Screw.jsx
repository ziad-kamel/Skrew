import React from 'react'
import GenericCard from '../../GenericCard/GenericCard'

export default function Screw() {
  return (
    <GenericCard cardBackgroundColor={"#cf0000"} numberColor={"#cf0000"} cardScore={20} content={{special:{isScrew:true}}}/>
  )
}
