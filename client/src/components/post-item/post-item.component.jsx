import React from 'react';

// styled components
import { PostItemContainer } from 'components/post-item/post-item.styles';
import { withRouter } from 'react-router-dom';

// loading
// import Img from 'react-cool-img';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import LazyLoad from 'react-lazyload';
import { Spinner } from 'components/spinner/spinner.component';
// import LoadingSVG from 'assets/loading.svg';

const PostItem = ({ id, postedBy, avatar, businessName, time, title, thumbnail, history }) => {
	return (
		<PostItemContainer onClick={() => history.push(`/details/${id}`)}>
			<div className='avatar' style={{ backgroundImage: 'url(' + avatar + ')' }}></div>
			<div className='post-info'>
				<span className='posted-by-text'>Posted by </span>
				<span className='posted-by link'>{postedBy}</span>
				<span className='post-from-text'> from </span>
				<span className='location link'>{businessName}</span> <span className='time'>{time}</span>
				
			</div>
			<div className='card'>
				<div className='card-body'>
					<p className='post-title'>{title}</p>
				</div>
				<LazyLoad once placeholder={<Spinner />}>
					<img className='card-img' alt={title} effect='blur' src={thumbnail} />
					</LazyLoad>
				</div>
		</PostItemContainer>
	);
};
export default withRouter(PostItem);
