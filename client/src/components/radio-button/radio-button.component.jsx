import React from 'react';

// styled components
import { RadioButtonContainer } from 'components/radio-button/radio-button.styles';

export const RadioButton = ({ handleRadioChange, label, ...props }) => {
	return (
		<RadioButtonContainer>
			{/* <input type='radio' onChange={handleRadioChange} {...props} />
			<div className='box'>
				<div className='label'>{label}</div>
			</div> */}
			<input type='radio' id={label} name='radio-group' onChange={handleRadioChange} {...props} />
			<label for={label}>{label}</label>
		</RadioButtonContainer>
	);
};
