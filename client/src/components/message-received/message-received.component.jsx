import React from 'react';

// styled components
import { MessageReceivedContainer } from 'components/message-received/message-received.styles';
const MessageReceived = ({ children }) => {
	return (
		<MessageReceivedContainer>
			<div className='space'></div>
			<div className='with-time'>
				<div className='time-span'>Samantha - 7:42:19 AM</div>
				<div className='receive'>{children}</div>
			</div>
		</MessageReceivedContainer>
	);
};

export default MessageReceived;
