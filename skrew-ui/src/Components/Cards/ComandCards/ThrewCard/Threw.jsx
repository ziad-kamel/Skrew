import React from 'react'
import GenericCard from '../../GenericCard/GenericCard'

export default function Threw() {
    const threwComand ={
        isThrew: true
    }
  return (
    <GenericCard cardScore={10} comand={threwComand}/>
  )
}
