import { Container } from '@mui/system'
import React from 'react'
import SwapComandContent from './SwapComandContent'

export default function ComandContent({comand}) {
    const handelComandContent = () => {
        if(comand.isSwap){
            return <SwapComandContent/>
        }
    }

  return (
    <Container>
        {handelComandContent()}
    </Container>
  )
}
