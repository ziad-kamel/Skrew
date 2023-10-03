import { Grid, Typography } from '@mui/material'
import React from 'react'

export default function SwapComandContent() {
  return (
    <Grid item display={'flex'} alignItems={'center'} justifyContent={'space-between'} flexDirection={'column'} height={'27rem'} width={'13.9rem'}>
        <img draggable={'false'} alt='' src={require('../../../Assets/swap.png')} style={{width: "7rem", transform: "rotate(45deg)"}}/>
        <Grid item display={'flex'} alignItems={'center'} flexDirection={'column'} >
            <Typography fontSize={'4.75rem'} fontFamily={'Amiri, serif'} variant='h2' fontWeight={'bold'} color={'#3f1561'}>خد</Typography>
            <Typography fontSize={'4.75rem'} fontFamily={'Amiri, serif'} variant='h2' fontWeight={'bold'} color={'#3f1561'}>وهات</Typography>
        </Grid>
        <img draggable={'false'} alt='' src={require('../../../Assets/swap.png')} style={{width: "7rem", transform: "rotate(225deg)"}}/>
    </Grid>
  )
}
