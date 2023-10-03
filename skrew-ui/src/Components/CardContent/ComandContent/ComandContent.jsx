import { Container } from '@mui/system'
import React from 'react'
import SwapComandContent from './SwapComandContent'
import ThrewComandContent from './ThrewComandContent'
import WachOneForEveryoneComandContent from './WachOneForEveryoneComandContent'

export default function ComandContent({comand}) {
    const handelComandContent = () => {
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

  return (
    <Container>
        {handelComandContent()}
    </Container>
  )
}
