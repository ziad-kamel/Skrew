import { Grid, Typography } from '@mui/material'
import React from 'react'
import { CardContentStyle } from './CardContentStyle'
import CardScores from './CardScore/CardScores'
import ViewMineText from './View/ViewMineText'
import ViewOthersText from './View/ViewOthersText'

export default function CardContent({cardScore, cardText, cardNumber, cardBackgroundColor, numberColor, extraElements, underLined}) {
  
  const chooseComand = (number) => {
    if(number === 7 || number === 8){
      return (<ViewMineText cardText={cardText || ""} cardTextColor={numberColor}/>)
    }
    else if(number === 9 || number === 10){
      return(<ViewOthersText cardText={cardText||""} cardTextColor={numberColor}/>)
    }
  }
  return (
    <CardContentStyle cardBackgroundColor={cardBackgroundColor} borderColor={numberColor}>
      <Grid item>
        <div className='TRball'></div>
        <div className='BLball'></div>
        <CardScores borderColor={numberColor} cardScore={cardScore}/>
        <Grid item className="CardTxtNumber" display={'flex'} flexDirection={'column'} alignItems={'center'}>
            {chooseComand(cardNumber)}
            <Grid item className="iconNumber">
                <Typography fontSize={'10rem'} fontWeight={'700'} fontFamily={"'IBM Plex Mono', monospace"} color={numberColor}>{cardNumber}</Typography>
                {underLined?<div className='numberUnderLine'/>:<></>}
            </Grid>
        {extraElements}
        </Grid>
      </Grid>
    </CardContentStyle>
  )
}
