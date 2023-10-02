import React from 'react'
import ReactCurvedText from 'react-curved-text'

export default function ViewOthersText({cardText, cardTextColor}) {
  return (
    <div className='path' style={{position: 'absolute', top:'74px'}}>
        <ReactCurvedText 
            width='18rem'
            height='5rem'
            cx='148'
            cy='92'
            rx='105 '
            ry='66'
            startOffset='16'
            reversed={true}
            text={cardText}
            textProps={{"style": {"fontSize": "40", "fontFamily":`'Amiri', serif`, fontWeight:'bold'}}}
            textPathProps={{"fill": cardTextColor}}
            tspanProps={{"dy": "0"}}
            ellipseProps={null}
            svgProps={{"style": {"transform": "rotate(0deg)"}}} />
  </div>
  )
}
