import React, { useEffect } from 'react';

// redux
import { connect } from 'react-redux';
import { getPost } from 'store/actions/posts.actions';

// styled components
import {
	MessengerContainer,
	MessagesContainer,
	MessageHeaderContainer,
	MessageBox,
} from 'pages/messenger/messenger.styles';
import { SendMessage } from 'components/send-message/send-message.component';
import MessageHeader from 'components/message-header/message-header.component';
import { HeaderDetails, PastedHeader, MessageHeaderBubble } from './detail.styles';

const Details = ({ getPost, post: { post, loading }, match }) => {
	useEffect(() => {
		getPost();
	}, [getPost]);

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
									{post.map((p) => (
										<>
											<div className='timestamp'>{p.timestamp}</div>
											<div className='title'>{p.title}</div>
											<div className='img'>
												<img src={p.thumbnail} alt={p.title} />
											</div>
										</>
									))}
								</HeaderDetails>
							</div>
						</div>
						<div className='space'></div>
					</MessageHeaderBubble>
				</div>
			</MessagesContainer>
			<PastedHeader>
				{post.map((p) => (
					<div className='header-items'>
						<div className='img-container'>
							<img src={p.thumbnail} alt={p.title} />
						</div>
						<div className='post-header-details'>
							<div className='title'>{p.title}</div>
							<div className='timestamp'>{p.timestamp}</div>
						</div>
						<div className='x-mark'>&#10005;</div>
					</div>
				))}
			</PastedHeader>
			<MessageBox>
				<SendMessage />
			</MessageBox>
		</MessengerContainer>
	);
};

const mapStateToProps = (state) => ({
	post: state.post,
});

export default connect(mapStateToProps, { getPost })(Details);
