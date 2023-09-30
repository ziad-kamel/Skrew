import { Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { OneStyle } from './GenericCardStyle'

export default function One({cardScore, cardNumber, cardBaseColor, numberColor, cardText}) {
  return (
    <OneStyle cardBaseColor={cardBaseColor}>
        <Container>
            <Grid container display={'flex'} justifyContent={'center'}>
                <Grid item lg={4} md={4} sm={5} xs={8} className="CardFrame">
                    <Grid item className="CardContent">
                        <div className='TRball'></div>
                        <div className='BLball'></div>

                        <Grid item className='TLCardScore'>
                            <Typography fontSize={'3.3rem'} fontWeight={'800'} color={'white'}>{cardScore}</Typography>
                        </Grid>
                        <Grid item className='BRCardScore'>
                            <Typography fontSize={'3.3rem'} fontWeight={'800'} color={'white'}>{cardScore}</Typography>
                        </Grid>
                        <Grid item className="CardTxtNumber" display={'flex'} flexDirection={'column'} alignItems={'center'}>
                            <Typography>{cardText || ""}</Typography>
                            <Grid item className="iconNumber">
                                <Typography fontSize={'18rem'} fontWeight={'700'} fontFamily={'emoji'} color={numberColor}>{cardNumber}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    </OneStyle>
  )
}
