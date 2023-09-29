import { Menu, Style } from '@mui/icons-material';
import { Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import React from 'react';
import { NavBarStyle } from './NavBarStyle';

export default function NavBar() {
    const theme = useTheme();
  return (
    <NavBarStyle>
        <Toolbar >
            <Grid container justifyContent={'space-between'} bgcolor={"#401761"} borderRadius={'6px'} height={'5rem'}>
                <Grid item display={'flex'} alignItems={'center'} paddingLeft={'10px'}>
                    <Grid item className="iconBox">
                        <Style className='icon'/>
                    </Grid>
                    <Typography variant='h5' fontWeight={'bold'} color={"#dca110"}>Skrew</Typography>
                </Grid>
                <IconButton color='info'>
                    <Menu />
                </IconButton>
            </Grid>

        </Toolbar>
    </NavBarStyle>
  )
}
