import React from 'react';

// styled components
import { SiteLayoutContainer, AccountContainer } from 'layouts/layout.styles';
import Header from 'components/header/header.component';
import { SideProfile } from 'components/side-profile/side-profile.component';

// components

const AccountLayout = ({ children }) => {
	return (
		<SiteLayoutContainer>
			<Header />
			<div className='scroll-main'>
				{/* <main className='center'> */}
					<AccountContainer>
						<div className='account-box'>
							<div className='side-profile'>
								<SideProfile />
							</div>
							<div className='profile-contents'>{children}</div>
						</div>
					</AccountContainer>
				{/* </main> */}
			</div>
		</SiteLayoutContainer>
	);
};

AccountLayout.propTypes = {};

AccountLayout.defaultProps = {};

export default AccountLayout;
