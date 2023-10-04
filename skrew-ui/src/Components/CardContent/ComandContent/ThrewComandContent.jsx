import { ArrowRightAlt, HorizontalSplit, RectangleRounded } from '@mui/icons-material/';
import { Grid, Typography } from '@mui/material';
import React from 'react';

const threwLogo = (angle) => {
  return (
    <Grid item >
        <RectangleRounded sx={{color:'#3f1561', fontSize:"3.5rem", transform: "rotate(90deg)"}}/>
        <ArrowRightAlt sx={{color:'#3f1561', fontSize:"3.5rem"}}/>
        <HorizontalSplit sx={{color:'#3f1561', fontSize:"3.5rem", transform: `rotate(${angle}deg)`}}/>
    </Grid>
  )
}

export default function ThrewComandContent() {
  return (
    <Grid item height={'20rem'} display={'flex'} direction={'column'} alignItems={'center'} justifyContent={'space-between'}>
      <Grid item display={'flex'} direction={'column'} alignItems={'center'} width={'13.9rem'}>
        {threwLogo(180)}
        <Typography fontSize={'8rem'} fontFamily={'Amiri, serif'} fontWeight={'bold'} color={'#3f1561'}>بصرة</Typography>
        {threwLogo(0)}
      </Grid>
    </Grid>
  )
}
