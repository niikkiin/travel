import React from 'react';

// styled components
import { MessageHeaderWrapper, HeaderContainer } from 'components/message-header/message-header.styles';
// image
import profile5 from 'assets/profile5.jpg';

// icons
import { Icon } from '@iconify/react';
import bxDotsVerticalRounded from '@iconify/icons-bx/bx-dots-vertical-rounded';
const MessageHeader = () => {
	return (
		<MessageHeaderWrapper>
			<div className='avatar' style={{ backgroundImage: 'url(' + profile5 + ')' }}></div>
			<HeaderContainer>
				<div className='name-details'>
					<div className='name'>Samantha Smitt</div>
					<div className='time'>Online 17 hours ago</div>
				</div>
				<div className='country'>United Kingdom</div>
				<div className='settings'>
					<Icon icon={bxDotsVerticalRounded} className='icon' />
				</div>
			</HeaderContainer>
		</MessageHeaderWrapper>
	);
};

export default MessageHeader;
