import React from 'react';

// styled components
import { AdditionalInfoContainer } from 'components/additional-info/additional-info.styles';

// components
import { AccountFormInput } from 'components/form-input/form-input.component';

// import '@pathofdev/react-tag-input/build/index.css';

// react-select
import Select from 'react-select';

// icons
import { InlineIcon } from '@iconify/react';
import cameraIcon from '@iconify/icons-bytesize/camera';

const AdditionalInfo = ({ formData, handleChange, handleProfilePicChange, updateQuery, keyPressed, removeTag }) => {
	const TAG_MAX_LENGTH = 15;
	const { avatar, website, phoneNumber, address, tag, travelTags } = formData;

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
          <div className='add-profile-picture-text'>Add Profile Picture</div>
				</div>
				{/* SECTION TWO */}
				<div className='additional-inputs'>
					<AccountFormInput
						type='url'
						label='Website Address'
						name='website'
						handleChange={(e) => handleChange(e)}
						value={website}
					/>
					<AccountFormInput
						type='number'
						minLength='11'
						min='0'
						handleChange={(e) => handleChange(e)}
						label='Telephone Number'
						name='phoneNumber'
						value={phoneNumber}
					/>

					<div className='edit-travel-tags'>
						<div className='tag-label'>Service Area</div>
						<Select className='create-select' placeholder='Service Area' options={serviceAreaOptions} />
					</div>

					<AccountFormInput
						type='text'
						handleChange={(e) => handleChange(e)}
						label='Address'
						name='address'
						value={address}
					/>

					<div className='travel-tags'>
						{travelTags.length === 10 ? <div className='tag-error'>Max of ten tags</div> : null}
						<div className='tag-input-container'>
							<AccountFormInput
								className={travelTags.length === 10 ? 'tag-input disable' : 'tag-input '}
								disabled={travelTags.length === 10 ? true : false}
								label='Travel Tags'
								type='text'
								maxLength={TAG_MAX_LENGTH}
								onChange={updateQuery}
								onKeyPress={keyPressed}
								value={tag}
							/>

							{/* <div className={tag.length === TAG_MAX_LENGTH ? 'tag-length full-length' : 'tag-length'}>
								{tag.length} / {TAG_MAX_LENGTH}
							</div> */}
						</div>
						<div className='tag-lists'>
							{travelTags.map((tag, i) => (
								<li className='tag-list' key={i}>
									<div className='tag-container'>{tag}</div>
									<button className='remove-mark' value={tag} onClick={removeTag}>
										&#215;
									</button>
								</li>
							))}
						</div>
					</div>
				</div>
			</div>
		</AdditionalInfoContainer>
	);
};

export default AdditionalInfo;
