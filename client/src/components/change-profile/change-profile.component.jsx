import React, { useState, useCallback } from 'react';

// styled components
import { ChangeProfilePictureContainer, TextLabel } from 'components/change-profile/change-profile.styles';
import { UploadImageButton } from 'components/upload-image-button/upload-image-button.component';

// image crop
import Cropper from 'react-easy-crop';
import Slider from '@material-ui/core/Slider';
import { CustomButton } from 'components/custom-button/custom-button.component';
import getCroppedImg from 'sections/main/cropImage';

// redux
import { toggleChangeProfilePicture } from 'store/actions/change-profile-image.actions';
import { connect } from 'react-redux';

const ChangeProfile = ({ setAvatar, avatar, setFormData, formData, toggleChangeProfilePicture }) => {
	const [crop, setCrop] = useState({ x: 0, y: 0 });
	const [rotation, setRotation] = useState(0);
	const [zoom, setZoom] = useState(0.4);
	const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

	const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
		setCroppedAreaPixels(croppedAreaPixels);
	}, []);

	const handleProfilePicChange = (e) => {
		const reader = new FileReader();
		reader.onload = () => {
			if (reader.readyState === 2) {
				setAvatar({ imageURL: reader.result });
			}
		};
		reader.readAsDataURL(e.target.files[0]);
	};

	const handlePostSubmit = async (e) => {
		e.preventDefault();

		// await showCroppedImage();
		try {
			const cropped = await getCroppedImg(avatar.imageURL, croppedAreaPixels, rotation);
			setFormData({ ...formData, avatarImg: cropped });
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<ChangeProfilePictureContainer>
			<h2>Change Profile Photo</h2>
			<form className='form' onSubmit={(e) => handlePostSubmit(e)} noValidate>
				<UploadImageButton
					name='imageURL'
					type='file'
					label='Upload a Photo'
					handleImageChange={(e) => handleProfilePicChange(e)}
					imageURI={avatar.imageURL}
					accept='image/*'
					id='imageURL'
					required
				/>
				<CustomButton type='submit' disabled={!avatar.imageURL} onClick={toggleChangeProfilePicture}>
					Update Profile Photo
				</CustomButton>
			</form>
			{
				avatar.imageURL ?
				<>
					<div className='crop-container'>
					<Cropper
						image={avatar.imageURL}
						crop={crop}
						step={0.1}
						rotation={rotation}
						zoom={zoom}
						aspect={1/1}
						onCropChange={setCrop}
						onRotationChange={setRotation}
						onCropComplete={onCropComplete}
						onZoomChange={setZoom}
					/>
				</div>
				<TextLabel>Zoom</TextLabel>
				<Slider
					value={zoom}
					step={0.1}
					min={0.4}
					max={3}
					aria-labelledby='Zoom'
					onChange={(e, zoom) => setZoom(zoom)}
				/>
				<TextLabel>Rotate</TextLabel>
				<div>
					<Slider
						value={rotation}
						min={0}
						max={360}
						step={1}
						aria-labelledby='Rotation'
						onChange={(e, rotation) => setRotation(rotation)}
					/>
				</div>
				</>
			:
			null	
		}
		</ChangeProfilePictureContainer>
	);
};
export default connect(null, { toggleChangeProfilePicture })(ChangeProfile);
