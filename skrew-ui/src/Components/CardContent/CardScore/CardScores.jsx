import React from 'react';
import BRCardScore from './BRCardScore';
import TLCardScore from './TLCardScore';

export default function CardScores({cardScore, borderColor, content}) {
  var lined = false;
  if(cardScore === 6 || cardScore === 9)
  lined = true;
  return (
    <>
        <TLCardScore borderColor={borderColor} cardScore={cardScore} lined={lined} content={content}/>
        <BRCardScore borderColor={borderColor} cardScore={cardScore} lined={lined} content={content}/>
    </>
  )
}
