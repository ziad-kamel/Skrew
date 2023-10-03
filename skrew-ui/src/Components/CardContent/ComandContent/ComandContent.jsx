import { Container } from '@mui/system'
import React from 'react'
import SwapComandContent from './SwapComandContent'
import WachOneForEveryoneComandContent from './WachOneForEveryoneComandContent'

export default function ComandContent({comand}) {
    const handelComandContent = () => {
        if(comand.isSwap){
            return <SwapComandContent/>
        }
        else if(comand.isWachForEveryone){
            return <WachOneForEveryoneComandContent/>
        }
    }

  return (
    <Container>
        {handelComandContent()}
    </Container>
  )
}
