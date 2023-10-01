import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import CardContent from '../../../CardContent/CardContent'
import { OneStyle } from './GenericCardStyle'

export default function One({cardScore, cardNumber, cardBaseColor, numberColor, cardText}) {
  return (
    <OneStyle cardBaseColor={cardBaseColor}>
        <Container>
            <Grid container display={'flex'} justifyContent={'center'}>
                <Grid item lg={4} md={4} sm={5} xs={8} className="CardFrame">
                    <CardContent cardScore={cardScore} cardNumber={cardNumber} numberColor={numberColor} cardText={cardText} />
                </Grid>
            </Grid>
        </Container>
    </OneStyle>
  )
}
