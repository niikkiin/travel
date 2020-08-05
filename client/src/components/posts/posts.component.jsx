import React from 'react';

// styled components
import { PostsContainer } from 'components/posts/posts.styles';

// components
import PostItem from 'components/post-item/post-item.component';

// lazy load
import LazyLoad from 'react-lazyload';
import { Spinner } from 'components/spinner/spinner.component';

const Posts = ({ posts }) => {
	return (
		<PostsContainer>
			{posts.map((post) => (
				<LazyLoad key={post.id} height={100} offset={[-100, 100]} placeholder={<Spinner />}>
					<PostItem key={post.id} {...post} />
				</LazyLoad>
			))}
		</PostsContainer>
	);
};

export default Posts;
