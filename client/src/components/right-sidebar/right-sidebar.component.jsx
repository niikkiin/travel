import React from 'react'
import { StaticBoxes } from 'components/static-boxes/static-boxes.component'

// styled components
import {
  RightSidebarContainer
} from 'components/right-sidebar/right-sidebar.styles';

export const RightSidebar = () => {
  return (
    <RightSidebarContainer className='is-phone-hidden'>
      <StaticBoxes />
    </RightSidebarContainer>
  )
}