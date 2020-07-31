import React, { useState } from 'react';

// styled components
import {
	MessengerContainer,
	MessagesContainer,
	MessageHeaderContainer,
	MessageBox,
} from 'pages/messenger/messenger.styles';
import { SendMessage } from 'components/send-message/send-message.component';
import MessageHeader from 'components/message-header/message-header.component';
import MessageReceived from 'components/message-received/message-received.component';
import MessageSent from 'components/message-sent/message-sent.component';

const Messenger = () => {
	const [formData, setFormData] = useState({
		message: 'hello',
	});

	const { message } = formData;

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
    console.log(formData);
    
  };
  
  const onKeyPress = (e) => {
    if(e.which === 13) {
      handleSubmit();
    }
  }

	return (
		<MessengerContainer>
			<MessageHeaderContainer>
				<MessageHeader />
			</MessageHeaderContainer>
			<MessagesContainer>
				<div className='messages'>
					<MessageReceived>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, dignissimos temporibus
						recusandae provident accusamus quis unde labore ab dolores eum. Similique error aut ab fugiat
						minus illo ipsa facere repudiandae.
					</MessageReceived>
					<MessageReceived>Hello</MessageReceived>
					<MessageReceived>Hii</MessageReceived>
					<MessageSent>Hello to you too</MessageSent>
					<MessageSent>h</MessageSent>
					<MessageReceived>How are you?</MessageReceived>
					<MessageSent>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, sunt! Eligendi, doloremque
						ullam ipsam repudiandae tempora dolore aspernatur enim natus aliquam ad fuga? Culpa recusandae
						odit aspernatur esse omnis! Ipsa!
					</MessageSent>
					<MessageSent>I'm fine</MessageSent>
					<MessageReceived>okay</MessageReceived>
					<MessageSent>alright</MessageSent>
				</div>
			</MessagesContainer>
			<MessageBox>
				<form onSubmit={(e)=>handleSubmit(e)}>
					<SendMessage name="message" value={message} onKeyPress={(e) => onKeyPress(e)} handleChange={(e) => handleChange(e)} />
				</form>
			</MessageBox>
		</MessengerContainer>
	);
};
export default Messenger;
