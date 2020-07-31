import React from 'react';

// styled components
import { SendMessageContainer, InputMessage, SendFileBox } from 'components/send-message/send-message.styles';

// icons
import { Icon } from '@iconify/react';
import paperClip from '@iconify/icons-si-glyph/paper-clip';

export const SendMessage = ({handleChange, onKeyPress, value}) => {
	return (
		<SendMessageContainer>
      <div className="input-container">
			<InputMessage value={value} onKeyPress={onKeyPress} onChange={handleChange} type='text' placeHolder='Type message here' />
			<SendFileBox>
				<Icon className='icon' icon={paperClip} />
			</SendFileBox>

      </div>
			{/* <SendFile type='file' /> */}
		</SendMessageContainer>
	);
};
