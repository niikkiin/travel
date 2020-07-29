import React from 'react';

// import { Main } from 'sections/main/main.styles';
import { MainContainer, Main } from 'layouts/layout.styles';
import Header from 'sections/header/header.component';
import { LeftSidebar } from 'sections/left-sidebar/left-sidebar.component';
import { RightSidebar } from 'sections/right-sidebar/right-sidebar.component';

const DefaultLayout = ({ children }) => {
	return (
		<MainContainer>
			<Header />
			<div id='content'>
			<Main>
				<LeftSidebar />
				<div className='main-content'>{children}</div>
				<RightSidebar />
			</Main>
			</div>
		</MainContainer>
	);
};

export default DefaultLayout;
