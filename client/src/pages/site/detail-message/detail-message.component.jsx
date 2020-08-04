import React from 'react';

// styled components
import {
	MessengerContainer,
	MessagesContainer,
	MessageHeaderContainer,
	MessageBox,
} from 'pages/site/messaging/messaging.styles';

// components
import { SendMessage } from 'components/send-message/send-message.component';
import MessageHeader from 'components/message-header/message-header.component';

// styled components
import { HeaderDetails, PastedHeader, MessageHeaderBubble } from 'pages/site/detail-message/detail-message.styles';

// image
import post1 from 'assets/post1.webp';

const DetailMessage = () => {
	return (
		<MessengerContainer>
			<MessageHeaderContainer>
				<MessageHeader />
			</MessageHeaderContainer>
			<MessagesContainer>
				<div className='messages'>
					<MessageHeaderBubble>
						<div className='with-time'>
							<div className='time-span'>You - 7:42:19 AM</div>
							<div className='sent'>
								<HeaderDetails>
											<div className='timestamp'>10:54PM August 01, 2020</div>
											<div className='title'>Eco-Tours destinations 25% off</div>
											<div className='img'>
												<img src={post1} alt="Eco-Tours destinations 25% off" />
											</div>
								</HeaderDetails>
							</div>
						</div>
						<div className='space'></div>
					</MessageHeaderBubble>
				</div>
			</MessagesContainer>
			<PastedHeader>
					<div className='header-items'>
						<div className='img-container'>
							<img src={post1} alt="Eco-Tours destinations 25% off" />
						</div>
						<div className='post-header-details'>
							<div className='title'>Eco-Tours destinations 25% off</div>
							<div className='timestamp'>10:54PM August 01, 2020</div>
						</div>
						<div className='x-mark'>&#10005;</div>
					</div>
			</PastedHeader>
			<MessageBox>
				<SendMessage />
			</MessageBox>
		</MessengerContainer>
	);
};

export default DetailMessage;