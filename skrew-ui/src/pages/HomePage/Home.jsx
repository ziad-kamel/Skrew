
import { Card, CardActionArea, Typography } from '@mui/material';
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
    }, []);

    return (
    <HomeStyle>
        <Container sx={{pt:9}}>
            <Box width={"60%"} height={"21rem"} display={'flex'} justifyContent={'space-between'} flexDirection={'column'} margin={'auto'} >
                <CardActionArea>
                    <Card className='card'>
                        <Typography>Lets Play</Typography>
                    </Card>
                </CardActionArea>

                <CardActionArea>
                    <Card className='card'>
                        <Typography>How to play</Typography>
                    </Card>
                </CardActionArea>

                <CardActionArea>
                    <Card className='card'>
                        <Typography>How to get the Game</Typography>
                    </Card>
                </CardActionArea>

                <CardActionArea>
                    <Card className='card'>
                        <Typography>Info</Typography>
                    </Card>
                </CardActionArea>
            </Box>
        </Container>
    </HomeStyle>
  )
}
