import React from 'react'
import GenericCard from '../../GenericCard/GenericCard'

export default function WatchOneForEveryone() {
    const WachComand = {
        isWachForEveryone: true
    }
  return (
    <GenericCard cardScore={10} comand={WachComand}/>
  )
}
