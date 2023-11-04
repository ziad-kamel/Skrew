import { Container } from '@mui/system'
import React from 'react'
import SwapComandContent from './SwapComandContent'
import ThrewComandContent from './ThrewComandContent'
import WachOneForEveryoneComandContent from './WachOneForEveryoneComandContent'

const ChooseComandContent = (comand) => {
    if(comand.isSwap){
        return <SwapComandContent/>
    }
    else if(comand.isWachForEveryone){
        return <WachOneForEveryoneComandContent/>
    }
    else if(comand.isThrew){
        return <ThrewComandContent/>
    }
}
export default function ComandContent({comand}) {

  return (
    <Container>
        {ChooseComandContent(comand)}
    </Container>
  )
}
