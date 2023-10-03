import { Menu, Style } from '@mui/icons-material';
import { Grid, IconButton, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavBarStyle } from './NavBarStyle';

export default function NavBar() {
    const navigate = useNavigate();
    // const theme = useTheme();
  return (
    <NavBarStyle>
        <Container >
            <Grid container justifyContent={'space-between'} bgcolor={"#401761"} borderRadius={'6px'} height={'5rem'}>
                <Grid item display={'flex'} alignItems={'center'} paddingLeft={'10px'}>
                    <Grid item className="iconBox">
                        <Style className='icon'/>
                    </Grid>
                    <Typography variant='h5' fontWeight={'bold'} color={"#dca110"} onClick={()=>navigate('/home')}>Skrew</Typography>
                </Grid>
                <Grid item display={'flex'} alignItems={'center'} justifyContent={'space-between'} width={'26rem'} position={'relative'} right={'56px'}>
                    <button onClick={()=>navigate('/1')}>1</button>
                    <button onClick={()=>navigate('/2')}>2</button>
                    <button onClick={()=>navigate('/3')}>3</button>
                    <button onClick={()=>navigate('/4')}>4</button>
                    <button onClick={()=>navigate('/5')}>5</button>
                    <button onClick={()=>navigate('/6')}>6</button>
                    <button onClick={()=>navigate('/7')}>7</button>
                    <button onClick={()=>navigate('/8')}>8</button>
                    <button onClick={()=>navigate('/9')}>9</button>
                    <button onClick={()=>navigate('/10')}>10</button>
                    <button onClick={()=>navigate('/swap')}>خدوهات</button>
                    <button onClick={()=>navigate('/watchOneForEveryone')}>كعب داير</button>
                    <button onClick={()=>navigate('/Threw')}>بصرة</button>
                </Grid>
                <IconButton color='info'>
                    <Menu />
                </IconButton>
            </Grid>

        </Container>
    </NavBarStyle>
  )
}
