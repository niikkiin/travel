import React from 'react'

// styled components
import {StaticBoxesContainer} from 'components/static-boxes/static-boxes.styles';

export const StaticBoxes = () => {
  return (
    <StaticBoxesContainer>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
    </StaticBoxesContainer>
  )
}
