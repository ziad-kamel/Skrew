import { Grid, Typography } from '@mui/material'
import React from 'react'
import { TLCardScoreStyle } from './TLCardScoreStyle'

export default function TLCardScore({cardScore, borderColor, lined, content}) {
  const plus20Score = () => {
    return(
            <Typography fontFamily={"'IBM Plex Mono', monospace"} fontSize={'1rem'} fontWeight={'800'} color={'white'}>+</Typography>
    )
  }
  return (
    <TLCardScoreStyle borderColor={borderColor}>
        <Grid container justifyContent={'center'} >
        {content.special.isPlus20? plus20Score(): <></>}
            <Typography fontFamily={"'IBM Plex Mono', monospace"} fontSize={'1.7rem'} fontWeight={'800'} color={'white'}>{cardScore}</Typography>
            {lined?<div className='underLine'/>:<></>}
        </Grid>
    </TLCardScoreStyle>
  )
}
