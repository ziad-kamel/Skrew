import { Visibility } from '@mui/icons-material';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { MineExtraElementStyle } from './MineExtraElementStyle';
export default function MineExtraElement({cardsColor}) {
  return (
    <MineExtraElementStyle cardsColor={cardsColor}>
        <Grid container justifyContent={'space-around'}>
            <Box className="mockCard"/>
            <Box className="mockCard"/>
            <Box className="mockCard" display={'flex'} alignItems={'center'} justifyContent={'center'} margin={"-25px 0px"}>
                <Visibility className='eyeIcon'/>
            </Box>
            <Box className="mockCard"/>
        </Grid>
    </MineExtraElementStyle>
  )
}
