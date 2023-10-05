import { Grid } from '@mui/material';
import React from 'react';
import ReactCurvedText from 'react-curved-text';
export default function RedSpecialContent() {
  return (
    <Grid item width={"15rem"} height={"18.5rem"} display={"flex"} direction={"column"} alignItems={"center"} justifyContent={"space-between"}>
        <Grid item width={"inherit"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <ReactCurvedText width='240'
            height='120'
            cx='100'
            cy='95'
            rx='140'
            ry='50'
            startOffset='90'
            reversed={true}
            text='سكرو'
            textProps={{"style": {"fontSize": "90" , fontFamily: "Ruwudu", fontWeight: "bold"}}}
            tspanProps={{"dy": "15"}}
            textPathProps={{"fill": "#ffffff"}} 
            ellipseProps={null}
            svgProps={{"style": {"transform": "rotate(0deg)"}}} />
        </Grid>
        <img draggable={'false'} alt='' src={require('../../../Assets/screw.png')} style={{width:"12rem", height: "12rem" ,transform: "rotate(135deg)"}}/>
    </Grid>
  )
}
