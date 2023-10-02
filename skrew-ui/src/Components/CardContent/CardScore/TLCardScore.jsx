import { Grid, Typography } from '@mui/material'
import React from 'react'
import { TLCardScoreStyle } from './TLCardScoreStyle'

export default function TLCardScore({cardScore, borderColor, lined}) {
  return (
    <TLCardScoreStyle borderColor={borderColor}>
        <Grid container justifyContent={'center'}>
            <Typography fontFamily={"'IBM Plex Mono', monospace"} fontSize={'2rem'} fontWeight={'800'} color={'white'}>{cardScore}</Typography>
            {lined?<div className='underLine'/>:<></>}
        </Grid>
    </TLCardScoreStyle>
  )
}
