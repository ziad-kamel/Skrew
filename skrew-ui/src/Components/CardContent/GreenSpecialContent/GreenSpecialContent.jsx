import { Grid, Typography } from '@mui/material'
import React from 'react'

export default function GreenSpecialContent() {
  function screwdriverLogo(degree) {
    return(
      <img draggable={'false'} alt='' src={require('../../../Assets/screwdriver.png')} style={{width: "7rem", transform: `rotate(${degree}deg)`}}/>
    )
  }
  function screwdriverText(text) {
    return(
      <Typography color={"white"} fontFamily={'Lemonada'} fontSize={"3.5rem"}>{text}</Typography>
      )
  }
  
    return (
    <Grid item height={"30rem"} display={"flex"} direction={"column"} justifyContent={"space-between"} alignItems={"center"}>
      {screwdriverLogo(135)}
      <Grid item display={"flex"} direction={"column"} alignItems={"center"}>
        {screwdriverText("سكرو")}
        {screwdriverText("درايفير")}
      </Grid>
      {screwdriverLogo(315)}
    </Grid>
  )
}
