import { Grid, Typography } from '@mui/material'
import React from 'react'
import { CardContentStyle } from './CardContentStyle'

export default function CardContent({cardScore, cardText, cardNumber, numberColor}) {
  return (
    <CardContentStyle>
      <Grid item >
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
    </CardContentStyle>
  )
}
