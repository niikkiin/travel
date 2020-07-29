import React from 'react';

// styled components
import { ProfilePreviewContainer, IconContainer } from 'components/profile-preview/profile-preview.styles';

// images
import profile3 from 'assets/profile3.png';

// icon
import { Icon } from '@iconify/react';
import bxCog from '@iconify/icons-bx/bx-cog';

export const ProfilePreview = () => {
	return (
		<ProfilePreviewContainer to='/account-update'>
			<div className='avatar' style={{ backgroundImage: 'url(' + profile3 + ')' }}></div>
			<div className='name'>Sam Rose</div>
			<IconContainer>
				<Icon icon={bxCog} className='icon' />
			</IconContainer>
		</ProfilePreviewContainer>
	);
};
