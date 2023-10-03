import { Grid, Typography } from '@mui/material'
import React from 'react'

export default function WachOneForEveryoneComandContent() {
  return (
    <Grid item>
      <Grid item display={'flex'} direction={'column'} alignItems={'center'} width={'13.7rem'}>
        <Typography fontSize={'5.75rem'} fontFamily={'Amiri, serif'} fontWeight={'bold'} color={'#3f1561'}>كعب</Typography>
        <Typography fontSize={'5.75rem'} fontFamily={'Amiri, serif'} fontWeight={'bold'} color={'#3f1561'}>داير</Typography>
      </Grid>
    </Grid>
  )
}
