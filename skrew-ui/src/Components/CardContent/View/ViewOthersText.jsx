import { Grid, Typography } from '@mui/material'
import React from 'react'

export default function ViewOthersText({cardText, cardTextColor}) {
  return (
    <Grid item className='path' color={cardTextColor} position={"absolute"} top={"70px"} >
        <Typography fontSize={"1.9rem"} fontFamily={"Amiri"} fontWeight={'bold'}>{cardText}</Typography>
  </Grid>
  )
}
