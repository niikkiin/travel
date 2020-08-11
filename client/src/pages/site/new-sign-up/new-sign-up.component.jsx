import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import { Stepper, Step, StepLabel, StepConnector } from '@material-ui/core';

// styled components
import { SignUpPageContainer } from 'pages/site/new-sign-up/new-sign-up.styles';

// icons
import { Icon } from '@iconify/react';
import bxCheck from '@iconify/icons-bx/bx-check';
import { helpers } from 'utilities/styles/helpers.styles';

// components
import { CustomButton } from 'components/custom-button/custom-button.component';
import ChooseAccountType from 'components/choose-account-type/choose-account-type.component';
import RegisterForm from 'components/register-form/register-form.component';
import AdditionalInfo from 'components/additional-info/additional-info.component';

// router
import { Link } from 'react-router-dom';

// images
import defaultAvatar from 'assets/default_avatar.png';

// color
const { accentColor } = helpers;

const NewSignUp = () => {
	// SECTION STEPPER FUNCTIONS
	const [activeStep, setActiveStep] = React.useState(0);
	const steps = getSteps();

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	// SECTION FORMDATA
	const [formData, setFormData] = useState({
		userType: '',
		firstName: '',
		lastName: '',
		business: '',
		email: '',
		password: '',
		confirmPassword: '',
		// addtl info
		avatar: defaultAvatar,
		website: '',
		phoneNumber: '',
		serviceArea: '',
		address: '',
		tag: '',
		travelTags: [],
	});

	const { tag, travelTags } = formData;

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	// SECTION USER TYPE FUNCTIONS
	const handleRadioChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	// SECTION ADDITIONAL INFO FUNCTIONS
	const handleClick = () => {
		setFormData({ ...formData, travelTags: [...formData.travelTags, tag] });
	};

	const updateQuery = ({ target }) => {
		// Update query onKeyPress of input box
		// setTag(target.value)
		setFormData({ ...formData, tag: target.value });
	};

	const removeTag = (e) => {
		const toRemove = e.target.value;
		const name = travelTags.filter((item) => item !== e.target.value);
		console.log('newlist', name, 'item', toRemove);
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

	// SECTION SET STEP CONTENTS
	const getStepContent = (step) => {
		switch (step) {
			case 0:
				return <ChooseAccountType handleRadioChange={handleRadioChange} />;
			case 1:
				return <RegisterForm formData={formData} handleChange={handleChange} />;
			case 2:
				return (
					<AdditionalInfo
						formData={formData}
						handleChange={handleChange}
						handleProfilePicChange={handleProfilePicChange}
						updateQuery={updateQuery}
						keyPressed={keyPressed}
						removeTag={removeTag}
					/>
				);
			default:
				return 'Unknown step';
		}
	};

	return (
		<SignUpPageContainer>
			<h1 className='title'>Sign Up</h1>
			<Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
				{steps.map((label) => (
					<Step key={label}>
						<StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
					</Step>
				))}
			</Stepper>

			<>
				{activeStep === steps.length ? (
					<div>
						<div className='instructions'>All steps completed - you&apos;re finished</div>
						<CustomButton onClick={handleReset}>Reset</CustomButton>
					</div>
				) : (
					<>
						<div className='instructions'>{getStepContent(activeStep)}</div>
						<div className='steps-container'>
							<div>
								<CustomButton className='opaque' disabled={activeStep === 0} onClick={handleBack}>
									Back
								</CustomButton>
								<CustomButton onClick={handleNext}>
									{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
								</CustomButton>
							</div>
							<div className='link-to-login'>
								Already have an account?{' '}
								<Link to='/login' className='login'>
									Login here
								</Link>
							</div>
						</div>
					</>
				)}
			</>
		</SignUpPageContainer>
	);
};

// SECTION STEPPER STYLES
const ColorlibConnector = withStyles({
	alternativeLabel: {
		top: 22,
	},
	active: {
		'& $line': {
			backgroundColor: accentColor,
		},
	},
	completed: {
		'& $line': {
			backgroundColor: accentColor,
		},
	},
	line: {
		height: 3,
		border: 0,
		backgroundColor: '#eaeaf0',
		borderRadius: 1,
	},
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
	root: {
		backgroundColor: '#ccc',
		zIndex: 1,
		color: '#fff',
		width: 50,
		height: 50,
		display: 'flex',
		borderRadius: '50%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	active: {
		backgroundColor: accentColor,
		boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
	},
	completed: {
		backgroundColor: accentColor,
	},
});

function ColorlibStepIcon(props) {
	const classes = useColorlibStepIconStyles();
	const { active, completed } = props;

	const icons = {
		1: <div style={{ fontSize: '2rem' }}>1</div>,
		2: <div style={{ fontSize: '2rem' }}>2</div>,
		3: <div style={{ fontSize: '2rem' }}>3</div>,
	};

	return (
		<div
			className={clsx(classes.root, {
				[classes.active]: active,
				[classes.completed]: completed,
			})}
		>
			{completed ? <Icon icon={bxCheck} style={{ fontSize: '3rem' }} /> : icons[String(props.icon)]}
			{/* { icons[String(props.icon)]} */}
		</div>
	);
}

ColorlibStepIcon.propTypes = {
	/**
	 * Whether this step is active.
	 */
	active: PropTypes.bool,
	/**
	 * Mark the step as completed. Is passed to child components.
	 */
	completed: PropTypes.bool,
	/**
	 * The label displayed in the step icon.
	 */
	icon: PropTypes.node,
};

function getSteps() {
	return ['User Type', 'General Info', 'Additional Info'];
}
export default NewSignUp;
