import { Grid, Typography } from '@mui/material'
import React from 'react'
import ComandContent from '../ComandContent/ComandContent'
import SpecialContent from '../SpecialContent/SpecialContent'
import ViewMineText from '../View/ViewMineText'
import ViewOthersText from '../View/ViewOthersText'
import { CardCenterContentStyle } from './CardCenterContentStyle'

export default function CardCenterContent({cardText, numberColor, cardNumber, extraElements, underLined, content}) {

    const chooseView = (number) => {
        if(number === 7 || number === 8){
          return (<ViewMineText cardText={cardText || ""} cardTextColor={numberColor}/>)
        }
        else if(number === 9 || number === 10){
          return(<ViewOthersText cardText={cardText||""} cardTextColor={numberColor}/>)
        }
      }

      const chooseContent = (content) => {
        if (!content){
          return(
            <Grid item className="iconNumber">
                <Typography fontSize={'5rem'} fontWeight={'700'} fontFamily={"'IBM Plex Mono', monospace"} color={numberColor}>{cardNumber}</Typography>
                {underLined?<div className='numberUnderLine'/>:<></>}
            </Grid>
          )
        }else{
          if(content.comand){
            return(<ComandContent comand={content.comand}/>)
          }else if (content.special){
            return (<SpecialContent special={content.special}/>)
          }
        }
      }

  return (
    <CardCenterContentStyle borderColor={numberColor}>
        <Grid item display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={"center"} height={"17rem"}>
            {chooseView(cardNumber)}
            {chooseContent(content)}
            {extraElements}
        </Grid>
    </CardCenterContentStyle>
  )
}
