import React, { useState } from 'react';
import { AccountFormInput } from 'components/account-form-input/account-form-input.component';
import { CustomButton } from 'components/custom-button/custom-button.component';

export const ChangePassword = () => {
	const [formData, setFormData] = useState({
		oldPassword: '',
		newPassword: '',
		confirmNewPassword: '',
	});

	const { oldPassword, newPassword, confirmNewPassword } = formData;

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
	};

	return (
		<div>
			<h2>Change Password</h2>
			<form onSubmit={(e) => handleSubmit(e)} noValidate>
				<AccountFormInput
					type='password'
					label='Current Password'
					name='oldPassword'
					handleChange={(e) => handleChange(e)}
					value={oldPassword}
					required
					autoComplete='new-password'
				/>
				<AccountFormInput
					type='password'
					label='New Password'
					name='newPassword'
					handleChange={(e) => handleChange(e)}
					value={newPassword}
					required
					autoComplete='new-password'
				/>
				<AccountFormInput
					type='password'
					label='Confirm New Password'
					name='confirmNewPassword'
					handleChange={(e) => handleChange(e)}
					value={confirmNewPassword}
					required
					autoComplete='new-password'
				/>
				<div className='edit-btn-container' style={{ display: 'flex', marginLeft: '-6rem' }}>
					<CustomButton type='submit'>Save Changes</CustomButton>
				</div>
			</form>
		</div>
	);
};
