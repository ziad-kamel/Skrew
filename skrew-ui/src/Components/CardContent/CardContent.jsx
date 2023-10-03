import { Grid } from '@mui/material'
import React from 'react'
import CardCenterContent from './CardCenterContent/CardCenterContent'
import { CardContentStyle } from './CardContentStyle'
import CardScores from './CardScore/CardScores'

export default function CardContent({cardScore, cardText, cardNumber, cardBackgroundColor, numberColor, extraElements, underLined, comand}) {
  

  return (
    <CardContentStyle cardBackgroundColor={cardBackgroundColor} borderColor={numberColor}>
      <Grid item>
        <div className='TRball'></div>
        <div className='BLball'></div>
        <CardScores borderColor={numberColor} cardScore={cardScore}/>
        <CardCenterContent 
        cardText={cardText} 
        numberColor={numberColor} 
        cardNumber={cardNumber} 
        extraElements={extraElements} 
        underLined={underLined}
        comand={comand}/>
      </Grid>
    </CardContentStyle>
  )
}
