import { Grid, Typography } from '@mui/material'
import React from 'react'

export default function ViewOthersText({cardText, cardTextColor}) {
  return (
    <Grid item className='path' color={cardTextColor} position={"absolute"} bottom={"42px"} >
        <Typography fontSize={"1.3rem"} fontFamily={"Amiri"} fontWeight={'bold'}>{cardText}</Typography>
  </Grid>
  )
}
