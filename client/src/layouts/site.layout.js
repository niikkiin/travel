import React from 'react';

// styled components
import { SiteLayoutContainer } from 'layouts/layout.styles';

// components
import Header from 'components/header/header.component';
import { LeftSidebar } from 'components/left-sidebar/left-sidebar.component';
import { RightSidebar } from 'components/right-sidebar/right-sidebar.component';

const SiteLayout = ({ children }) => {
	return (
		<SiteLayoutContainer>
			<Header />
			<div className='scroll-main'>
				<LeftSidebar />
				<RightSidebar />
				<div className='center'>
				{children}
				</div>
			</div>
		</SiteLayoutContainer>
	);
};

export default SiteLayout;
