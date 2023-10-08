import { Grid } from '@mui/material'
import React from 'react'
import CardCenterContent from './CardCenterContent/CardCenterContent'
import { CardContentStyle } from './CardContentStyle'
import CardScores from './CardScore/CardScores'

export default function CardContent({cardScore, cardText, cardNumber, cardBackgroundColor, numberColor, extraElements, underLined, content}) {
  

  return (
    <CardContentStyle cardBackgroundColor={cardBackgroundColor} borderColor={numberColor}>
      <Grid item width={'fit-content'} justifyContent={'center'}>
        <Grid item className='contentFrame' display={'flex'} justifyContent={"center"} alignItems={"center"}>
        <div className='TRball'></div>
        <div className='BLball'></div>
        <CardScores borderColor={numberColor} cardScore={cardScore} content={content}/>
        <CardCenterContent 
        cardText={cardText} 
        numberColor={numberColor} 
        cardNumber={cardNumber} 
        extraElements={extraElements} 
        underLined={underLined}
        content={content}/>
        </Grid>
      </Grid>
    </CardContentStyle>
  )
}
