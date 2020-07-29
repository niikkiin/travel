import React from 'react'

// styled components
import { HeaderContainer } from 'sections/header/header.styles';
import { ProfilePreview } from 'components/profile-preview/profile-preview.component';
import HeaderNavigation  from 'components/header-navigation/header-navigation.component';

const Header = () => {
  return (
    <HeaderContainer>
      <div className="logo">Logo Goes Here</div>
      <HeaderNavigation />
      <ProfilePreview />
    </HeaderContainer>
  )
}

export default Header;