import React from 'react';

// styled components
import { HeaderContainer } from 'components/header/header.styles';
import { ProfilePreview } from 'components/profile-preview/profile-preview.component';
import HeaderNavigation from 'components/header-navigation/header-navigation.component';
import { DesktopBreakpoint, HighResDesktopBreakpoint } from 'utilities/responsiveness/device-breakpoints.utility';
import { TabletPortraitBreakpoint } from 'utilities/responsiveness/device-breakpoints.utility';
import { TabletLandscapeBreakpoint } from 'utilities/responsiveness/device-breakpoints.utility';

const Header = () => {
	return (
		<HeaderContainer>
			<HighResDesktopBreakpoint>
				<div className='logo'>Logo Goes Here</div>
				<HeaderNavigation />
				<ProfilePreview />
			</HighResDesktopBreakpoint>
			<DesktopBreakpoint>
				<div className='logo'>Logo Goes Here</div>
				<HeaderNavigation />
				<ProfilePreview />
			</DesktopBreakpoint>
			<TabletLandscapeBreakpoint>
				<div className='logo'>Logo Goes Here</div>
				<HeaderNavigation />
				<ProfilePreview />
			</TabletLandscapeBreakpoint>
			<TabletPortraitBreakpoint>
				<div className='logo'>Logo Goes Here</div>
				<HeaderNavigation />
				<ProfilePreview />
			</TabletPortraitBreakpoint>
		</HeaderContainer>
	);
};

export default Header;
