import { Coronavirus, StarRateSharp } from '@mui/icons-material/';
import { Grid, Typography } from '@mui/material';
import React from 'react';
import GreenSpecialContent from '../GreenSpecialContent/GreenSpecialContent';
import RedSpecialContent from '../RedSpecialContent/RedSpecialContent';
import { SpecialContentStyle } from './SpecialContentStyle';

var ContentsValue={};

const RenderIcons = (gridStyle, special) => {
  if(special.isPlus20){
    ContentsValue = {
      score: '+20',
      bgcolor: "firebrick",
      color: "#42b593",
      fontsize: "4.5rem"
    }
    return VirusIcons(gridStyle)
  } else if(special.isMinus){
    ContentsValue = {
      score: '-1',
      bgcolor: "#0ea30e",
      color: "gold",
      fontsize: "7rem"
    }
    return StarsIcons(gridStyle)
  }
}

const RenderSpecialContent = (special) => {
  if(special.isScrew){
    return <RedSpecialContent />
  } else if (special.isScrewdriver){
    return <GreenSpecialContent />
  } else {
    return (
      <SpecialContentStyle>
        <Grid item display={"flex"} alignItems={"center"} justifyContent={"center"} margin={"17px"} width={"7rem"} height={"14rem"} borderRadius={"5rem 0px"} bgcolor={ContentsValue.bgcolor}>
            {RenderIcons("TLicons",special)}
            <Typography fontFamily={"'Alfa Slab One', cursive"} fontSize={ContentsValue.fontsize} sx={{transform: "skewY(349deg)", color: ContentsValue.color}}>{ContentsValue.score}</Typography>
            {RenderIcons("BRicons",special)}
        </Grid>
    </SpecialContentStyle>
  )
}
}

const VirusIcons = (gridStyle) => {
  return (
      <Grid item className={`${gridStyle}`}>
          <Coronavirus sx={{fontSize: "1.3rem", color:"#42b593"}}/>
          <Coronavirus sx={{fontSize: "2.3rem", color:"#42b593"}}/>
          <Coronavirus sx={{fontSize: "1.3rem", color:"#42b593"}}/>
      </Grid>
      
  )
}
const StarsIcons = (gridStyle) => {
  return (
      <Grid item className={`${gridStyle}`}>
          <StarRateSharp sx={{fontSize: "1.3rem", color:"gold"}}/>
          <StarRateSharp sx={{fontSize: "3rem", color:"gold"}}/>
          <StarRateSharp sx={{fontSize: "1.3rem", color:"gold"}}/>
      </Grid>
      
  )
}

export default function SpecialContent({special}) {
  return (
    <Grid container sx={{display: "flex", alignItems: "center", height: "17rem"}}>
        {RenderSpecialContent(special)}
    </Grid>
  )
}
