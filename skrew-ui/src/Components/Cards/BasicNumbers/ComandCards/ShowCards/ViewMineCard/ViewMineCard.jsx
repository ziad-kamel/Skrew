import { Container } from '@mui/system';
import React from 'react';
import GenericCard from '../../../../GenericCard/GenericCard';
import MineExtraElement from './MineExtraElement';

export default function viewMineCard({cardScore, cardNumber, numberColor, cardText, underLined}) {
  
  return (
    <Container>
      <GenericCard cardScore={cardScore} cardNumber={cardNumber} numberColor={numberColor} cardText={cardText} underLined={underLined} extraElements={<MineExtraElement cardsColor={numberColor}/>} />
    </Container>
  )
}
