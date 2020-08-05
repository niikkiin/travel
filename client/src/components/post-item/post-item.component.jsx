import React from 'react';

// styled components
import { PostItemContainer } from 'components/post-item/post-item.styles';
import { withRouter } from 'react-router-dom';

// loading
// import Img from 'react-cool-img';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
// import LoadingSVG from 'assets/loading.svg';

const PostItem = ({ posts, history }) => {
	return (
		<>
			{posts.map((post) => {
				const { id, postedBy, avatar, location, time, title, thumbnail } = post;

				return (
					<PostItemContainer key={id} onClick={() => history.push(`/details/${id}`)}>
						<div className='avatar' style={{ backgroundImage: 'url(' + avatar + ')' }}></div>
						{/* <div className='post-avatar'>
							<LazyLoadImage height={70} width={70} className='img-avatar' alt={postedBy} effect='blur' src={avatar} />
						</div> */}
						<div className='post-info'>
							<span className='posted-by-text'>Posted by </span>
							<span className='posted-by link'>{postedBy}</span>
							<span className='post-from-text'> from </span>
							<span className='location link'>{location}</span> <span className='time'>{time}</span>
						</div>
						<div className='card'>
							<div className='card-body'>
								<p className='post-title'>{title}</p>
							</div>
							<LazyLoadImage className='card-img' alt={title} effect='blur' src={thumbnail} />
						</div>
					</PostItemContainer>
				);
			})}
		</>
	);
};
export default withRouter(PostItem);
