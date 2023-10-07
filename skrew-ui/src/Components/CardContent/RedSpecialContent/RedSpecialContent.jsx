import { Grid, Typography } from '@mui/material';
import React from 'react';
export default function RedSpecialContent() {
  return (
    <Grid item width={"15rem"} height={"20.5rem"} display={"flex"} direction={"column"} alignItems={"center"} justifyContent={"space-between"}>
        <Grid item width={"inherit"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <Typography fontFamily={"Amiri"} fontSize={"4.5rem"} fontWeight={"bold"} color={"white"}>سكرو</Typography>
        </Grid>
        <img draggable={'false'} alt='' src={require('../../../Assets/screw.png')} style={{width:"12rem", height: "12rem" ,transform: "rotate(135deg)"}}/>
    </Grid>
  )
}
