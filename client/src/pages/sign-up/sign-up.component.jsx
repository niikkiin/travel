import React, { useState } from 'react';

// styled components
import { SignUpPageContainer } from 'pages/sign-up/sign-up.styles';

// components
import { FormInput } from 'components/form-input/form-input.component';
import { CustomButton } from 'components/custom-button/custom-button.component';
import { Link } from 'react-router-dom';
import { RadioButton } from 'components/radio-button/radio-button.component';

export const SignUpPage = () => {
	const [formData, setFormData] = useState({
		userType: '',
		firstName: '',
		lastName: '',
		business: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const { userType, firstName, lastName, business, email, password, confirmPassword } = formData;

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const handleRadioChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(formData);
	};

	const FormTraveler = (
		<form className='form' onSubmit={(e) => handleSubmit(e)} noValidate>
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
			<CustomButton
				type='submit'
				disabled={!userType || !firstName || !lastName || !email || !password || !confirmPassword}
			>
				Create an Account
			</CustomButton>
		</form>
	);
	const FormBusiness = (
		<form className='form' onSubmit={(e) => handleSubmit(e)} noValidate>
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
			<CustomButton
				type='submit'
				disabled={!userType || !firstName || !lastName || !email || !password || !confirmPassword}
			>
				Create an Account
			</CustomButton>
		</form>
	);

	const getFormType = (type) => {
		if (type === 'Business') {
			return FormBusiness;
		} else {
			return FormTraveler;
		}
	};
	return (
		<SignUpPageContainer>
			<h1 className='title'>Sign Up</h1>
			<div className='user-type'>
				<div className='helper-text'>Choose your account type</div>
				<div className='user-type-selection'>
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
			<div className='link-to-login'>
				Already have an account?{' '}
				<Link to='/login' className='login'>
					Login here
				</Link>
			</div>
		</SignUpPageContainer>
	);
};
