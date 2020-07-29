import React from 'react';

// styled components
import { MessageSentContainer } from 'components/message-sent/message-sent.styles';
const MessageSent = ({ children }) => {
	return (
		<MessageSentContainer>
			<div className='with-time'>
				<div className='time-span'>You - 7:42:19 AM</div>
				<div className='sent'>{children}</div>
			</div>
			<div className='space'></div>
		</MessageSentContainer>
	);
};

export default MessageSent;
