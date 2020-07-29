import React from 'react';

// styled components
import { AccountContainer, MainContainer } from 'layouts/layout.styles';

// components
import { SideProfile } from 'components/side-profile/side-profile.component';
import Header from 'sections/header/header.component';

const AccountLayout = ({ children }) => {
	return (
		// <>
		// 	<Header />
		// 	<AccountContainer>
		// 		<div className='account-box'>
		// 			<div className='side-profile'>
		// 				<SideProfile />
		// 			</div>
		// 			<div className='profile-contents'>
		// 				{children}
		// 			</div>
		// 		</div>
		// 	</AccountContainer>
		// </>
		<MainContainer>
			<Header />
			<div id='content'>
				<AccountContainer>
					<div className='account-box'>
						<div className='side-profile'>
							<SideProfile />
						</div>
						<div className='profile-contents'>{children}</div>
					</div>
				</AccountContainer>
			</div>
		</MainContainer>
	);
};

AccountLayout.propTypes = {};

AccountLayout.defaultProps = {};

export default AccountLayout;
