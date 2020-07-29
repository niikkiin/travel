import React, { useState } from 'react';

// styled components
import { InfoPageContainer, SkipButton } from 'pages/info/info.styles';

// components
import { FormInput } from 'components/form-input/form-input.component';
import { CustomButton } from 'components/custom-button/custom-button.component';

import '@pathofdev/react-tag-input/build/index.css';

// react-select
import Select from 'react-select';
import CreateSelect from 'react-select/creatable';

import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

export const InfoPage = () => {
	const [formData, setFormData] = useState({
		website: '',
		phoneNumber: '',
		serviceArea: '',
		travelTags: [''],
		address: '',
	});

	const { website, phoneNumber, address } = formData;

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
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
	const travelTagSuggestions = [
		{ value: 'Travel Agent', label: 'Travel Agent', color: '#00B8D9' },
		{ value: 'Discount Flights', label: 'Discount Flights', color: '#0052CC' },	
	];	

	return (
		<InfoPageContainer>
			<h1 className='title'>Welcome!</h1>
			<h3> Please add some additional information about your travel business.</h3>
			<form className='form' onSubmit={(e) => handleSubmit(e)} noValidate>
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
        <div className='tag-label'>
						Travel Tags
					</div>
          <CreateSelect placeholder="Type to create new tag and enter" options={travelTagSuggestions} components={animatedComponents} closeMenuOnSelect={false} isMulti />
          </div>



				<div className='btn-container'>
					<CustomButton type='submit'>Submit</CustomButton>
					<SkipButton to='/'>Skip</SkipButton>
				</div>
			</form>
		</InfoPageContainer>
	);
};
