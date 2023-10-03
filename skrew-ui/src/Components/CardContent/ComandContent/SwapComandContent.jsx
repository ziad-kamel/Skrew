import { Grid, Typography } from '@mui/material'
import React from 'react'

export default function SwapComandContent() {
  return (
    <Grid item display={'flex'} alignItems={'center'} justifyContent={'space-between'} flexDirection={'column'} height={'27rem'} width={'13.7rem'}>
        <img draggable={'false'} alt='' src={require('../../../Assets/swap.png')} style={{width: "7rem", transform: "rotate(45deg)"}}/>
        <Grid item display={'flex'} alignItems={'center'} flexDirection={'column'} >
            <Typography fontFamily={'Amiri, serif'} variant='h2' fontWeight={'bold'}>خد</Typography>
            <Typography fontFamily={'Amiri, serif'} variant='h2' fontWeight={'bold'}>وهات</Typography>
        </Grid>
        <img draggable={'false'} alt='' src={require('../../../Assets/swap.png')} style={{width: "7rem", transform: "rotate(225deg)"}}/>
    </Grid>
  )
}
