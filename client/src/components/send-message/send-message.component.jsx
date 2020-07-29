import React from 'react';

// styled components
import { SendMessageContainer, InputMessage, SendFileBox } from 'components/send-message/send-message.styles';

// icons
import { Icon } from '@iconify/react';
import paperClip from '@iconify/icons-si-glyph/paper-clip';

export const SendMessage = () => {
	return (
		<SendMessageContainer>
      <div className="input-container">
			<InputMessage type='text' placeHolder='Type message here' />
			<SendFileBox>
				<Icon className='icon' icon={paperClip} />
			</SendFileBox>

      </div>
			{/* <SendFile type='file' /> */}
		</SendMessageContainer>
	);
};
