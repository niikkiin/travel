import React from 'react';

// import { Main } from 'sections/main/main.styles';
import { Contents } from 'layouts/layout.styles';
import Header from 'sections/header/header.component';
import { LeftSidebar } from 'sections/left-sidebar/left-sidebar.component';
import { RightSidebar } from 'sections/right-sidebar/right-sidebar.component';

const DefaultLayout = ({ children }) => {
	return (
		<Contents>
			<div className='wrap'>
				<Header />
				<div className='main'>
					<div className='bodywrap'>
						<LeftSidebar />
						<RightSidebar />
						<div className='scroll'>
							<div className='center'>{children}</div>
						</div>
					</div>
				</div>
			</div>
		</Contents>
	);
};

export default DefaultLayout;
