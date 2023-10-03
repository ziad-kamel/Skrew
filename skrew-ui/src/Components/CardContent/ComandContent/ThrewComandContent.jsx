import { ArrowRightAlt, HorizontalSplit, RectangleRounded } from '@mui/icons-material/';
import { Grid, Typography } from '@mui/material';
import React from 'react';

export default function ThrewComandContent() {
  return (
    <Grid item height={'20rem'} display={'flex'} direction={'column'} alignItems={'center'} justifyContent={'space-between'}>
      <Grid item display={'flex'} direction={'column'} alignItems={'center'} width={'13.7rem'}>
        <Grid item >
            <RectangleRounded sx={{color:'#3f1561', fontSize:"3.5rem", transform: "rotate(90deg)"}}/>
            <ArrowRightAlt sx={{color:'#3f1561', fontSize:"3.5rem"}}/>
            <HorizontalSplit sx={{color:'#3f1561', fontSize:"3.5rem", transform: "rotate(180deg)"}}/>
        </Grid>
        <Typography fontSize={'8rem'} fontFamily={'Amiri, serif'} fontWeight={'bold'} color={'#3f1561'}>بصرة</Typography>
        <Grid item >
            <RectangleRounded sx={{color:'#3f1561', fontSize:"3.5rem", transform: "rotate(90deg)"}}/>
            <ArrowRightAlt sx={{color:'#3f1561', fontSize:"3.5rem"}}/>
            <HorizontalSplit sx={{color:'#3f1561', fontSize:"3.5rem", transform: "rotate(180deg)"}}/>
        </Grid>
      </Grid>
    </Grid>
  )
}
