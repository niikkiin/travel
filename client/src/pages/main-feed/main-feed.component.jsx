import React, { useState, useCallback } from 'react';

import { MainFeedContainer } from 'pages/main-feed/main-feed.styles';

// data
import { POST_DATA } from 'data/posts.data';

// images
import profile3 from 'assets/profile3.png';

import getCroppedImg from 'sections/main/cropImage';

// components
import Posts from 'sections/posts/posts.component';
import { connect } from 'react-redux';
import { CreatePost } from 'components/create-post/create-post.component';

const MainFeed = ({ hidden }) => {

	const [posts, setPosts] = useState(POST_DATA);

	const [crop, setCrop] = useState({ x: 0, y: 0 });
	const [zoom, setZoom] = useState(1);
	const [rotation, setRotation] = useState(0);
	const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
	const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
		setCroppedAreaPixels(croppedAreaPixels);
	}, []);


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
		<MainFeedContainer>
			{hidden ? 
					<CreatePost
					crop={crop}
					zoom={zoom}
					rotation={rotation}
					setRotation={setRotation}
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
			: null}
			Main Feed
			<Posts posts={posts} />
		</MainFeedContainer>
	);
};

const mapStateToProps = ({ createPost: { hidden } }) => ({
	hidden,
});

export default connect(mapStateToProps)(MainFeed);
