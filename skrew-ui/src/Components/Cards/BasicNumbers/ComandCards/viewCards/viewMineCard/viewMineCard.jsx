import React from 'react'
import GenericCard from '../../../GenericCard/GenericCard'

export default function viewMineCard({cardScore, cardNumber, numberColor, cardText}) {
  return (
    <GenericCard cardScore={cardScore} cardNumber={cardNumber} numberColor={numberColor} cardText={cardText} />
  )
}
