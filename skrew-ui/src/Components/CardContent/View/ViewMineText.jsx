import { Grid, Typography } from '@mui/material'
import React from 'react'
export default function VeiwMineText({cardText, cardTextColor}) {
  return (
    <Grid item className='path' color={cardTextColor} position={"absolute"} top={"67px"} >
        <Typography fontSize={"1.9rem"} fontFamily={"Amiri"} fontWeight={'bold'}>{cardText}</Typography>
  </Grid>
  )
}
