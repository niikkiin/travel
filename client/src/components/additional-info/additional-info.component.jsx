import React from 'react';

// styled components
import { AdditionalInfoContainer } from 'components/additional-info/additional-info.styles';

// components
import { FormInput } from 'components/form-input/form-input.component';

// import '@pathofdev/react-tag-input/build/index.css';

// react-select
import Select from 'react-select';

// icons
import { InlineIcon } from '@iconify/react';
import cameraIcon from '@iconify/icons-bytesize/camera';

const AdditionalInfo = ({ formData, handleChange, handleProfilePicChange, updateQuery, keyPressed, removeTag }) => {

	const { avatar, website, phoneNumber, address } = formData;

	const serviceAreaOptions = [
		{ value: 'global', label: 'Global' },
		{ value: 'regional', label: 'Regional' },
		{ value: 'local', label: 'Local' },
	];

	return (
		<AdditionalInfoContainer>
			<h3> Please add some additional information about your travel business.</h3>
			<div className='additional-section'>
				{/* SECTION ONE */}
				<div className='profile-avatar'>
					<label htmlFor='avatar-picture'>
						<img src={avatar} className='image--cover' alt='avatar' />
						<div className='label-upload'>
							<InlineIcon icon={cameraIcon} className='icon' />
							<div className='upload-text'> Upload avatar</div>
						</div>

					</label>
					<input
						id='avatar-picture'
						type='file'
						accept='image/*'
						name='avatar'
						onChange={(e) => handleProfilePicChange(e)}
					/>
				</div>
				{/* SECTION TWO */}
				<div className='additional-inputs'>
					<FormInput
						type='url'
						label='Website Address'
						name='website'
						handleChange={(e) => handleChange(e)}
						value={website}
					/>
					<FormInput
						type='number'
						minLength='11'
						min='0'
						handleChange={(e) => handleChange(e)}
						label='Telephone Number'
						name='phoneNumber'
						value={phoneNumber}
					/>

					{/* <div className='edit-travel-tags'>
						<div className='tag-label'>Service Area</div> */}
						<Select className='create-select' placeholder='Service Area' options={serviceAreaOptions} />
					{/* </div> */}

					<FormInput
						type='text'
						handleChange={(e) => handleChange(e)}
						label='Address'
						name='address'
						value={address}
					/>
				</div>
			</div>
		</AdditionalInfoContainer>
	);
};

export default AdditionalInfo;
