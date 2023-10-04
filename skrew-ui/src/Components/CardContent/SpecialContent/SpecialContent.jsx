import { Container } from '@mui/system'
import React from 'react'
import Plus20SpecialContent from './Plus20SpecialContent'

const chooseSpecialContent = (special) =>{
    if(special.isPlus20){
        return <Plus20SpecialContent />
    }
    
}

export default function SpecialContent({special}) {
  return (
    <Container >
        {chooseSpecialContent(special)}
    </Container>
  )
}
