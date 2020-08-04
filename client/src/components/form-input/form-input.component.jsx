import React from 'react';

// styled components
import {
	FormInputContainer,
	Input,
	Label,
	AccountFormInputContainer,
	AccountLabel,
	AccountInput,
} from 'components/form-input/form-input.styles';

export const FormInput = ({ handleChange, label, ...props }) => (
	<FormInputContainer>
		<Input autoComplete='off' onChange={handleChange} {...props} />
		{label ? (
			//  className={props.value.length ? 'shrink' : ''}
			<Label htmlFor={label} className={props.value ? 'shrink' : ''}>
				{label}
			</Label>
		) : null}
	</FormInputContainer>
);

export const AccountFormInput = ({ handleChange, label, ...props }) => (
	<AccountFormInputContainer>
		<AccountLabel className='label' htmlFor={label}>
			{label}
		</AccountLabel>
		<AccountInput autoComplete='off' onChange={handleChange} {...props} />
	</AccountFormInputContainer>
);
