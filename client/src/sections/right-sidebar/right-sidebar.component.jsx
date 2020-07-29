import React from 'react'
import { StaticBoxes } from 'components/static-boxes/static-boxes.component'

// styled components
import {
  RightSidebarContainer
} from 'sections/right-sidebar/right-sidebar.styles';

export const RightSidebar = () => {
  return (
    <RightSidebarContainer>
      <StaticBoxes />
    </RightSidebarContainer>
  )
}