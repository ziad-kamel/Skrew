import { Coronavirus, StarRateSharp } from '@mui/icons-material/';
import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { SpecialContentStyle } from './SpecialContentStyle';

var ContentsValue={};

const RenderIcons = (gridStyle, special) => {
  if(special.isPlus20){
    ContentsValue = {
      score: '+20',
      bgcolor: "firebrick",
      color: "#42b593",
      fontsize: "8.2rem"
    }
    return VirusIcons(gridStyle)
  } else if(special.isMinus){
    ContentsValue = {
      score: '-1',
      bgcolor: "#0ea30e",
      color: "gold",
      fontsize: "14rem"
    }
    return StarsIcons(gridStyle)
  }
}

const RenderSpecialContent = (special) => {
  return (
    <SpecialContentStyle>
        <Grid item display={"flex"} alignItems={"center"} justifyContent={"center"} height={"21rem"} borderRadius={"7rem 0px"} bgcolor={ContentsValue.bgcolor}>
            {RenderIcons("TLicons",special)}
            <Typography fontFamily={"'Alfa Slab One', cursive"} fontSize={ContentsValue.fontsize} sx={{transform: "skewY(349deg)", color: ContentsValue.color}}>{ContentsValue.score}</Typography>
            {RenderIcons("BRicons",special)}
        </Grid>
    </SpecialContentStyle>
  )
}

const VirusIcons = (gridStyle) => {
  return (
      <Grid item className={`${gridStyle}`}>
          <Coronavirus sx={{fontSize: "2rem", color:"#42b593"}}/>
          <Coronavirus sx={{fontSize: "4.3rem", color:"#42b593"}}/>
          <Coronavirus sx={{fontSize: "2rem", color:"#42b593"}}/>
      </Grid>
      
  )
}
const StarsIcons = (gridStyle) => {
  return (
      <Grid item className={`${gridStyle}`}>
          <StarRateSharp sx={{fontSize: "2rem", color:"gold"}}/>
          <StarRateSharp sx={{fontSize: "5rem", color:"gold"}}/>
          <StarRateSharp sx={{fontSize: "2rem", color:"gold"}}/>
      </Grid>
      
  )
}

export default function SpecialContent({special}) {
  return (
    <Container >
        {RenderSpecialContent(special)}
    </Container>
  )
}
