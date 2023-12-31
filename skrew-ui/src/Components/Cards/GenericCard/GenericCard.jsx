import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import CardContent from '../../CardContent/CardContent'
import { GenericCardStyle } from './GenericCardStyle'

export default function GenericCard({cardBack, cardScore, cardNumber, numberColor, cardBackgroundColor, cardText, extraElements, underLined, content}) {
  return (
    <GenericCardStyle >
        <Container>
            <Grid container display={'flex'} justifyContent={'center'}>
                <Grid item lg={4} md={4} sm={5} xs={8} className="CardFrame">
                    <CardContent 
                    extraElements={extraElements} 
                    cardScore={cardScore} 
                    cardNumber={cardNumber} 
                    numberColor={numberColor || "#3f1561"} 
                    cardBackgroundColor={cardBackgroundColor} 
                    cardText={cardText} 
                    underLined={underLined}
                    content={content}
                    cardBack={cardBack}
                    />
                </Grid>
            </Grid>
        </Container>
    </GenericCardStyle>
  )
}
