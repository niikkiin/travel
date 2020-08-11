import React from 'react';

// components
import { FormInput } from 'components/form-input/form-input.component';
import { RadioButton } from 'components/radio-button/radio-button.component';

const RegisterForm = ({ formData, handleRadioChange, handleChange }) => {
	const { business, userType, firstName, lastName, email, password, confirmPassword } = formData;

	const FormTraveler = (
			<>
				<FormInput
					type='text'
					label='First Name'
					id='firstName'
					name='firstName'
					handleChange={(e) => handleChange(e)}
					value={firstName}
					required
					autoComplete='new-password'
				/>
				<FormInput
					type='text'
					label='Last Name'
					name='lastName'
					handleChange={(e) => handleChange(e)}
					value={lastName}
					required
					autoComplete='new-password'
				/>
				<FormInput
					type='email'
					label='Email Address'
					name='email'
					handleChange={(e) => handleChange(e)}
					value={email}
					required
					autoComplete='new-password'
				/>
				<FormInput
					type='password'
					label='Password'
					name='password'
					handleChange={(e) => handleChange(e)}
					value={password}
					required
					autoComplete='new-password'
				/>
				<FormInput
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
	const FormBusiness = (
			<>
				<FormInput
					type='text'
					label='First Name'
					id='firstName'
					name='firstName'
					handleChange={(e) => handleChange(e)}
					value={firstName}
					required
					autoComplete='new-password'
				/>
				<FormInput
					type='text'
					label='Last Name'
					name='lastName'
					handleChange={(e) => handleChange(e)}
					value={lastName}
					required
					autoComplete='new-password'
				/>
				<FormInput
					type='email'
					label='Email Address'
					name='email'
					handleChange={(e) => handleChange(e)}
					value={email}
					required
					autoComplete='new-password'
				/>
				<FormInput
					type='text'
					label='Business Name'
					name='business'
					handleChange={(e) => handleChange(e)}
					value={business}
					required
					autoComplete='new-password'
				/>
				<FormInput
					type='password'
					label='Password'
					name='password'
					handleChange={(e) => handleChange(e)}
					value={password}
					required
					autoComplete='new-password'
				/>
				<FormInput
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

	const getFormType = (type) => {
		if (type === 'Business') {
			return FormBusiness;
		} else {
			return FormTraveler;
		}
	};

	return (
		<>
			<div className='user-type'>
				<div className='helper-text'>Choose your account type</div>
				<div className='user-type-selection' style={{ display: 'flex'}}>
					<RadioButton
						value='Business'
						handleRadioChange={(e) => handleRadioChange(e)}
						name='userType'
						label='Business'
					/>
					<RadioButton
						value='Traveler'
						handleRadioChange={(e) => handleRadioChange(e)}
						name='userType'
						label='Traveler'
					/>
				</div>
			</div>
			{userType ? getFormType(userType) : null}
		</>
	);
};

export default RegisterForm;
