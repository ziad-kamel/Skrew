import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import CardContent from '../../../CardContent/CardContent'
import { GenericCardStyle } from './GenericCardStyle'

export default function GenericCard({cardScore, cardNumber, numberColor, cardBackgroundColor, cardText}) {
  return (
    <GenericCardStyle >
        <Container>
            <Grid container display={'flex'} justifyContent={'center'}>
                <Grid item lg={4} md={4} sm={5} xs={8} className="CardFrame">
                    <CardContent cardScore={cardScore} cardNumber={cardNumber} numberColor={numberColor || "#3f1561"} cardBackgroundColor={cardBackgroundColor} cardText={cardText} />
                </Grid>
            </Grid>
        </Container>
    </GenericCardStyle>
  )
}
