import React from 'react';

// styled components
import { FormInputContainer, Input, Label } from 'components/form-input/form-input.styles';

export const FormInput = ({ handleChange, label, ...props }) => (
	<FormInputContainer className='desktop-breakpoint'>
		<Input autoComplete='off' onChange={handleChange} {...props} />
		{label ? (
			//  className={props.value.length ? 'shrink' : ''}
			<Label htmlFor={label} className={props.value ? 'shrink' : ''}>
				{label}
			</Label>
		) : null}
	</FormInputContainer>
);