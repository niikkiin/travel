import React from 'react';

// styled components
import { FormInputContainer, Input, Label } from 'components/account-form-input/account-form-input.styles';

export const AccountFormInput = ({ handleChange, label, ...props }) => (
	<FormInputContainer>
		<Label className='label' htmlFor={label}>{label}</Label>
		<Input autoComplete='off' onChange={handleChange} {...props} />
	</FormInputContainer>
);
