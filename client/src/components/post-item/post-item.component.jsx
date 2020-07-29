import React from 'react';

// styled components
import { PostItemContainer } from 'components/post-item/post-item.styles';
import { withRouter } from 'react-router-dom';

const PostItem = ({posts, history}) => {

	return (
		<>
			{posts.map((post) => {
				const { id, postedBy, avatar, location, time, title, thumbnail } = post;

				return (
					<PostItemContainer key={id} onClick={() => history.push(`/details/${id}`)}>
						<div className='avatar' style={{ backgroundImage: 'url(' + avatar + ')' }}></div>
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
							<img src={thumbnail} alt={title} className='card-img' />
						</div>
					</PostItemContainer>
				);
			})}
		</>
	);
};

export default withRouter(PostItem);