import React from 'react';

// styled components
import { UploadImageContainer } from 'components/upload-image-button/upload-image-button.styles';

// icons
import { InlineIcon } from '@iconify/react';
import imageUpload from '@iconify/icons-uil/image-upload';


export const UploadImageButton = ({ handleImageChange, imageURI, label, ...props }) => (
	<UploadImageContainer>
		<button className='btn'><InlineIcon icon={imageUpload} className='icon' />{label}</button>
		<input onChange={handleImageChange} {...props} />
    {/* <div  className={imageURI ? 'image-holder d-block': 'd-none'} >
      <img src={imageURI} alt="" className="img-holder"/>
    </div> */}
	</UploadImageContainer>
);
