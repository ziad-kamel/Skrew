import { Menu, Style } from '@mui/icons-material';
import { Drawer, Grid, IconButton, List, ListItem, ListItemButton, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavBarStyle } from './NavBarStyle';

export default function NavBar() {
    const navigate = useNavigate();
    // const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handelClick = (inOpen) => (event) =>{
        if (event.type === 'keydown') {
          return;
        }
    
        setOpen(inOpen);
      };
  return (
    <NavBarStyle>
        <Container >
            <Grid container justifyContent={'space-between'} bgcolor={"#401761"} borderRadius={'6px'} height={'5rem'}>
                <Grid item display={'flex'} alignItems={'center'} paddingLeft={'10px'}>
                    <Grid item className="iconBox">
                        <Style className='icon'/>
                    </Grid>
                    <Typography variant='h5' fontWeight={'bold'} color={"#dca110"} onClick={()=>navigate('/')} sx={{cursor:"pointer"}}>Skrew</Typography>
                </Grid>

                <IconButton color='info'>
                    <Menu onClick={handelClick(true)}/>
                </IconButton>
                <Drawer
                anchor="right"
                color="neutral"
                size="md"
                variant="plain"
                open={open}
                onClose={handelClick(false)}
                >
                    <List sx={{backgroundImage: "linear-gradient(270deg, rgb(79, 30, 194), rgb(110, 35, 127))"}}>
                        {['1', '2', '3', '4','5', '6', '7', '8','9', '10', 'خدوهات', 'كعب داير','بصرة','+20','-1','screw','screwdriver'].map((text) => (
                        <ListItem key={text} >
                            <ListItemButton sx={{color:"white"}} onClick={()=>{
                                                    if (text === 'خدوهات') {
                                                        navigate(`/swap`)
                                                    } else if (text === 'كعب داير'){
                                                        navigate(`/watchOneForEveryone`)
                                                    } else if (text === 'بصرة'){
                                                        navigate(`/threw`)
                                                    } else {
                                                        navigate(`/${text}`)
                                                    }
                                                        }}>{text}</ListItemButton>
                        </ListItem>
                        ))}
                    </List>
                </Drawer>
            </Grid>

        </Container>
    </NavBarStyle>
  )
}
