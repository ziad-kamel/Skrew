import { Grid, Typography } from '@mui/material'
import React from 'react'


const comandText = (text) => {
  return (
    <Typography fontSize={'5.75rem'} fontFamily={'Amiri, serif'} fontWeight={'bold'} color={'#3f1561'}>{`${text}`}</Typography>
  )
}

export default function WachOneForEveryoneComandContent() {
  return (
    <Grid item>
      <Grid item display={'flex'} direction={'column'} alignItems={'center'} width={'13.9rem'}>
        {comandText("كعب")}
        {comandText("داير")}
      </Grid>
    </Grid>
  )
}
