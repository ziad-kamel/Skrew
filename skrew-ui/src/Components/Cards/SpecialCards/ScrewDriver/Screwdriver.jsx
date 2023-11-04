import React from 'react'
import GenericCard from '../../GenericCard/GenericCard'

export default function Screwdriver() {
  return (
    <GenericCard cardBackgroundColor={"#00c71e"} numberColor={"#00c71e"} cardScore={0} content={{special:{isScrewdriver:true}}}/>
  )
}
