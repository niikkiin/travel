import React from 'react';

// components
import { AccountFormInput } from 'components/form-input/form-input.component';

const RegisterForm = ({ formData, handleChange }) => {
	const { firstName, lastName, email, password, confirmPassword } = formData;

	return (
		<>
			<AccountFormInput
				type='text'
				label='First Name'
				id='firstName'
				name='firstName'
				handleChange={(e) => handleChange(e)}
				value={firstName}
				required
				autoComplete='new-password'
			/>
			<AccountFormInput
				type='text'
				label='Last Name'
				name='lastName'
				handleChange={(e) => handleChange(e)}
				value={lastName}
				required
				autoComplete='new-password'
			/>
			<AccountFormInput
				type='email'
				label='Email Address'
				name='email'
				handleChange={(e) => handleChange(e)}
				value={email}
				required
				autoComplete='new-password'
			/>
			<AccountFormInput
				type='password'
				label='Password'
				name='password'
				handleChange={(e) => handleChange(e)}
				value={password}
				required
				autoComplete='new-password'
			/>
			<AccountFormInput
				type='password'
				label='Confirm Password'
				name='confirmPassword'
				handleChange={(e) => handleChange(e)}
				value={confirmPassword}
				required
				autoComplete='new-password'
			/>
		</>
	);
};

export default RegisterForm;
