import { Grid, Typography } from '@mui/material'
import React from 'react'
import { BRCardScoreStyle } from './BRCardScoreStyle'

export default function BRCardScore({cardScore, borderColor, lined}) {
  const RenderNumber = () => {
    if(cardScore === 20){
      return (
        <Typography fontFamily={"'IBM Plex Mono', monospace"} fontSize={'1rem'} fontWeight={'800'} color={'white'}>+</Typography>
      )
    }
  }

  return (
    <BRCardScoreStyle borderColor={borderColor}>
        <Grid container justifyContent={'center'}>
            {RenderNumber()}
            <Typography fontFamily={"'IBM Plex Mono', monospace"} fontSize={'1.7rem'} fontWeight={'800'} color={'white'}>{cardScore}</Typography>
            {lined?<div className='underLine'/>:<></>}
        </Grid>
    </BRCardScoreStyle>
  )
}
