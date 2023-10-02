import React from 'react';
import BRCardScore from './BRCardScore';
import TLCardScore from './TLCardScore';

export default function CardScores({cardScore, borderColor}) {
  var retval = false;
  if(cardScore === 6 || cardScore === 9)
  retval = true;
  return (
    <>
        <TLCardScore borderColor={borderColor} cardScore={cardScore} lined={retval}/>
        <BRCardScore borderColor={borderColor} cardScore={cardScore} lined={retval}/>
    </>
  )
}
