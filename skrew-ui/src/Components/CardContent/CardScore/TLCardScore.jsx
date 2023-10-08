import { Grid, Typography } from '@mui/material'
import React from 'react'
import { TLCardScoreStyle } from './TLCardScoreStyle'

export default function TLCardScore({cardScore, borderColor, lined}) {
  const RenderNumber = () => {
    if(cardScore === 20){
      return (
        <Typography fontFamily={"'IBM Plex Mono', monospace"} fontSize={'1rem'} fontWeight={'800'} color={'white'}>+</Typography>
      )
    }
  }
  return (
    <TLCardScoreStyle borderColor={borderColor}>
        <Grid container justifyContent={'center'} >
            {RenderNumber()}
            <Typography fontFamily={"'IBM Plex Mono', monospace"} fontSize={'0.8rem'} fontWeight={'800'} color={'white'}>{cardScore}</Typography>
            {lined?<div className='underLine'/>:<></>}
        </Grid>
    </TLCardScoreStyle>
  )
}
