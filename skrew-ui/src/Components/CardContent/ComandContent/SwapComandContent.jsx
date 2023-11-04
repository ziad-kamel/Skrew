import { Grid, Typography } from '@mui/material'
import React from 'react'

function swapLogo(degree) {
  return(
    <img draggable={'false'} alt='' src={require('../../../Assets/swap.png')} style={{width: "4rem", transform: `rotate(${degree}deg)`}}/>
  )
}

const swapText = (text) => {
  return(
      <Typography fontSize={'2.75rem'} fontFamily={'Amiri, serif'} variant='h2' fontWeight={'bold'} color={'#3f1561'}>{`${text}`}</Typography>
    )
}

export default function SwapComandContent() {
  return (
    <Grid item display={'flex'} alignItems={'center'} justifyContent={'space-between'} flexDirection={'column'} height={'16rem'} width={'6rem'}>
        {swapLogo(45)}
        <Grid item display={'flex'} alignItems={'center'} flexDirection={'column'} >
          {swapText("خد")}
          {swapText("وهات")}
        </Grid>
        {swapLogo(225)}
    </Grid>
  )
}
