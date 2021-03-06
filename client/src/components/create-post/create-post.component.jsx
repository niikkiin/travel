import React from 'react';

// styled components
import {
	CreatePostContainer,
	CropperContainer,
	ZoomContainer,
	HeaderCreatePost,
} from 'components/create-post/create-post.styles';

// components
import { FormInput } from 'components/form-input/form-input.component';
import { CustomButton } from 'components/custom-button/custom-button.component';
import { UploadImageButton } from 'components/upload-image-button/upload-image-button.component';

// image crop
import Cropper from 'react-easy-crop';

// material ui
import Slider from '@material-ui/core/Slider';

// redux
import { connect } from 'react-redux';
import { toggleCreatePost } from 'store/actions/create-post.action';

const CreatePost = ({
	isClosed,
	handlePostSubmit,
	handlePostChange,
	handlePostImageChange,
	caption,
	imageURI,
	crop,
	zoom,
	rotation,
	setRotation,
	setCrop,
	onCropComplete,
	setZoom,
	toggleCreatePost,
}) => {
	const MAX_LENGTH = 64;
	return (
		<CreatePostContainer className={isClosed ? 'is-closed' : ''}>
			<HeaderCreatePost>
				<h3 className='title'>Create Post</h3>
				<div className='x-mark' onClick={toggleCreatePost}>
					&#10005;
				</div>
			</HeaderCreatePost>
			<form className='form' onSubmit={(e) => handlePostSubmit(e)}>
				<div className='caption-container'>
					<div className={caption.length === MAX_LENGTH ? 'caption-length full-length' : 'caption-length'}>{caption.length} / {MAX_LENGTH}</div>
					<FormInput
						className={caption.length === MAX_LENGTH ? 'caption full-length-on-input' : 'caption'}
						name='caption'
						type='text'
						handleChange={(e) => handlePostChange(e)}
						value={caption}
						label='Your Caption'
						id='caption'
						maxLength={MAX_LENGTH}
						required
					/>
				</div>
				<UploadImageButton
					name='imageURI'
					type='file'
					handleImageChange={(e) => handlePostImageChange(e)}
					// value={imageURI}
					label='Upload a Photo'
					accept='image/*'
					imageURI={imageURI}
					id='imageURI'
					required
				/>
				{imageURI ? (
					<>
						<CropperContainer>
							<Cropper
								image={imageURI}
								crop={crop}
								zoom={zoom}
								rotation={rotation}
								onRotationChange={setRotation}
								aspect={16 / 9}
								onCropChange={setCrop}
								onCropComplete={onCropComplete}
								onZoomChange={setZoom}
							/>
						</CropperContainer>
						<ZoomContainer>Zoom</ZoomContainer>
						<Slider
							value={zoom}
							min={0.5}
							max={3}
							step={0.1}
							aria-labelledby='Zoom'
							onChange={(e, zoom) => setZoom(zoom)}
						/>
						<ZoomContainer>Rotate</ZoomContainer>
						<Slider
							value={rotation}
							min={0}
							max={360}
							step={1}
							aria-labelledby='Rotation'
							onChange={(e, rotation) => setRotation(rotation)}
						/>
					</>
				) : null}
				<CustomButton type='submit' disabled={!caption || !imageURI}>
					Create Post
				</CustomButton>
			</form>
		</CreatePostContainer>
	);
};

export default connect(null, { toggleCreatePost })(CreatePost);
