import { Grid, Typography } from '@mui/material'
import React from 'react'
import { BRCardScoreStyle } from './BRCardScoreStyle'

export default function BRCardScore({cardScore, borderColor, lined, content}) {
  const plus20Score = () => {
    return(
            <Typography fontFamily={"'IBM Plex Mono', monospace"} fontSize={'1rem'} fontWeight={'800'} color={'white'}>+</Typography>
    )
  }
  return (
    <BRCardScoreStyle borderColor={borderColor}>
        <Grid container justifyContent={'center'}>
            {content.special.isPlus20? plus20Score(): <></>}
            <Typography fontFamily={"'IBM Plex Mono', monospace"} fontSize={'1.7rem'} fontWeight={'800'} color={'white'}>{cardScore}</Typography>
            {lined?<div className='underLine'/>:<></>}
        </Grid>
    </BRCardScoreStyle>
  )
}
