import React from 'react';

import { AccountTypeContainer } from 'components/choose-account-type/choose-account-type.styles';

import { RadioButtonTwo } from 'components/radio-button/radio-button.component';

const ChooseAccountType = ({ handleRadioChange }) => {
	return (
		<AccountTypeContainer>
			<div className='helper-text'>Choose your account type</div>
			<div className='user-type-selection'>
				<RadioButtonTwo
					value='Business'
					handleRadioChange={(e) => handleRadioChange(e)}
					name='userType'
					label='Business'
				/>
				<RadioButtonTwo
					value='Traveler'
					handleRadioChange={(e) => handleRadioChange(e)}
					name='userType'
					label='Traveler'
				/>
			</div>
		</AccountTypeContainer>
	);
};

export default ChooseAccountType;
