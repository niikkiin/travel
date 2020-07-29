import React from 'react';

// styled components
import { SideProfileContainer } from 'components/side-profile/side-profile.styles';
import { NavLink } from 'react-router-dom';

// data
import {ACCOUNT_PROFILE_DATA} from 'data/account-routes';

export const SideProfile = () => {
	const links = ACCOUNT_PROFILE_DATA;
	return (
		<SideProfileContainer>
			{links.map((link) => {
				const { id, name, routeName } = link;
				return (
					<NavLink activeClassName='active' key={id} to={routeName} className='side-profile-list'>
						{name}
					</NavLink>
				);
			})}
		</SideProfileContainer>
	);
};
