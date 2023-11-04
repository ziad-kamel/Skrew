
import { Button, Card, CardActionArea, Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useGetAll from '../../Hooks/useGetAll';
import { HomeStyle } from './HomeStyle';

export default function Home() {
    const [beData, setBeData] = useState([]);
    const getAll = useGetAll();
    const URL = '/api';

    useEffect(() => {
        getAll(URL).then((data) => {
            setBeData(data);
        })
    });


    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
    <HomeStyle>
        <Container sx={{pt:9}}>
            <Box width={"60%"} height={"21rem"} display={'flex'} justifyContent={'space-between'} flexDirection={'column'} margin={'auto'} >
                {/* <CardActionArea>
                    <Card className='card'>
                        <Typography>Lets Play</Typography>
                    </Card>
                </CardActionArea> */}

                <CardActionArea>
                    <Card className='card'>
                        <Button fullWidth={true} href='https://www.youtube.com/watch?v=by6w-Rz7bfY'>How to play</Button>
                    </Card>
                </CardActionArea>

                <CardActionArea>
                    <Card className='card'>
                        <Button fullWidth href='https://sllr.co/s/299213'>How to get the game</Button>
                    </Card>
                </CardActionArea>

                <CardActionArea>
                    <Card className='card'>
                    <Button sx={{fontFamily:"monospace", fontWeight:"bold", fontSize:"1.36rem", color: "rgba(0, 0, 0, 0.87)"}} fullWidth onClick={handleClickOpen}>
                        Info
                    </Button>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                        {"Information about the game"}
                        </DialogTitle>
                        <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            The game was created by <b>Yahya Azzam</b> and published in 2023 <br/>
                            it's a simple card game, can be played with minimum of 2 player and maximum of 5 player per packet
                            <br/> <mark style={{color: "white" , backgroundColor:"gray", borderRadius:"7px"}}>You can find all cards of the game from the three dots in Nav Bar</mark>
                        </DialogContentText>
                        </DialogContent>
                    </Dialog>
                    </Card>
                </CardActionArea>
            </Box>
        </Container>
    </HomeStyle>
  )
}
