import { Menu, ViewCarousel } from '@mui/icons-material';
import { Box, Container, IconButton, Typography } from '@mui/material';
import React from 'react';
import { NavBarStyle } from './NavBarStyle';
export default function NavBar() {
  return (
    <NavBarStyle>
        <Container>
            <Box className="headerBox">
                <Box className="iconTxtBox">
                    <Box className="iconBox">
                        <ViewCarousel className='icon'/>
                    </Box>
                    <Typography variant='h5' fontWeight={'bold'} color={"#dca110"}>Skrew</Typography>
                </Box>
                <IconButton color='info'>
                    <Menu />
                </IconButton>
            </Box>
        </Container>
    </NavBarStyle>
  )
}
