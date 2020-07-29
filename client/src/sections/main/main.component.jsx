import React, { useState, useCallback } from 'react';

import { Main } from './main.styles';
import Header from 'sections/header/header.component';
import { LeftSidebar } from 'sections/left-sidebar/left-sidebar.component';
import { RightSidebar } from 'sections/right-sidebar/right-sidebar.component';
import { CreatePost } from 'components/create-post/create-post.component';

// images
import profile3 from 'assets/profile3.png';

import getCroppedImg from './cropImage';

// data
import { POST_DATA } from 'data/posts.data';

const MainSection = ({children}) => {
	const [creatingPost, setCreatingPost] = useState(false);

	const [posts, setPosts] = useState(POST_DATA);

	const [crop, setCrop] = useState({ x: 0, y: 0 });
	const [zoom, setZoom] = useState(1);
	const [rotation] = useState(0);
	// const [croppedImage, setCroppedImage] = useState(null)
	const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
	const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
		setCroppedAreaPixels(croppedAreaPixels);
	}, []);

	const handleCreatePost = () => {
		setCreatingPost(!creatingPost);
	};

	const [formData, setFormData] = useState({
		caption: '',
	});
	const [img, setImg] = useState({
		imageURI: '',
	});

	const { caption } = formData;
	const { imageURI } = img;

	const handlePostSubmit = async (e) => {
		e.preventDefault();

		// await showCroppedImage();
		try {
			const cropped = await getCroppedImg(imageURI, croppedAreaPixels, rotation);
			setPosts([
				...posts,
				{
					id: 1,
					postedBy: 'Sam Rose',
					avatar: profile3,
					location: 'Eco-Tours',
					time: 'just now',
					title: formData.caption,
					thumbnail: cropped,
				},
			]);
		} catch (e) {
			console.error(e);
		}

		setFormData({ caption: '' });
		setImg({ imageURI: '' });
	};

	const handlePostChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handlePostImageChange = (e) => {
		const reader = new FileReader();
		reader.onload = () => {
			if (reader.readyState === 2) {
				setImg({ imageURI: reader.result });
			}
		};
		reader.readAsDataURL(e.target.files[0]);
	};

	return (
		<Main>
			<Header isNavItemActive={creatingPost} handleCreatePost={handleCreatePost} />
			<LeftSidebar />
			<div className='main-content'>
				{creatingPost ? (
					<>
						<CreatePost
							crop={crop}
							zoom={zoom}
							setCrop={setCrop}
							onCropComplete={onCropComplete}
							setZoom={setZoom}
							handlePostImageChange={handlePostImageChange}
							handlePostSubmit={handlePostSubmit}
							handlePostChange={handlePostChange}
							setPosts={setPosts}
							caption={caption}
							imageURI={imageURI}
						/>
					</>
				) : (
					<CreatePost isClosed />
				)}
				{children}
				{/* <Posts posts={posts} /> */}
			</div>
			<RightSidebar />
		</Main>
	);
};

export default MainSection;
