import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import CardBack from '../Cards/CardBack/CardBack';

export default function PlayerCardsBox() {
  return (
    <Container>
        <Grid item display={"flex"} justifyContent={"space-evenly"} >
            <Grid item width={"15rem"}> <CardBack/> </Grid>
            <Grid item width={"15rem"}> <CardBack/> </Grid>
            <Grid item width={"15rem"}> <CardBack/> </Grid>
            <Grid item width={"15rem"}> <CardBack/> </Grid>
        </Grid>
    </Container>
  )
}
