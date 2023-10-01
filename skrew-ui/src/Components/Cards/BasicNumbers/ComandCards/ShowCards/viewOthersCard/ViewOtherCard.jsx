import { Container } from '@mui/system';
import React from 'react';
import GenericCard from '../../../GenericCard/GenericCard';
import OtherExtraElement from './OtherExtraElement';

export default function viewOtherCard({cardScore, cardNumber, numberColor, cardText}) {
  
  return (
    <Container>
      <GenericCard cardScore={cardScore} cardNumber={cardNumber} numberColor={numberColor} cardText={cardText} extraElements={<OtherExtraElement cardsColor={numberColor}/>} />
    </Container>
  )
}
