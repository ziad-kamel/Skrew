import { Grid, Typography } from '@mui/material'
import React from 'react'
import { BRCardScoreStyle } from './BRCardScoreStyle'

export default function BRCardScore({cardScore, borderColor, lined}) {
  return (
    <BRCardScoreStyle borderColor={borderColor}>
        <Grid container justifyContent={'center'}>
            <Typography fontFamily={"'IBM Plex Mono', monospace"} fontSize={'2rem'} fontWeight={'800'} color={'white'}>{cardScore}</Typography>
            {lined?<div className='underLine'/>:<></>}
        </Grid>
    </BRCardScoreStyle>
  )
}
