import React, { useState } from 'react';

// styled components
import { InfoPageContainer, SkipButton } from 'pages/site/info/info.styles';

// components
import { FormInput } from 'components/form-input/form-input.component';
import { CustomButton } from 'components/custom-button/custom-button.component';

// import '@pathofdev/react-tag-input/build/index.css';

// react-select
import Select from 'react-select';

// images
import defaultAvatar from 'assets/default_avatar.png';

// icons
import { InlineIcon } from '@iconify/react';
import cameraIcon from '@iconify/icons-bytesize/camera';

export const InfoPage = () => {
	const [formData, setFormData] = useState({
		avatar: defaultAvatar,
		website: '',
		phoneNumber: '',
		serviceArea: '',
		address: '',
		tag: '',
		travelTags: [],
	});

	const { avatar, website, phoneNumber, address, tag, travelTags } = formData;

	const TAG_MAX_LENGTH = 15;

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleClick = () => {
		setFormData({...formData, travelTags: [...formData.travelTags, tag]});
	};
	
	const updateQuery = ({ target }) => {
		// Update query onKeyPress of input box
		// setTag(target.value)
		setFormData({ ...formData, tag: target.value });
	};
	

	const removeTag = (e) => {
		const toRemove = e.target.value;
		const name = travelTags.filter((item) => item !== e.target.value);
		console.log("newlist", name, "item", toRemove);
		// setFormData({...formData, });
	};

	const keyPressed = ({ key }) => {
		// Capture search on Enter key
		if (key === 'Enter') {
			handleClick();
			// setFormData({ ...formData, tag: '' });
		}
	};

	const handleProfilePicChange = (e) => {
		const reader = new FileReader();
		reader.onload = () => {
			if (reader.readyState === 2) {
				setFormData({ ...formData, avatar: reader.result });
			}
		};
		reader.readAsDataURL(e.target.files[0]);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// setFormData({ ...formData, travelTags: tags });
	};

	const serviceAreaOptions = [
		{ value: 'global', label: 'Global' },
		{ value: 'regional', label: 'Regional' },
		{ value: 'local', label: 'Local' },
	];

	return (
		<InfoPageContainer>
			<h1 className='title'>Welcome!</h1>
			<h3> Please add some additional information about your travel business.</h3>
			<form className='form' onSubmit={(e) => handleSubmit(e)} noValidate>
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

				<Select placeholder='Service Area' options={serviceAreaOptions} />

				<FormInput
					type='text'
					handleChange={(e) => handleChange(e)}
					label='Address'
					name='address'
					value={address}
				/>

				<div className='travel-tags'>
					{travelTags.length === 10 ? <div className='tag-error'>Max of ten tags</div> : null}
					<div className='tag-input-container'>
						<FormInput
							className={travelTags.length === 10 ? 'tag-input disable' : 'tag-input '}
							disabled={travelTags.length === 10 ? true : false}
							label='Travel Tags'
							type='text'
							maxLength={TAG_MAX_LENGTH}
							onChange={updateQuery}
							onKeyPress={keyPressed}
							value={tag}
						/>

						<div className={tag.length === TAG_MAX_LENGTH ? 'tag-length full-length' : 'tag-length'}>
							{tag.length} / {TAG_MAX_LENGTH}
						</div>
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

				<div className='btn-container'>
					<CustomButton type='submit'>Submit</CustomButton>
					<SkipButton to='/'>Skip</SkipButton>
				</div>
			</form>
		</InfoPageContainer>
	);
};
