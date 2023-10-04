import { Coronavirus } from '@mui/icons-material/';
import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Plus20SpecialContentStyle } from './Plus20SpecialContentStyle';
export default function Plus20SpecialContent() {
    const VirusIcons = (gridStyle) => {
        return (
            <Grid item className={`${gridStyle}`}>
                <Coronavirus sx={{fontSize: "2rem", color:"#42b593"}}/>
                <Coronavirus sx={{fontSize: "5rem", color:"#42b593"}}/>
                <Coronavirus sx={{fontSize: "2rem", color:"#42b593"}}/>
            </Grid>
            
        )
    }

  return (
    <Plus20SpecialContentStyle>
        <Grid item display={"flex"} alignItems={"center"} justifyContent={"center"} height={"21rem"} borderRadius={"7rem 0px"} bgcolor={"firebrick"}>
            {VirusIcons("TLvirus")}
            <Typography fontFamily={"'Alfa Slab One', cursive"} fontSize={"8.2rem"} sx={{transform: "skewY(349deg)", color:"#42b593"}}>+20</Typography>
            {VirusIcons("BRvirus")}
        </Grid>
    </Plus20SpecialContentStyle>
  )
}
