import { Grid, Typography } from '@mui/material'
import React from 'react'

function swapLogo(degree) {
  return(
    <img draggable={'false'} alt='' src={require('../../../Assets/swap.png')} style={{width: "7rem", transform: `rotate(${degree}deg)`}}/>
  )
}

const swapText = (text) => {
  return(
      <Typography fontSize={'4.75rem'} fontFamily={'Amiri, serif'} variant='h2' fontWeight={'bold'} color={'#3f1561'}>{`${text}`}</Typography>
    )
}

export default function SwapComandContent() {
  return (
    <Grid item display={'flex'} alignItems={'center'} justifyContent={'space-between'} flexDirection={'column'} height={'27rem'} width={'13.9rem'}>
        {swapLogo(45)}
        <Grid item display={'flex'} alignItems={'center'} flexDirection={'column'} >
          {swapText("خد")}
          {swapText("وهات")}
        </Grid>
        {swapLogo(225)}
    </Grid>
  )
}
