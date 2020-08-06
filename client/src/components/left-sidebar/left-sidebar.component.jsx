import React from 'react'
import { StaticBoxes } from 'components/static-boxes/static-boxes.component'

// styled components
import {
  LeftSidebarContainer
} from 'components/left-sidebar/left-sidebar.styles';

export const LeftSidebar = () => {
  return (
    <LeftSidebarContainer className='is-phone-hidden'>
      <StaticBoxes />
    </LeftSidebarContainer>
  )
}