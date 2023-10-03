import { Grid, Typography } from '@mui/material'
import React from 'react'
import ComandContent from '../ComandContent/ComandContent'
import ViewMineText from '../View/ViewMineText'
import ViewOthersText from '../View/ViewOthersText'
import { CardCenterContentStyle } from './CardCenterContentStyle'

export default function CardCenterContent({cardText, numberColor, cardNumber, extraElements, underLined, comand}) {

    const chooseView = (number) => {
        if(number === 7 || number === 8){
          return (<ViewMineText cardText={cardText || ""} cardTextColor={numberColor}/>)
        }
        else if(number === 9 || number === 10){
          return(<ViewOthersText cardText={cardText||""} cardTextColor={numberColor}/>)
        }
      }

  return (
    <CardCenterContentStyle borderColor={numberColor}>
        <Grid item display={'flex'} flexDirection={'column'} alignItems={'center'}>
            {chooseView(cardNumber)}
            {!comand?<Grid item className="iconNumber">
                <Typography fontSize={'10rem'} fontWeight={'700'} fontFamily={"'IBM Plex Mono', monospace"} color={numberColor}>{cardNumber}</Typography>
                {underLined?<div className='numberUnderLine'/>:<></>}
            </Grid>:<ComandContent comand={comand}/>}
            {extraElements}
        </Grid>
    </CardCenterContentStyle>
  )
}
