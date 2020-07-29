import React, { useState } from 'react';

// styled components
import { BusinessProfileAccountContainer } from 'pages/business-profile-account/business-profile-account.styles';

// image
import profile1 from 'assets/profile1.jpg';

// react-select
import Select from 'react-select';
import CreateSelect from 'react-select/creatable';
import { AccountFormInput } from 'components/account-form-input/account-form-input.component';

import makeAnimated from 'react-select/animated';
import { CustomButton } from 'components/custom-button/custom-button.component';
import { ShowHideContainer } from 'components/show-hide-container/show-hide-container.component';

// redux
import { toggleChangeProfilePicture } from 'store/actions/change-profile-image.actions';
import { connect } from 'react-redux';
import ChangeProfile from 'components/change-profile/change-profile.component';

const animatedComponents = makeAnimated();

const BusinessProfileAccount = ({hidden, toggleChangeProfilePicture}) => {
	const [formData, setFormData] = useState({
		avatarImg: profile1,
		firstName: 'Matthew',
		lastName: 'Codina',
		email: 'matt.codina@gmail.com',
		businessName: '',
		website: '',
		address: '',
		phoneNumber: '',
		serviceArea: '',
		travelTags: [''],
	});

	// const [tags] = React.useState(['travel']);

	const {
		avatarImg,
		firstName,
		lastName,
		email,
		businessName,
		website,
		address,
		phoneNumber,
	} = formData;

	const [avatar, setAvatar] = useState({
		imageURL: '',
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
	};

	const serviceAreaOptions = [
		{ value: 'global', label: 'Global' },
		{ value: 'regional', label: 'Regional' },
		{ value: 'local', label: 'Local' },
	];

	const fullName = firstName + ' ' + lastName;
	return (
		<BusinessProfileAccountContainer>
			<div className='change-profile'>
				<div className='avatar' style={{ backgroundImage: 'url(' + avatarImg + ')' }}></div>
				<div className='name-and-update'>
					<div className='name'>{fullName}</div>
					<div className='change-profile-option' onClick={toggleChangeProfilePicture}>
						Change Profile Picture
					</div>
				</div>
			</div>
				<ShowHideContainer doShow={hidden}>
				<ChangeProfile
					avatar={avatar}
					formData={formData}
					setAvatar={setAvatar}
					setFormData={setFormData}
				/>
			</ShowHideContainer>
			<form className='form' onSubmit={(e) => handleSubmit(e)} noValidate>
				<AccountFormInput
					type='text'
					label='First Name'
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
				{/* SECTION BUSINESS AREA */}
				<AccountFormInput
					type='text'
					label='Business Name'
					name='businessName'
					handleChange={(e) => handleChange(e)}
					value={businessName}
					autoComplete='new-password'
				/>
				<AccountFormInput
					type='url'
					label='Website Address'
					name='website'
					handleChange={(e) => handleChange(e)}
					value={website}
					autoComplete='new-password'
				/>
				<AccountFormInput
					type='text'
					label='Address'
					name='address'
					handleChange={(e) => handleChange(e)}
					value={address}
					autoComplete='new-password'
				/>
				<AccountFormInput
					type='text'
					label='Phone Number'
					name='phoneNumber'
					handleChange={(e) => handleChange(e)}
					value={phoneNumber}
					autoComplete='new-password'
				/>
				<div className='edit-travel-tags'>
					<div className='tag-label'>Service Area</div>
					<Select className='create-select' placeholder='Service Area' options={serviceAreaOptions} />
				</div>
				<div className='edit-travel-tags'>
					<div className='tag-label'>
						Travel Tags
					</div>
					<CreateSelect
						className='create-select'
						components={animatedComponents}
						closeMenuOnSelect={false}
						isMulti
						options={travelTagSuggestions}
						placeholder="Create new tag and enter"
					/>
				</div>
				<div className='edit-btn-container' style={{ display: 'flex', marginLeft: '-6rem' }}>
					<CustomButton type='submit'>Update Profile</CustomButton>
				</div>
			</form>
		</BusinessProfileAccountContainer>
	);
};

const travelTagSuggestions = [
  { value: 'Travel Agent', label: 'Travel Agent', color: '#00B8D9' },
  { value: 'Discount Flights', label: 'Discount Flights', color: '#0052CC' },	
];

const mapStateToProps = ({ changeProfileImage: { hidden } }) => ({
	hidden,
});


export default connect(mapStateToProps, {toggleChangeProfilePicture})(BusinessProfileAccount);